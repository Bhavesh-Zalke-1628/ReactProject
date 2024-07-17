import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
  const { user } = useContext(UserContext)
  console.log(user)
  if (!user) return <div>plase Log in</div>
  return <div>Welcome {user.userName}</div>
}

export default Profile
