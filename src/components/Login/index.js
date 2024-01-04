// Write your code here

import './index.css'

const Login = props => {
  const {changeStatus} = props

  return (
    <button type="button" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Login
