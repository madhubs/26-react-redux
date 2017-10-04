
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';



class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="category-item">
        <button onClick={() =>
        this.props.categoryDelete(this.props.category)}>delete</button>
        <h3>{this.props.category.title}</h3>
        <h3>budget: {this.props.category.budget}</h3>
        <CategoryForm
          buttonText="update expense"
          onComplete={this.props.categoryUpdate}
          category={this.props.category}/>
        </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

//we dont' need access to the whole store here so we use a dispatch just to update. so we use the mapDispatchToProps instead of the mapStateToProps (which is the whole state store)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
