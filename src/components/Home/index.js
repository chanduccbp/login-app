// Write your code here

import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  changeStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message status={isLoggedIn} />
          {isLoggedIn && <Logout changeStatus={this.changeStatus} />}
          {!isLoggedIn && <Login changeStatus={this.changeStatus} />}
        </div>
      </div>
    )
  }
}

export default Home
