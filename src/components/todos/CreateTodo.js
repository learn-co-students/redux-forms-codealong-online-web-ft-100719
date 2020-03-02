import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    todo: ''
  }

  handleOnChange = event => {
    event.preventDefault()
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.todo} onChange={this.handleOnChange} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
