import devActivityConfig from '@/data/devActivity';

const GITHUB_API = 'https://api.github.com';
const GITLAB_API = 'https://gitlab.com/api/v4';
const GITLAB_MAX_PAGES = 100;

function buildCalendarFromDayCounts(dayCounts) {
  const activeDates = Object.keys(dayCounts).filter((date) => dayCounts[date] > 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);

  if (activeDates.length > 0) {
    const earliest = new Date(Math.min(...activeDates.map((date) => new Date(`${date}T00:00:00`).getTime())));
    startDate = earliest;
  }

  startDate.setDate(startDate.getDate() - startDate.getDay());

  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  const current = new Date(startDate);
  const weeks = [];
  let totalContributions = 0;

  while (current <= endDate) {
    const week = { contributionDays: [] };

    for (let day = 0; day < 7; day += 1) {
      const dateStr = current.toISOString().split('T')[0];
      const count = dayCounts[dateStr] || 0;
      totalContributions += count;
      week.contributionDays.push({ date: dateStr, contributionCount: count });
      current.setDate(current.getDate() + 1);
    }

    weeks.push(week);
  }

  return { weeks, totalContributions };
}

function mergeCalendarWeeks(calendar, dayCounts) {
  calendar?.weeks?.forEach((week) => {
    week.contributionDays.forEach((day) => {
      dayCounts[day.date] = (dayCounts[day.date] || 0) + day.contributionCount;
    });
  });
}

async function fetchGithubCalendarForYear(username, year, token) {
  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'kabawat-portfolio',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: `${year}-01-01T00:00:00Z`,
        to: `${year}-12-31T23:59:59Z`,
      },
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) return null;

  const result = await response.json();
  return result?.data?.user?.contributionsCollection?.contributionCalendar || null;
}

async function fetchAllGithubEvents(username, headers) {
  const events = [];
  let page = 1;

  while (page <= 10) {
    const response = await fetch(
      `${GITHUB_API}/users/${username}/events/public?per_page=100&page=${page}`,
      {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'kabawat-portfolio',
          ...headers,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) break;

    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    events.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return events;
}

async function fetchGithubContributionCalendar(username, userCreatedAt) {
  const token = process.env.GITHUB_TOKEN;
  const dayCounts = {};
  const createdYear = userCreatedAt
    ? new Date(userCreatedAt).getFullYear()
    : new Date().getFullYear() - 5;
  const currentYear = new Date().getFullYear();
  let hasData = false;

  try {
    const years = Array.from(
      { length: currentYear - createdYear + 1 },
      (_, index) => createdYear + index
    );

    const calendars = await Promise.all(
      years.map((year) => fetchGithubCalendarForYear(username, year, token))
    );

    calendars.forEach((calendar) => {
      if (calendar?.weeks?.length) {
        mergeCalendarWeeks(calendar, dayCounts);
        hasData = true;
      }
    });

    if (hasData) {
      return buildCalendarFromDayCounts(dayCounts);
    }

    const events = await fetchAllGithubEvents(username, token ? { Authorization: `Bearer ${token}` } : {});
    events.forEach((event) => {
      const date = event.created_at?.split('T')[0];
      if (date) {
        dayCounts[date] = (dayCounts[date] || 0) + 1;
      }
    });

    return buildCalendarFromDayCounts(dayCounts);
  } catch (error) {
    return { weeks: [], totalContributions: 0, error: error.message };
  }
}

async function fetchAllGitlabEvents(userId, headers) {
  const events = [];
  let page = 1;

  while (page <= GITLAB_MAX_PAGES) {
    const response = await fetch(
      `${GITLAB_API}/users/${userId}/events?per_page=100&page=${page}`,
      {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'kabawat-portfolio',
          ...headers,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) break;

    const batch = await response.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    events.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return events;
}

async function fetchGitlabContributionCalendar(userId, headers) {
  try {
    const events = await fetchAllGitlabEvents(userId, headers);
    const dayCounts = {};

    events.forEach((event) => {
      const date = event.created_at?.split('T')[0];
      if (date) {
        dayCounts[date] = (dayCounts[date] || 0) + 1;
      }
    });

    return buildCalendarFromDayCounts(dayCounts);
  } catch (error) {
    return { weeks: [], totalContributions: 0, error: error.message };
  }
}

async function fetchJson(url, headers = {}) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'kabawat-portfolio',
      ...headers,
    },
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchGithubActivity() {
  const { username, profileUrl } = devActivityConfig.github;
  const token = process.env.GITHUB_TOKEN;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  const user = await fetchJson(`${GITHUB_API}/users/${username}`, headers);
  const calendar = await fetchGithubContributionCalendar(username, user.created_at);

  return {
    platform: 'github',
    profile: {
      username: user.login,
      name: user.name,
      avatarUrl: user.avatar_url,
      profileUrl,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
    },
    calendar,
  };
}

async function fetchGitlabActivity() {
  const { username, profileUrl } = devActivityConfig.gitlab;
  const token = process.env.GITLAB_TOKEN;
  const headers = token ? { 'PRIVATE-TOKEN': token } : {};

  const users = await fetchJson(`${GITLAB_API}/users?username=${username}`, headers);
  const user = users?.[0];

  if (!user) {
    return {
      platform: 'gitlab',
      profile: {
        username,
        name: username,
        avatarUrl: null,
        profileUrl,
        publicRepos: 0,
        followers: 0,
        following: 0,
      },
      calendar: { weeks: [], totalContributions: 0 },
      message: 'GitLab profile not found.',
    };
  }

  const [projects, calendar] = await Promise.all([
    fetchJson(
      `${GITLAB_API}/users/${user.id}/projects?per_page=100&order_by=last_activity_at`,
      headers
    ).catch(() => []),
    fetchGitlabContributionCalendar(user.id, headers),
  ]);

  return {
    platform: 'gitlab',
    profile: {
      username: user.username,
      name: user.name,
      avatarUrl: user.avatar_url,
      profileUrl: user.web_url || profileUrl,
      publicRepos: Array.isArray(projects) ? projects.length : 0,
      followers: 0,
      following: 0,
    },
    calendar,
    message: calendar.totalContributions === 0
      ? 'No GitLab activity found yet.'
      : null,
  };
}

export async function getDevActivity() {
  const [github, gitlab] = await Promise.allSettled([
    fetchGithubActivity(),
    fetchGitlabActivity(),
  ]);

  const githubData = github.status === 'fulfilled'
    ? github.value
    : { platform: 'github', profile: null, calendar: { weeks: [], totalContributions: 0 }, error: 'Failed to load GitHub activity.' };

  const gitlabData = gitlab.status === 'fulfilled'
    ? gitlab.value
    : { platform: 'gitlab', profile: null, calendar: { weeks: [], totalContributions: 0 }, error: 'Failed to load GitLab activity.' };

  return {
    github: githubData,
    gitlab: gitlabData,
    fetchedAt: new Date().toISOString(),
  };
}
