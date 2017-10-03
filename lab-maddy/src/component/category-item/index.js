
import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.category.title}</h2>
        <h3>budget: {this.props.category.budget}</h3>
        <CategoryForm
          buttonText='update expense'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
        />
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>delete expense</button>
        </li>
    );
  }
}
export default CategoryItem;
