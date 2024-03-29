import React from 'react'
import { RepoItem } from './RepoItem'

export const Repos = ({repos}) => {
    return (
        <div>
            {repos.map(repo => <RepoItem repo={repo} key={repo.id} /> )}
        </div>
    )
}
