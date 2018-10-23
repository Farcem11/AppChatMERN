import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actionCreators'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component
{
    state = {};

    handleOnChange = (event) =>
    {
        const { value, name } = event.target;
        
        this.setState(
        {
            [name] :  value
        });
    }
    
    render()
    {
        const { login, user } = this.props;
        
        if(!user.isAuthenticated)
        {
            return (
                <div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email / User name</label>
                            <input name = "Name" onChange = {this.handleOnChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name = "Password" onChange = {this.handleOnChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button onClick = {() => login(this.state)} className="btn btn-primary">Login</button>
                        <div className="align-items-start">
                            <Link className="nav-link" to="/signup">Create an account</Link> 
                        </div>
                    </div>
                </div>
            )
        }
        else
        {
            return <Redirect to="/"/>
        }
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        login(name, password) {
            dispatch(login(name, password));
	   }
    }
}

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)