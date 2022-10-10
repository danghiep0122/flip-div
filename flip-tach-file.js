import { useState } from 'react'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import './styles.scss'

function Account() {
  const [logIn, setLogIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const handleLogIn = () => {
    setLogIn(true)
    setSignIn(false)
    console.log(logIn)
    console.log(signIn)
  }
  const handleSignIn = () => {
    setSignIn(true)
    setLogIn(false)
    console.log(signIn)
    console.log(logIn)
  }

  return (
    <CommonLayout>
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
    </CommonLayout>
  )
}

export default Account
