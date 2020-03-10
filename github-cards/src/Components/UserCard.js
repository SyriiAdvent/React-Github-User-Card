import React from 'react'
import './UserCard.css'
// import GitHubCalendar from 'github-calendar'

const UserCard = ({ user }) => {


  return (
    <div className='cardContainer'>
        <img className='userImg' src={user.avatar_url} alt={user.name} />
      <div className='cardInfo'>
        <h3>{user.name}</h3>
        <h4>{user.login}</h4>

        <p>Location: {user.location}</p>
        <p>Profile: <a href={user.html_url}>{user.html_url}</a></p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>{user.blog}</p>
      </div>
      <div className={`calendar ${user.login}`}>
        {/* {GitHubCalendar(`.${user.login}`, `${user.login}`, { responsive: true })} */}
      </div>
    </div>
  )
}

export default UserCard
