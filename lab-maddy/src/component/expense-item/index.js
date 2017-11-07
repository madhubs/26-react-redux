import './expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleExpense() {
    this.setState({
      editExpense: !this.state.editExpense,
    });
  }
  render() {


    return (
      <div className='expenseItem'>

        <div className='expense-content'>
          <h3>{this.props.expense.title}</h3><br/>
          <p>{this.props.expense.price}</p><br/>
          <button onClick={() => this.props.expenseDelete(this.props.expense)}>X</button>
          <button onClick={this.toggleExpense}>edit expense</button>
        </div>

        {this.state.editExpense ?
          <ExpenseForm
            id={this.props.expense.id}
            categoryID={this.props.expense.categoryID}
            buttonText='Update'
            onComplete={this.props.expenseUpdate}
          />
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = () => ({});


let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
