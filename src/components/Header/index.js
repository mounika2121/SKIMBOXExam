import {useState} from 'react'
import Dropdown from '../DropdownBox'
import './index.css'

const Header = () => {
  const [editClicked, setEditClicked] = useState(false)
  const buttonClicked = () => {
    setEditClicked(preState => !preState)
  }
  return (
    <>
      <nav>
        <button type="button">File</button>
        <button
          type="button"
          className={`${editClicked && 'buttonClicked'}`}
          onClick={buttonClicked}
        >
          Edit
        </button>
        <button type="button">Formate</button>
        <button type="button">View</button>
        <button type="button">History</button>
        <button type="button">Bookmarks</button>
        <button type="button">Tools</button>
        <button type="button">Help</button>
      </nav>
      {editClicked && <Dropdown />}
    </>
  )
}

export default Header
