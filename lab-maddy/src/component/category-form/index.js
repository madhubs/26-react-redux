// ###### CategoryForm Component
// * should expect an `onComplete` prop to be a function
//   * that function should be invoked with the `CategoryForm`'s state when the form is submitted
// * should expect a `buttonText` prop to configure the submit button text
// * should support an optional `category` prop that will initialize the state of the form


import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.cateogry ? props.category.title : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState ({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
      <input
      type="text"
      name="title"
      placeholder="enter a title"
      value={this.state.title}
      onChange={this.handleChange}/>

      <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
