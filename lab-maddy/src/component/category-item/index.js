import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import {expenseCreate} from '../../action/expense-actions';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseForm: false,
      categoryForm: false,
    };

    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleExpense() {
    this.setState({expenseForm: !this.state.expenseForm});
  }

  toggleCategory() {
    this.setState({categoryForm: !this.state.categoryForm});
  }
  //
  // componentDidUpdate() {
  //
  // }

//render: category item- update and create.
  render() {
    return (
      <div className="category-item">
        <div className="expense-container"> {/*this used to be content-container*/}
          <button className="remove" onClick={() => this.props.categoryDelete(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>
          <button onClick={this.toggleExpense}>new expense</button>
          <h3>{this.props.category.title}</h3>

          {this.state.categoryForm ?
            <CategoryForm
              buttonText="update"
              onComplete={this.props.categoryUpdate}
              category={this.props.category}
              toggle={this.toggleCategory}/> :
            undefined
          }
        </div>
        <div className="expense-container">
          {this.state.expenseForm ?
            <ExpenseForm
              buttonText="create"
              categoryId={this.props.category.id}
              onComplete={this.props.expenseCreate}
              toggle={this.toggleCard}/> :
            undefined
          }

          {this.props.expenses[this.props.category.id].length ?
            this.props.expenses[this.props.category.id].map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
            :
            <h3>currently no expenses</h3>
          }
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    expenses: state.expense,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
  };
};

//we dont' need access to the whole store here so we use a dispatch just to update. so we use the mapDispatchToProps instead of the mapStateToProps (which is the whole state store)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
