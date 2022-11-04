import { useState } from 'react'
import './Contact.css'

function Contact() {
  const name = 'Kizito'
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateForm(formValues)
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true)
      setFormValues(initialValues)
      setTimeout(() => {
        setIsSubmit(false)
      }, 3000)
    }
  }

  const validateForm = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.firstname) {
      errors.firstname = 'Firstname cannot be empty'
    }
    if (!values.lastname) {
      errors.lastname = 'Lastname cannot be empty'
    }
    if (!values.email) {
      errors.email = 'Email cannot be empty'
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (!values.message) {
      errors.message = 'Please enter a message'
    } else if (values.message.length < 10) {
      errors.message = 'Message must be more than 10 charaters'
    }

    setFormErrors(errors)
  }
  return (
    <div className='contact'>
      <div className='contact__heading'>
        <h1 className='contact__heading-main'>Contact Me</h1>
        <p className='contact__heading-sub'>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      {isSubmit && Object.keys(formErrors).length === 0 ? (
        <div className='success-message'>
          <p>Thank you for your message. I will get back to you shortlty</p>
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className='form'>
        <div className='row'>
          <div className='form__group'>
            <label htmlFor='first_name' className='form__label'>
              Firstname:
            </label>
            <input
              className={
                formErrors.firstname ? 'form__input invalid' : 'form__input'
              }
              type='text'
              name='firstname'
              id='first_name'
              placeholder='Enter your first name'
              value={formValues.firstname}
              onChange={handleChange}
            />
            <small className='error-message'>{formErrors.firstname}</small>
          </div>
          <div className='form__group'>
            <label htmlFor='last_name' className='form__label'>
              Lastname:
            </label>
            <input
              className={
                formErrors.lastname ? 'form__input invalid' : 'form__input'
              }
              type='text'
              name='lastname'
              id='last_name'
              placeholder='Enter your last name'
              value={formValues.lastname}
              onChange={handleChange}
            />
            <small className='error-message'>{formErrors.lastname}</small>
          </div>
        </div>
        <div className='form__group'>
          <label htmlFor='email' className='form__label'>
            Email:
          </label>
          <input
            className={formErrors.email ? 'form__input invalid' : 'form__input'}
            type='email'
            name='email'
            id='email'
            placeholder='yourname@email.com'
            value={formValues.email}
            onChange={handleChange}
          />
          <small className='error-message'>{formErrors.email}</small>
        </div>
        <div className='form__group'>
          <label htmlFor='message' className='form__label'>
            Message:
          </label>
          <textarea
            className={
              formErrors.message ? 'form__input invalid' : 'form__input'
            }
            name='message'
            id='message'
            placeholder="Send me a message and I'll reply you as soon as possible..."
            cols='30'
            rows='10'
            value={formValues.message}
            onChange={handleChange}></textarea>
          <small className='error-message'>{formErrors.message}</small>
        </div>
        <div className='form__group checkbox-wrapper'>
          <div className='checkbox'>
            <input id='check' type='checkbox' required />
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
