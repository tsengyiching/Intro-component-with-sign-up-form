function Intro() {
  return (
    <main className='main'>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is
        great, but understanding how developers think is invaluable.
      </p>
      <p className='card bg-primary text-white'>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
      <form>
        <input type='text' id='fname' name='fname' placeholder='First Name' />
        <input type='text' id='lname' name='lname' placeholder='Last Name' />
        <input type='text' id='email' name='email' placeholder='Email Address' />
        <input type='password' id='pass' name='password' placeholder='Password' />
        <input type='submit' value='CLAIM YOUR FREE TRIAL' />
        <p>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
    </main>
  )
}

export default Intro
