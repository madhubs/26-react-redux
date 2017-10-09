import React from 'react';
import './dashboard-container.scss';
import {connect} from 'react-redux'; //importing a binding ({connect}) of react-redux called react-redux. The react bindings. Grabbing state and dispatching.
import {categoryCreate} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


class DashboardContainer extends React.Component {
  componentDidMount() {
    // console.log('__DASHBOARD__', this);
    // this.props.categoryCreate({title: 'groceries'});
    // this.props.categoryCreate({title: 'shoes'});
    // this.props.categoryCreate({title: 'stuff'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>

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
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    // categoryUpdate: category => dispatch(categoryUpdate(category)),
    // categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);//Currying. binds the first two arguments with the third. This is currying. 1st- state 2nd- dipatch and getState 3rd- . Bind methods.
