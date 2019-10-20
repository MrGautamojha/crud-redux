
import React, { Component } from 'react';

import {connect} from 'react-redux';
import Button from '@material-ui/core/Button'

function Post (props) {

  return (
    <div>
      <table class="table">
        <thead>
      <tr>
        <th>Email</th>
        <th>Password</th>
        <th>Gender</th>
          <th>Hobby</th>
          <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.post.email}</td>
      <td>{props.post.password}</td>
      <td>{props.post.gender}</td>
      <td>{props.post.hobby}</td>
      <td>{props.post.country}</td>
      <td><Button color='primary' variant="contained"
       onClick={()=>props.dispatch({type:'EDIT_POST',id:props.post.id})}>
       Edit</Button></td>
     <td><Button color='secondary' variant="contained"
      onClick={()=>props.dispatch({type:'DELETE_POST',id:props.post.id})}>
      Delete</Button></td>
      </tr>
      </tbody>
      </table>
    </div>
  );

}
export default connect()(Post);
