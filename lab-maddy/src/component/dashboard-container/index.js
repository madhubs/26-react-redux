import React from 'react';
import './dashboard-container.scss';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  componentDidMount() {
    console.log('__DASHBOARD__', this.props);
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>Budget Tracker 5000 Dashboard</h1>


        <CategoryForm
          buttonText='Create'
          onComplete={this.props.categoryCreate} />
        <ul className="categoryList">
          {this.props.categories.map((item) => {
            
            return (
              <CategoryItem
                key={item.id}
                category={item}
              />
            );
          }
          )}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,

  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
