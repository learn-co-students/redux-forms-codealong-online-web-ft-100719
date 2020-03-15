import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
class CreateTodo extends Component {
 
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
 
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};
 
export default CreateTodo;
export default connect(null, mapDispatchToProps) (CreateTodo);