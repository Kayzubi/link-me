import Profile from '../Profile'
import LinkList from '../LinkList'
import { ReactComponent as Slack } from '../assets/slack.svg'
import { ReactComponent as Github } from '../assets/github.svg'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Profile />
        <LinkList />
        <div
          className='social'
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <a href='https://slack.com/'>
            <Slack />
          </a>
          <a href='https://github.com/Kayzubi?'>
            <Github />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
