import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import {Button,Container,Grid,Typography,Paper} from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
class PostForm extends Component {

  state={
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    Cricket: '',
  Basketball: '',
  Tennis: '',
    country:'',
    id:''
  }

  checkEmail=(mail)=>{
    const status=''
    {this.props.posts.map((post) => (
      this.setState({id:post.email})
    (this.state.id==mail?status=true:status=false)
      ))}
        return status
  }

   handleSubmit = (e) => {
     const s=0

     if(this.state.email==''){
       alert("Email should not be blank")
       s++
     }
     if(this.state.password==''){
       alert("Password should not be blank")
       s++
     }
     if(this.state.confirmPassword==''){
       alert("Confirm Password should not be blank")
       s++
     }
     if(this.state.gender==''){
       alert("Gender should not be blank")
       s++
     }
     if(this.state.country==''){
       alert("Country should not be blank")
       s++
     }
     if((this.state.Cricket!='' && this.state.Basketball=='' && this.state.Tennis=='') || (this.state.Cricket=='' && this.state.Tennis=='' && this.state.Basketball!='') || (this.state.Tennis!='' && this.state.Basketball==''  && this.state.Cricket=='')){
       alert("Select atleast two hobbies")
       s++
     }
     if((this.state.Cricket=='' && this.state.Basketball=='') || (this.state.Cricket=='' && this.state.Tennis=='') || (this.state.Tennis=='' && this.state.Basketball=='')){
       alert("Hobby should not be blank")
       s++
     }
     if(s==0)
     {
     const s=this.checkEmail(this.state.email)
    if((this.state.password===this.state.confirmPassword)) {
    e.preventDefault();
    const email = this.state.email;
    const password =  this.state.password;
    const gender =  this.state.gender;
    const hobby = this.state.Cricket+" "+this.state.Basketball+" "+this.state.Tennis;
    const country = this.state.country;
    const data = {
      id: new Date(),
      email,
      password,
      gender,
      hobby,
      country,
      editing:false
    }
    console.log(data);
    this.props.dispatch({
      type:'ADD_POST',
      data});
    this.setState({
      email:'',
      password:'',
      confirmPassword:'',
      gender:'',
      Cricket: '',
    Basketball: '',
    Tennis: '',
      country:''
    })
    }
    else{
      alert("Password and Confirm Password is not matched")
    }
  }
}

  handleChangeHobby = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleChange = event => {
    this.setState({gender:event.target.value});
  };


render(){
  const { Cricket,Basketball,Tennis } = this.state;
  const error = [Cricket,Basketball,Tennis].filter(v => v).length !== 2;
return (
<div>
  <Container maxWidth="xs">
			<Paper style={{padding:'30px',marginTop:'10px'}}>
				<Typography>
				Registration
				</Typography>
				<Grid container>
  <form onSubmit={this.handleSubmit}>
    <Grid item xs={12}>
   <TextField style={{marginLeft:'20%'}} required id="outlined-dense" margin="dense"
							variant="outlined" fullWidth type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}
    placeholder="Enter Email"/>
   </Grid>
   <Grid item xs={12}>
   <TextField style={{marginLeft:'20%'}}  required id="outlined-dense" margin="dense"
							variant="outlined" fullWidth type='password' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}
    placeholder="Password" />
  </Grid>
  <Grid item xs={12}>
   <TextField required style={{marginLeft:'20%'}} id="outlined-dense" margin="dense"
							variant="outlined" fullWidth type='password' value={this.state.confirmPassword} onChange={(e)=>this.setState({confirmPassword:e.target.value})}
      placeholder="Enter Confirm Password" />
    </Grid>
    <Grid item xs={12}>

      <RadioGroup style={{marginLeft:'20%'}} id="outlined-dense" margin="dense"
   							variant="outlined" fullWidth defaultValue="female" aria-label="gender" name="customized-radios" value={this.state.gender} onChange={(e)=>this.handleChange(e)}>
        <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="start"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="start"
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={12}>
         <FormGroup style={{marginLeft:'20%'}} id="outlined-dense" margin="dense"
      							variant="outlined" fullWidth>
            <FormControlLabel
              control={<Checkbox checked={this.state.Cricket} onChange={this.handleChangeHobby('Cricket')} value="Cricket" />}
              label="Cricket"
            />
            <FormControlLabel
              control={<Checkbox checked={this.state.Basketball} onChange={this.handleChangeHobby('Basketball')} value="Basketball" />}
              label="Basketball"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.state.Tennis} onChange={this.handleChangeHobby('Tennis')} value="Tennis" />
              }
              label="Tennis"
            />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
      <FormControl fullWidth>
          <Select
            id="outlined-dense" style={{marginLeft:'20%'}} margin="dense"
         							variant="outlined"
            value={this.state.country}
            onChange={(e)=>this.setState({country:e.target.value})}
            input={<BootstrapInput name="country" id="age-customized-select" />}
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"India"} fullWidth>India</MenuItem>
            <MenuItem value={"China"} fullWidth>China</MenuItem>
            <MenuItem value={"South Africa"} fullWidth>South Africa</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
      <Button type="submit" style={{marginTop:'10px',marginLeft:'40%'}}  color='primary' variant="contained">Submit</Button>
      </Grid>
  </form>
  </Grid>
  </Paper>
  </Container>
</div>
);

}
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(PostForm);
