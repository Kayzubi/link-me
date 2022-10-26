import { useNavigate, Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import './NotFound.css'

function NotFound() {
  let navigate = useNavigate()

  return (
    <div className='error'>
      <div className='container'>
        <p className='error-type'>404 error</p>
        <h1 className='error-heading'>We can't find that page</h1>
        <p className='error-message'>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className='error-buttons'>
          <button
            className='error-btn error-btn-outline'
            onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack /> Go back
          </button>
          <Link className='error-btn error-btn-primary' to={'/'}>
            Take me home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
