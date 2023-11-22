import React from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
  const { user } = useContext(useContext)
  if (!user) return <div>plase Log in</div>
  return <div>Welcome {user.username}</div>
}

export default Profile
