import Image from './assets/IMG_9036.jpeg'
import { AiOutlineCamera } from 'react-icons/ai'
import { ReactComponent as Share } from './assets/sharebutton.svg'
import Tooltip from './Tooltip'
import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <Tooltip tooltip={<Share />} tooltipText={'Share'} direction={'left'} />
      <div className='profile-img'>
        <img src={Image} alt='Profile-img' id='profile_img' />
        <AiOutlineCamera color='#ffffff' className='camera' />
      </div>
      <h1 id='twitter'>Softowerribwoy</h1>
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
