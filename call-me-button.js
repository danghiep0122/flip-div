import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import { PhoneSolidIcon, DominoIconNoText } from '../../icons/Icons'
import './styles.scss'
import { useRef, useState } from 'react'

function Menu() {
  const user = useRef(null)
  const [modal, setModal] = useState(true)
  const [userName, setUserName] = useState('')
  const [ten, setTen] = useState('')
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
      <div onClick={offModal} className="Modal">
        modal
      </div>
      <div onClick={handleClick} className="input-form">
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
        <DominoIconNoText />
      </div>
    </div>
  )

  return (
    <CommonLayout>
      <div className="body">
        <button onClick={handleClick} className="active-modal">
          Click Me
        </button>
        {modal ? ModalWrapper() : NoModal()}
        <div className="center">
          <div className="outer-bubble">
            <button className="tel">
              <a href="tel:19006099">
                <PhoneSolidIcon height="30px" width="30px" />
              </a>
              <div className="inner-bubble"></div>
            </button>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}

export default Menu




export const PhoneSolidIcon = ({
  width = '3.2rem',
  height = '3.2rem',
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    fill="white"
    viewBox="0 0 512 512"
  >
    <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
  </svg>
)
