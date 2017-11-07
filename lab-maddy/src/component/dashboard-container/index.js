import React from 'react';
import './dashboard-container.scss';
import {connect} from 'react-redux';
import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
  }

  render() {
    return (
      <main className="main-content">
        <h2>Budget Tracker 5000</h2>

        <CategoryForm
          buttonText="create"
          toggle={() => {}}
          onComplete={this.props.categoryCreate}/>

        <div className="category-container">
          {this.props.categories.length ?
            <div>
              {this.props.categories.map(item => {
                return <CategoryItem
                          key={item.id}
                          category={item}/>;
              })}
            </div> :
            <h2>Add some categories</h2>
          }
        </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
