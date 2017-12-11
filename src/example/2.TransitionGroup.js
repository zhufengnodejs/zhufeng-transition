import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './todo.css';

const Fade = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: [{id: 1, name: 'hello'}, {id: 2, name: 'world'}]}
  }

  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,{id:Date.now(),name:prompt('Enter some text')}
      ]
    });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    return (
      <div className='container'>
        <TransitionGroup className='todo-list'>
          {this.state.items.map((item, i) => (
            <CSSTransition
              timeout={1000}
              classNames="fade"
              key={item.id}
            >
              <div>
                {item.name}
                <button onClick={() => this.handleRemove(i)}>
                  &times;
                </button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))