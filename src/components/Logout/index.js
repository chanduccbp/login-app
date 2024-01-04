// Write your code here

import './index.css'

const Logout = props => {
  const {changeStatus} = props

  return (
    <button type="button" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Logout
