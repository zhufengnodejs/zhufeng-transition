import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './csstransition.css';


class FadeInAndOut extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 1000)
  }
  render() {
    return (
      <CSSTransition
        in={this.state.show}
        timeout={1000}
        classNames="fade"
      >
        <div className='greeting'>Hello world</div>
      </CSSTransition>
    )
  }
}

ReactDOM.render(<FadeInAndOut />, document.getElementById('root'))