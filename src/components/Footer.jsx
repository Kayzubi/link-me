import I4G from './assets/I4G.png'
import Logo from './assets/Vector.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <img src={Logo} alt='Zuri internship' />
        <p className='footer-text'>HNG Internship 9 Frontend Task 1</p>
        <img src={I4G} alt='ingressive for good' />
      </div>
    </div>
  )
}

export default Footer
