import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions';

class ExpenseItem extends React.Component {
  render() {
    return (
      <li className='expense-item'>
        <div>
          <div className='expense-content'>

          <h3>Expense Title: {this.props.expense.content}.<br/> Cost:  ${this.props.expense.price}.</h3>

            <button className='remove' onClick={() => this.props.expenseDelete(this.props.expense)}>Delete</button>
          </div>
          <div className='expense-editing'>
            <ExpenseForm
              categoryID={this.props.expense.categoryID}
              buttonText='Update expense'
              onComplete={this.props.expenseUpdate}
            />
          </div>
        </div>
      </li>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
