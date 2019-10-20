import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TextField, Button,Typography} from '@material-ui/core'


class EditComponent extends Component {

  state={
    email:'',
    password:'',
    gender:'',
    hobby:'',
    country:'',
    id:''
  }

  componentDidMount=()=>{
    console.log(this.state.hobby)
    this.setState({
      email:this.props.post.email,
      gender:this.props.post.gender,
      country:this.props.post.country,
      hobby:this.props.post.hobby,
      password:this.props.post.password
    })
    console.log(this.state.Cricket)
  }

handleEdit = (e) => {
  if(this.state.email==''){
    alert("Email should not be blank")
  }
  if(this.state.password==''){
    alert("Password should not be blank")
  }
  if(this.state.gender==''){
    alert("Gender should not be blank")
  }
  if(this.state.country==''){
    alert("Country should not be blank")
  }
  if(this.state.hobby==''){
    alert("Hobby should not be blank")
  }
  e.preventDefault();
  const newEmail = this.state.email;
  const newGender = this.state.gender;
  const newCountry = this.state.country
  const newHobby= this.state.hobby
  const newPassword= this.state.password
  const data = {
    newEmail,
    newGender,
    newCountry,
    newHobby,
    newPassword

  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>
<Typography>Update</Typography>
  <form onSubmit={this.handleEdit}>
  <TextField required id="outlined-dense" margin="dense"
             variant="outlined" fullWidth type='hidden' value={this.state.password} />
    <TextField id="outlined-dense" margin="dense"
               variant="outlined"  required type="text" onChange={(e)=>this.setState({email:e.target.value})}
    value={this.state.email} placeholder="Enter Email" /><br /><br />
    <TextField id="outlined-dense" margin="dense"
               variant="outlined" type='password' required onChange={(e)=>this.setState({password:e.target.value})}
    value={this.state.password} cols="28" placeholder="Enter Password" /><br /><br />
    <TextField id="outlined-dense" margin="dense"
               variant="outlined" type='text' required onChange={(e)=>this.setState({gender:e.target.value})}
    value={this.state.gender} cols="28" placeholder="Enter Gender" /><br /><br />
    <TextField id="outlined-dense" margin="dense"
               variant="outlined" type='text' required onChange={(e)=>this.setState({hobby:e.target.value})}
    value={this.state.hobby} cols="28" placeholder="Enter Hobby" /><br /><br />
    <TextField id="outlined-dense" margin="dense"
               variant="outlined" type='text' required onChange={(e)=>this.setState({country:e.target.value})}
    value={this.state.country} cols="28" placeholder="Enter Country" /><br /><br />
    <Button type='submit' color='secondary' variant='outlined'>Update</Button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);
