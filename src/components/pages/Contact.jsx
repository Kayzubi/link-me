import './Contact.css'

function Contact() {
  const name = 'Kizito'
  return (
    <div className='contact'>
      <div className='contact__heading'>
        <h1 className='contact__heading-main'>Contact Me</h1>
        <p className='contact__heading-sub'>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form action='#' className='form'>
        <div className='row'>
          <div className='form__group'>
            <label htmlFor='first_name' className='form__label'>
              Firstname:
            </label>
            <input
              className='form__input'
              type='text'
              name='firstname'
              id='first_name'
              placeholder='Enter your first name'
              required
            />
          </div>
          <div className='form__group'>
            <label htmlFor='last_name' className='form__label'>
              Lastname:
            </label>
            <input
              className='form__input'
              type='text'
              name='lastname'
              id='last_name'
              placeholder='Enter your last name'
              required
            />
          </div>
        </div>
        <div className='form__group'>
          <label htmlFor='email' className='form__label'>
            Email:
          </label>
          <input
            className='form__input'
            type='email'
            name='email'
            id='email'
            placeholder='yourname@email.com'
            required
          />
        </div>
        <div className='form__group'>
          <label htmlFor='message' className='form__label'>
            Message:
          </label>
          <textarea
            className='form__input'
            name='message'
            id='message'
            placeholder="Send me a message and I'll reply you as soon as possible..."
            cols='30'
            rows='10'
            required></textarea>
        </div>
        <div className='form__group checkbox-wrapper'>
          <div className='checkbox'>
            <input id='check' type='checkbox' />
            <label for='check'>
              <svg viewBox='0,0,50,50'>
                <path d='M5 30 L 20 45 L 45 5'></path>
              </svg>
            </label>
          </div>
          <p>
            {`You agree to providing your data to ${name} who may contact you.`}
          </p>
        </div>
        <button type='submit' id='btn__submit' className='btn btn__submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
