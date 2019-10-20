import React from 'react';
import './App.css';
import Form from './Components/PostForm'
import AllPost from './Components/AllPost'
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import postReducer from './reducers/postReducer'
const store = createStore(postReducer);


function App() {
  return (
    <div className="App">
      <Provider store={store}><Form/><AllPost/></Provider>

    </div>
  );
}

export default App;
