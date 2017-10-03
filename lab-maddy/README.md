![cf](https://i.imgur.com/7v5ASc8.png) 26: React & Redux
======
#### Documentation

By using...
Babelrc (a compiler for using ES6)
webpack (used to bundle our assets)

in terminal:
```
npm run watch
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

##### Components
* create the following component and structure it according to the diagram below:
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
