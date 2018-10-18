import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actionCreators'
import { Link, Redirect } from 'react-router-dom'

class SignUp extends Component
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

    handleOnSubmit = (event) =>
    {
        const { register } = this.props;
        event.preventDefault();
        register(this.state);
    }
    
    render()
    {
        const { user } = this.props;
        
        if(!user.isAuthenticated)
        {
            return (
                <div>
                    <div className="row justify-content-center"></div>
                    <div className="card bg-dark mt-6">
                        <article className="card-body">
                            <form onSubmit={this.handleOnSubmit}>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name </label>   
                                        <input onChange = {this.handleOnChange} type="text" className="form-control" name="FirstName"/>
                                    </div> 
                                    <div className="col form-group">
                                        <label>Last name</label>
                                        <input onChange = {this.handleOnChange} type="text" className="form-control" name="LastName"/>
                                    </div> 
                                </div> 
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input onChange = {this.handleOnChange} type="email" className="form-control" name="Email"/>
                                </div> 
                                <div className="form-group">
                                    <label>User name</label>
                                    <input onChange = {this.handleOnChange} type="text" className="form-control" name="UserName"/>
                                    
                                    <label>Phone</label>
                                    <input onChange = {this.handleOnChange} type="tel" className="form-control" name="Phone"/>
                                </div> 
                                <div className="form-group">
                                    <label>Create password</label>
                                    <input onChange = {this.handleOnChange} className="form-control" type="password" name="Password"/>
                                </div>  
                                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>                                          
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Sign Up  </button>
                                </div>
                            </form>
                        </article>
                        <div className="border-top card-body text-center p-1">Have an account? <Link to="/login">Login</Link></div>
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
        register(user) {
            dispatch(register(user));
	   }
    }
}

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)