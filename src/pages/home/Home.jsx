import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <div className='PostSide'>Posts</div>
        <div className='RightSide'>Rightside</div>
    </div>
  )
}

export default Home