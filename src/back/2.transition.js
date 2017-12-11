import React from 'react'
import ReactDOM from 'react-dom'
//import { Transition } from 'react-transition-group'

const ENTERING = 'entering';
const ENTERED = 'entered';
const EXITING = 'exiting';
const EXITED = 'exited';
const duration = 500;
class Transition extends React.Component {
  constructor() {
    super();
    this.state = {state: ""};
  }

  componentWillReceiveProps = (newProps, newState) => {
    if (newProps.in) {
      this.setState({state: ENTERING});
      setTimeout(() => {
        this.setState({state: ENTERED});
      }, this.props.timeout);
    } else {
      this.setState({state: EXITING});
      setTimeout(() => {
        this.setState({state: EXITED});
      }, this.props.timeout);
    }
  }

  render() {
    if(typeof this.props.children == 'function'){
      return this.props.children(this.state.state);
    }else{
      let r = React.cloneElement(this.props.children,{style:transitionStyles[this.state.state]});
      console.log(r);
      return r;
    }

  }
}


const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1},
  exited: {opacity: 0},
  exiting: {opacity: 1},
};


class Example extends React.Component {
  state = {show: false}

  handleToggle() {
    this.setState(({show}) => ({
      show: !show
    }))
  }

  render() {
    const {show} = this.state
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          Click to toggle
        </button>
        <div>
          <Transition in={show} timeout={duration}>
            <div style={{
              ...defaultStyle
            }}>
              I'm A fade Transition!
            </div>
          </Transition>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))