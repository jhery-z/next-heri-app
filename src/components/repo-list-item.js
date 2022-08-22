import React from 'react'

const RepoListItem = ({repo}) => {
  return (
    <div>
      <link href="/repo/[id]" as={'/repo/${repo.id}'}>
        <a>{repo.name}</a>
      </link>
      <p>{repo.description}</p>
    </div>
  )
}

export default RepoListItem
