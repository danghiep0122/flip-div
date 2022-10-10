import { useState } from 'react'
import './styles.scss'

function Account() {
  const [logIn, setLogIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const handleLogIn = () => {
    setLogIn(true)
    setSignIn(false)
  }
  const handleSignIn = () => {
    setSignIn(true)
    setLogIn(false)
  }

  return (
    <div>
      <h1>Account Page</h1>
      <div className="container">
        <div className={logIn ? 'logIn  flip' : 'signIn flip'}>
          <h1 className={logIn ? 'logIn' : ''} onClick={handleLogIn}>
            logIn
          </h1>
          <h1 className={signIn ? 'signIn' : ''} onClick={handleSignIn}>
            signIn
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Account
