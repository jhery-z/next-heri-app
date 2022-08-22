import React from 'react';
import Link from 'next/link';

const RepoListItem = ({repo}) => {
  return (
    <div>
      <Link href="/repo/[id]" as={'/repo/${repo.id}'}>
        <a>{repo.name}</a>
      </Link>
      <p>{repo.description}</p>
    </div>
  )
}

export default RepoListItem
