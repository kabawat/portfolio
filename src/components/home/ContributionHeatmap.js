"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react';

const LEVELS = [0, 1, 2, 3, 4];

function getContributionLevel(count) {
  if (!count) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
}

function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDayWithActivity = week.contributionDays.find((day) => {
      const date = new Date(`${day.date}T00:00:00`);
      return date.getDate() <= 7;
    }) || week.contributionDays[0];

    const date = new Date(`${firstDayWithActivity.date}T00:00:00`);
    const month = date.getMonth();

    if (month !== lastMonth) {
      labels.push({
        weekIndex,
        label: date.toLocaleString('en-US', { month: 'short' }),
      });
      lastMonth = month;
    }
  });

  return labels;
}

function getAvailableYears(weeks) {
  const years = new Set();

  weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      years.add(day.date.slice(0, 4));
    });
  });

  return Array.from(years).sort((a, b) => Number(b) - Number(a));
}

function filterCalendarByYear(calendar, year) {
  if (!year || year === 'all') {
    return calendar;
  }

  const dayMap = {};
  calendar.weeks.forEach((week) => {
    week.contributionDays.forEach((day) => {
      if (day.date.startsWith(`${year}-`)) {
        dayMap[day.date] = day.contributionCount;
      }
    });
  });

  const startDate = new Date(`${year}-01-01T00:00:00`);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const endDate = new Date(`${year}-12-31T00:00:00`);
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  const current = new Date(startDate);
  const weeks = [];
  let totalContributions = 0;

  while (current <= endDate) {
    const week = { contributionDays: [] };

    for (let day = 0; day < 7; day += 1) {
      const dateStr = current.toISOString().split('T')[0];
      const count = dayMap[dateStr] || 0;
      totalContributions += count;
      week.contributionDays.push({ date: dateStr, contributionCount: count });
      current.setDate(current.getDate() + 1);
    }

    weeks.push(week);
  }

  return { weeks, totalContributions };
}

const ContributionHeatmap = ({
  calendar,
  platform,
  profileUrl,
  title = 'Activity',
}) => {
  const chartRef = useRef(null);
  const allWeeks = useMemo(() => calendar?.weeks || [], [calendar?.weeks]);
  const availableYears = useMemo(() => getAvailableYears(allWeeks), [allWeeks]);
  const defaultYear = useMemo(() => {
    const currentYear = String(new Date().getFullYear());
    if (availableYears.includes(currentYear)) return currentYear;
    return availableYears[0] || 'all';
  }, [availableYears]);

  const [selectedYear, setSelectedYear] = useState(defaultYear);

  useEffect(() => {
    setSelectedYear(defaultYear);
  }, [defaultYear]);

  const filteredCalendar = useMemo(
    () => filterCalendarByYear(calendar || { weeks: [], totalContributions: 0 }, selectedYear),
    [calendar, selectedYear]
  );

  const weeks = filteredCalendar.weeks;
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart || !weeks.length) return;

    const scrollToRecentActivity = () => {
      chart.scrollLeft = chart.scrollWidth;
    };

    scrollToRecentActivity();
    requestAnimationFrame(scrollToRecentActivity);
  }, [weeks, selectedYear]);

  const dateRange = useMemo(() => {
    if (selectedYear !== 'all') {
      return { start: `Jan ${selectedYear}`, end: `Dec ${selectedYear}` };
    }

    const activeDays = weeks
      .flatMap((week) => week.contributionDays)
      .filter((day) => day.contributionCount > 0);

    if (!activeDays.length) return null;

    const dates = activeDays.map((day) => day.date).sort();
    const format = (dateStr) => new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });

    return {
      start: format(dates[0]),
      end: format(dates[dates.length - 1]),
    };
  }, [weeks, selectedYear]);

  const headerActions = (
    <div className="contribution-heatmap__actions">
      {availableYears.length > 0 && (
        <select
          className="contribution-heatmap__year-filter"
          value={selectedYear}
          onChange={(event) => setSelectedYear(event.target.value)}
          aria-label={`Filter ${platform} activity by year`}
        >
          <option value="all">All years</option>
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
      {profileUrl && (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          View all
        </a>
      )}
    </div>
  );

  if (!allWeeks.length) {
    return (
      <div className={`contribution-heatmap contribution-heatmap--${platform}`}>
        <div className="contribution-heatmap__header">
          <h4>{title}</h4>
          {headerActions}
        </div>
        <div className="contribution-heatmap__empty">
          <p>No contribution data available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`contribution-heatmap contribution-heatmap--${platform}`}>
      <div className="contribution-heatmap__header">
        <h4>{title}</h4>
        {headerActions}
      </div>

      <div className="contribution-heatmap__summary">
        <strong>{filteredCalendar.totalContributions ?? 0}</strong> total contributions
        {dateRange && (
          <span> from {dateRange.start} to {dateRange.end}</span>
        )}
      </div>

      <div
        ref={chartRef}
        className="contribution-heatmap__chart"
        role="img"
        aria-label={`${platform} contribution activity`}
      >
        <div className="contribution-heatmap__months" aria-hidden="true">
          {weeks.map((_, weekIndex) => {
            const month = monthLabels.find((item) => item.weekIndex === weekIndex);
            return (
              <span key={`month-${weekIndex}`} className="contribution-heatmap__month">
                {month?.label || ''}
              </span>
            );
          })}
        </div>

        <div className="contribution-heatmap__grid-wrap">
          <div className="contribution-heatmap__weekdays" aria-hidden="true">
            <span />
            <span>Mon</span>
            <span />
            <span>Wed</span>
            <span />
            <span>Fri</span>
            <span />
          </div>

          <div className="contribution-heatmap__weeks">
            {weeks.map((week, weekIndex) => (
              <div key={`week-${weekIndex}`} className="contribution-heatmap__week">
                {week.contributionDays.map((day) => {
                  const level = getContributionLevel(day.contributionCount);
                  const formattedDate = new Date(`${day.date}T00:00:00`).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  });

                  return (
                    <div
                      key={day.date}
                      className={`contribution-heatmap__day level-${level}`}
                      title={`${day.contributionCount} contribution${day.contributionCount === 1 ? '' : 's'} on ${formattedDate}`}
                      data-date={day.date}
                      data-count={day.contributionCount}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contribution-heatmap__footer">
        <div className="contribution-heatmap__legend" aria-hidden="true">
          <span>Less</span>
          {LEVELS.map((level) => (
            <div key={level} className={`contribution-heatmap__day level-${level}`} />
          ))}
          <span>More</span>
        </div>
        <p className="contribution-heatmap__caption">
          Issues, merge requests, pushes, and comments.
        </p>
      </div>
    </div>
  );
};

export default ContributionHeatmap;
