import React from 'react';
import './dashboard-container.scss';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this.props);
  }

  render() {
    return (
      <main className="main-content">
        <h2>Budget Tracker 5000 Dashboard</h2>

        <CategoryForm
          buttonText="create"
          toggle={() => {}}
          onComplete={this.props.categoryCreate}/>

        <div className="category-list">
          {this.props.categories.map((item) => {
            console.log(item, 'thisisitem');
            return (
             <CategoryItem
               key={item.id}
               category={item}
             />
            );
          }
          )}
        </div>
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
