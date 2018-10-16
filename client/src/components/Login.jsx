import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../actionCreators';

class Login extends Component
{
    state =
    {
        name : '',
        password : ''
    };

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
        return (
            <div>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email / User name</label>
                        <input name = "name" onChange = {this.handleOnChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name = "password" onChange = {this.handleOnChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Keep me sign in</label>
                    </div>
                    <button onClick = {() => this.props.login(this.state)} className="btn btn-primary">Login</button>
                </div>
            </div>
        )
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

export default connect(null, mapDispatchToProps)(Login)