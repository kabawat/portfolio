"use client"
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '@/components/common/heading';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa';
import ContributionHeatmap from '@/components/home/ContributionHeatmap';

const TABS = [
  { id: 'all', label: 'All Activity' },
  { id: 'github', label: 'GitHub' },
  { id: 'gitlab', label: 'GitLab' },
];

function ProfileStats({ profile, platform }) {
  if (!profile) return null;

  const PlatformIcon = platform === 'github' ? FaGithub : FaGitlab;

  return (
    <div className={`activity-profile activity-profile--${platform}`}>
      <div className="activity-profile__header">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={`${profile.name || profile.username} avatar`}
            className="activity-profile__avatar"
            width={56}
            height={56}
          />
        ) : (
          <div className="activity-profile__avatar activity-profile__avatar--placeholder">
            <PlatformIcon />
          </div>
        )}
        <div className="activity-profile__info">
          <h3>{profile.name || profile.username}</h3>
          <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
            @{profile.username}
          </a>
        </div>
        <a
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="activity-profile__link"
          aria-label={`View ${platform} profile`}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="activity-profile__stats">
        <div className="stat">
          <span className="stat__value">{profile.publicRepos ?? 0}</span>
          <span className="stat__label">Repos</span>
        </div>
        {platform === 'github' && (
          <>
            <div className="stat">
              <span className="stat__value">{profile.followers ?? 0}</span>
              <span className="stat__label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat__value">{profile.following ?? 0}</span>
              <span className="stat__label">Following</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const DevActivity = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch('/api/activity');
        if (!response.ok) throw new Error('Failed to load activity');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  return (
    <section className="dev-activity-section" id="activity" aria-labelledby="activity-heading">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={8} xl={8} lg={10} md={12}>
            <Heading title="GitHub & GitLab Activity" />
            <p className="text-center desc-text activity-desc" data-aos="zoom-in">
              Complete contribution history across GitHub and GitLab — commits, merge requests, issues, and more.
            </p>
          </Col>
        </Row>

        {loading ? (
          <LoadingSpinner text="Loading activity..." />
        ) : error ? (
          <div className="activity-empty activity-empty--error" role="alert">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <div className="activity-tabs" role="tablist" aria-label="Activity platforms">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`activity-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.id === 'github' && <FaGithub aria-hidden="true" />}
                  {tab.id === 'gitlab' && <FaGitlab aria-hidden="true" />}
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab !== 'all' && (
              <ProfileStats profile={data[activeTab]?.profile} platform={activeTab} />
            )}

            {activeTab === 'all' && (
              <Row className="activity-profiles-row">
                <Col md={6}>
                  <ProfileStats profile={data.github?.profile} platform="github" />
                </Col>
                <Col md={6}>
                  <ProfileStats profile={data.gitlab?.profile} platform="gitlab" />
                </Col>
              </Row>
            )}

            <Row className="contribution-heatmaps-row">
              {(activeTab === 'all' || activeTab === 'github') && (
                <Col lg={activeTab === 'all' ? 6 : 12}>
                  <ContributionHeatmap
                    calendar={data.github?.calendar}
                    platform="github"
                    profileUrl={data.github?.profile?.profileUrl}
                    title="GitHub Activity"
                  />
                </Col>
              )}
              {(activeTab === 'all' || activeTab === 'gitlab') && (
                <Col lg={activeTab === 'all' ? 6 : 12}>
                  <ContributionHeatmap
                    calendar={data.gitlab?.calendar}
                    platform="gitlab"
                    profileUrl={data.gitlab?.profile?.profileUrl}
                    title="GitLab Activity"
                  />
                </Col>
              )}
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export default DevActivity;
