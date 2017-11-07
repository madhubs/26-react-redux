import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import { expenseCreate, expenseUpdate, expenseDelete } from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCategory: false,
      expenseBox: false,
    };
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleCategory(){
    this.setState({editCategory: !this.state.editCategory});
  }

  toggleExpense(){
    this.setState({editExpense: !this.state.editCategory});

  }


  render() {
    return (
      <div className="category-item">
        <div className="content-container">
          <button className="remove" onClick={() => this.props.categoryDelete(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>

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
          <div className='expense-container'>
            <ExpenseForm
              categoryID={this.props.category.id}
              buttonText='Create'
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
    expenses: state.expenses,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch (expenseCreate(expense)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
