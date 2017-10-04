
import React from 'react';
import CategoryForm from '../category-form';
import {connect} from 'react-redux';
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
        <h3>budget: {this.props.category.budget}</h3>
        <CategoryForm
          buttonText='update expense'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
          category={this.props.category}/>
        </div>
    );
  }
}

let mapDispatchToProps = state => {
  return {
    categoryUpdate: state,
  };
};

//we dont' need access to the whole store here so we use a dispatch just to update. so we use the mapDispatchToProps instead of the mapStateToProps (which is the whole state store)

export default connect(null, mapDispatchToProps)(CategoryItem);
