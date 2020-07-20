import React from 'react'

import styles from './RepoItem.module.css'

export const RepoItem = ({repo}) => {
    return (
        <div className={styles.reposStyle}>
           
         {
               <a href={repo.html_url} >{repo.name}</a> 
          }

        </div>
    )
}
