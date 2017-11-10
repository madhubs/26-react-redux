import React from 'react';
import './expense-form.scss';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
      title: props.expense ? props.expense.title: '',
      price: props.expense ? props.expense.price: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    console.log('__EXPENSE_PROPS__', this.props);
  }


  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.props.toggle();
  }


  render() {
    return (
      <form className = "expense-form" onSubmit= {this.handleSubmit}>
        <input
          type= "number"
          name = "price"
          placeholder = "0"
          price = {this.state.price}
          onChange = {this.handleChange}/>

        <input
          type="text"
          name="title"
          placeholder="enter an expense"
          value={this.state.title}
          onChange = {this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
        </form>
    );
  }
}

export default ExpenseForm;
