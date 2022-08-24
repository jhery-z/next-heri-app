import React from 'react';
import RepoListItem from './repo-list-item';
import styles from './repo-list.module.scss';
import Image from 'next/image';

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <Image src="/img/loader.gif" className={styles.loader} alt="loading"/>;
  }

  if (!repos || repos.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }

  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo}></RepoListItem>
      ))}
    </div>
  );
};

export default RepoList;
