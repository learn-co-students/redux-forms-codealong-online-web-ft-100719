import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
        {/* to visually confirm that we are properly changing the state */}
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO', payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
