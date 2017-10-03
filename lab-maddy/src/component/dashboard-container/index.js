// ###### Dashboard Component
// * should be displayed on the `/` route
// * should use react-redux's `connect` to map state and dispatch methods to props
// * should display a `CategoryForm` for adding categories to the application state
// * should display a `CategoryItem` for each category in the application state



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
    console.log('__DASHBOARD__', this);
    this.props.categoryCreate({title: 'groceries'});
    this.props.categoryCreate({title: 'shoes'});
    this.props.categoryCreate({title: 'stuff'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Expense Tracker</h2>


        <CategoryForm
           buttonText='create expense'
           onComplete={this.props.categoryCreate} />
         <ul className="categoryList">
           {this.props.categories.map((item) => {
             console.log(item);
             return (
               <CategoryItem
                 key={item.id}
                 category={item}
                 categoryDelete={this.props.categoryDelete}
                 categoryUpdate={this.props.categoryUpdate}
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
    categories: state,
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
