![cf](https://i.imgur.com/7v5ASc8.png) 26: React & Redux
======
#### Documentation
This is an budget app meant to help keep track of expenses (i.e. car, health, groceries, etc.).
We are using the following tools:
React- a javaScript library for building user interfaces
Redux- used for handling the state within an app
Babelrc- a compiler for using ES6
webpack- used to bundle our assets

To confirm things are rendering in the chrome browser, type this in terminal:
```
npm run watch
```

#### Notes to myself:
- Currying-- binds the first two arguments with the third. This is currying. 1st- state 2nd- dipatch and getState 3rd- . Bind methods.

```js
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
```


## Learning Objectives
* We will be able to use redux with react
* We will be able to design redux reducers for controlling application state
* We will learn to design action creator functions for working with redux

## Requirements  
#### Configuration  
* [x]`README.md`
* [x]`.babelrc`
* [x]`.gitignore`
* [x]`package.json`
* [x]`webpack.config.js`
* [x]`src/**`
* [x]`src/main.js`
* [x]`src/style`
* [x]`src/style/main.scss`

#### Feature Tasks
##### Category
* in this application, a category should contain *(at least)* the following properties
  * `id` - a unique identifier
  * `timestamp` - a date from when the category was created
  * `name` - a string that is the name of the category
  * `budget` - a number that is the total amount of money in the category

##### Redux
###### reducer
* create a category reducer in your your reducer directory
* this reducer should support the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTORY`

###### action creators
* create an action creator for each interaction supported by your category reducer

###### store
* in `lib/store.js` export a function that will return a new redux store from your category reducer
```
export default () => createStore(reducer);
```

##### Components
* create the following component and structure it according to the diagram below:

My eventual structure:
```
src directory

  action directory
    category-action.js
  component directory
    category-form directory
      index.js
    dashboard-container
      index.js
  lib directory
    store.js
  reducer directory
    category.js

```
Original readme structure:
```
Provider
  App  
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
```

###### App Component
* the App component should setup the `Provider` for the redux store and the `Router`

###### Dashboard Component
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatch methods to props
* should display a `CategoryForm` for adding categories to the application state
* should display a `CategoryItem` for each category in the application state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the `CategoryForm`'s state when the form is submitted
* should expect a `buttonText` prop to configure the submit button text
* should support an optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a `CategoryForm`
  * `onComplete` the form should update the component in the application state

#### Collaborators
Isaac, Gavin, Isaiah, Michelle, Said
____________________________________________________________________________

![cf](https://i.imgur.com/7v5ASc8.png) 27: Combining Reducers
======

#### Documentation
- We don't need props anymore because...
-

## Learning Objectives
* We will be able to combine reducers to simplify the management of complex application states
* We will continue to work with the fundamental principles of redux to gain a better understanding on state management


#### Feature Tasks
##### Expense
* in this app, an expense should contain *(at least)* the following properties
  * `id` - a unique identifier
  * `timestamp` - a date from when the category was created
  * `name` - a string that is the name of the category
  * `categoryId` - an id that corresponds to an existing category
  * `price` - a number that is the total amount of $ in the category

##### Redux
###### app reducer
* export a reducer that holds the entire app state from `reducer/index.js`
* create a reducer that will combine your `categories` reducer and `expenses` reducer

###### expenses reducer
* create a expense reducer in your your reducer directory
* this reducer should support the following interactions
  * `CATEGORY_CREATE` - create a category array to store expense objects
  * `CATEGORY_DELETE` - delete the whole category key/value pair from the expense object
  * `EXPENSE_CREATE` - store an expense
  * `EXPENSE_UPDATE` - update an existing expense
  * `EXPENSE_DELETE` - delete an existing expense
* if you need others feel free to add them

###### action creators
* you should create an action creator for each interaction supported by your expenses reducer

###### store
* in `lib/store.js` export a function that will return a redux store from your app reducer

##### Components
* create the following component and structure it according to the diagram below:
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item] -- list of Category items
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### Update the CategoryItem Component
* should keep all of the features described in lab-26
* add an `ExpenseForm` to your category item that enables the user to create expenses on your app state
* display all of the `ExpenseItem`'s belonging to the category

##### ExpenseForm Component
* should have an `onComplete` prop that will be invoked with the form state on submit
* should support an `expense` prop that will set the initial form state and update the state (using hook `componentWillReceiveProps()`)
* should have a `buttonText` prop that will configure the submit button's text

##### ExpenseItem Component
* should have a button that will delete the expense from the appState `onClick`
* should display the `name` and `price` of the component
* should display an `ExpenseForm` that will enable the user to update the expense in the app state

#### Common Errors during refactoring

Problem:
This error message within terminal after npm run watch.
```
ERROR in ./src/reducer/card.js
Module build failed: SyntaxError: Unexpected token (8:34)

   6 |
   7 |   switch(type) {
>  8 |   case 'CATEGORY_CREATE': return {...state, [payload.id]:[]};
     |                                   ^
   9 |   case 'CATEGORY_DELETE': return {...state, [payload.id]: null};
  10 |
  11 |   case 'CARD_CREATE':
```
Solution:
I updated my .Babelrc file to include the rest-spread plugin:
```
{
  "presets": ["es2015", "react"],
  "plugins": ["transform-object-rest-spread"]
}
```

Problem:
My new card/new expense button was not rendering the new card/new expense form when clicked.

Solution:
Adding the following to my expense-form's index.js file:
```

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense) {
      this.setState({ price: '' });
    }
  }
  ```


Problem:
After hitting submit on the 'create' button for creating a new expense item I get the following error (along with two others) in chrome console:
```
this.props.onComplete is not a function
```
Solution:


Problem:
The following chrome console error:

The following is the chrome console message before the error. This means that the new category I'm attempting to add is getting into the categories array, but can't be rendered:

  ```__STATE__ {categories: Array(1), expenses: {…}}):
  ```
But then I see the error:
```
index.js:62 Uncaught TypeError: Cannot read property '8159c12d-abcb-4f50-adb1-fdf7f14697f8' of undefined
```
Solution:



#### Collaborators
____________________________________________________________________________



big changes:
src/reducer/card.js- adding validation
