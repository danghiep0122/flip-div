import { XtimesIcon } from '../../../icons/Icons'
import { useState, useRef } from 'react'
import './styles.scss'

function LogModal() {
  const [logIn, setLogIn] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const user = useRef(null)
  const [modal, setModal] = useState(true)
  const [userName, setUserName] = useState('')
  const [ten, setTen] = useState('')

  const handleLogIn = () => {
    setLogIn(true)
    setSignIn(false)
  }
  const handleSignIn = () => {
    setSignIn(true)
    setLogIn(false)
  }

  const handleClick = () => {
    setModal(true)
  }
  const offModal = () => {
    setModal(false)
  }
  const handleSubmit = () => {
    setTen(userName)
    setUserName('')
    user.current.focus()
  }
  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const NoModal = () => <></>
  const ModalWrapper = () => (
    <div className="Modal-wrapper">
      <div onClick={offModal} className="modal">
        modal
      </div>

      <div onClick={handleClick} className="input-form">
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
        <input
          onKeyDown={handleKeydown}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          ref={user}
          placeholder="Nhap vao day"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        <h1>{ten}</h1>
      </div>
      <div className="offModalBtn" onClick={offModal}>
        <XtimesIcon />
      </div>
    </div>
  )

  return (
    <div>
      <div className="body">
        <button type="button" onClick={handleClick} className="active-modal">
          Click Me
        </button>
        {modal ? ModalWrapper() : NoModal()}{' '}
      </div>
    </div>
  )
}

export default LogModal
