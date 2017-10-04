
import React from 'react';
import CategoryForm from '../category-form';
import {connect} from 'react-redux'
import {categoryUpdate} from '../../action/category-actions';



class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="category-item">
        <h2>{this.props.category.title}</h2>
        <h3>budget: {this.props.category.budget}</h3>
        <CategoryForm
          buttonText='update expense'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
          category={this.props.category}/>
        </div>
        //<button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>delete expense</button> //SO THEN WHERE DOES THE DELETE BUTTON GO?????
    );
  }
}

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
  };
};

//we dont' need access to the whole store here so we use a dispatch just to update. so we use the mapDispatchToProps instead of the mapStateToProps (which is the whole state store)

export default connect(mapDispatchToProps)(CategoryItem);
