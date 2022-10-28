import Image from './assets/IMG_9036.jpeg'
import { AiOutlineCamera } from 'react-icons/ai'
import { ReactComponent as Share } from './assets/sharebutton.svg'
import { ReactComponent as More } from './assets/more.svg'
import Tooltip from './Tooltip'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <Tooltip
        tooltip={
          <>
            <Share className='share' /> <More className='more' />
          </>
        }
        tooltipText={'Share link'}
        direction={'left'}
      />
      <div className='profile-img-container'>
        <img src={Image} alt='Profile-img' id='profile_img' />
        <AiOutlineCamera color='#ffffff' className='camera' />
      </div>
      <h2 id='twitter'>Softowerribwoy</h2>
      <p
        id='slack'
        style={{
          display: 'none',
        }}>
        Kayzubi
      </p>
    </div>
  )
}

export default Profile
