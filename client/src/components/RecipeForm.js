import React from 'react';
import { Form, } from "semantic-ui-react";

class RecipeForm extends React.Component {
  state = { recipeName: '' };

  handleChange = (e) => {
    this.setState({ recipeName: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.recipeName);
    this.setState({ recipeName: '' })
  } 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Recipe Name"
          plcaceholder="Add a Recipe Name"
          required
          value={this.state.recipeName}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default RecipeForm;