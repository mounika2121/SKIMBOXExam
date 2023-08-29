import './index.css'

const DropdownBox = () => (
  <ul>
    <li>
      <div className="edit-options">
        <p>Undo</p>
        <p>cmdZ</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Redo</p>
        <p>cmdY</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Cut</p>
        <p>cmdX</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Copy</p>
        <p>cmdC</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Past</p>
        <p>cmdV</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Select All</p>
        <p>cmdA</p>
      </div>
    </li>
    <li>
      <div className="edit-options">
        <p>Find and Replace</p>
        <p>cmdH</p>
      </div>
    </li>
  </ul>
)

export default DropdownBox
