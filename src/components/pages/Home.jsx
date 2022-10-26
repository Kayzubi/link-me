import Profile from '../Profile'
import LinkList from '../LinkList'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Profile />
        <LinkList />
        <div className='social'></div>
      </div>
    </div>
  )
}

export default Home
