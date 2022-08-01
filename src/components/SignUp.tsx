import React from 'react'
import validator from 'validator'

function SignUp() {
  const [fname, setFname] = React.useState('')
  const [lname, setLname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(!submitting)
  }

  return (
    <main className='main'>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is
        great, but understanding how developers think is invaluable.
      </p>
      <p className='banner'>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
      <form className='sign-in' onSubmit={submitForm}>
        <input
          className={`${submitting && !fname ? 'error' : ''}`}
          type='text'
          id='fname'
          name='fname'
          placeholder='First Name'
          onChange={(e) => {
            setFname(e.target.value)
            setSubmitting(false)
          }}
        />
        {submitting && !fname ? <p className='warning'>First name cannot be empty</p> : null}
        <input
          className={`${submitting && !lname ? 'error' : ''}`}
          type='text'
          id='lname'
          name='lname'
          placeholder='Last Name'
          onChange={(e) => {
            setLname(e.target.value)
            setSubmitting(false)
          }}
        />
        {submitting && !lname ? <p className='warning'>Last name cannot be empty</p> : null}
        <input
          className={`${submitting && !email ? 'error' : ''} ${
            submitting && email && !validator.isEmail(email) ? 'error error-email' : ''
          }`}
          type='text'
          id='email'
          name='email'
          placeholder='Email Address'
          onChange={(e) => {
            setEmail(e.target.value)
            setSubmitting(false)
          }}
        />
        {submitting && !email ? <p className='warning'>Email cannot be empty</p> : null}
        {submitting && email && !validator.isEmail(email) ? (
          <p className='warning'>Looks like this is not an email</p>
        ) : null}
        <input
          className={`${submitting && !password ? 'error' : ''}`}
          type='password'
          id='pass'
          name='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value)
            setSubmitting(false)
          }}
        />
        {submitting && !password ? <p className='warning'>Password cannot be empty</p> : null}
        <input className='submit' type='submit' value='CLAIM YOUR FREE TRIAL' />
        <p className='terms'>
          By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
        </p>
      </form>
    </main>
  )
}

export default SignUp
