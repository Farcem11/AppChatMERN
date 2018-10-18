import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actionCreators'
import Alert from './Alert'

class Navigator extends Component
{
    getNav = () =>
    {
        const { logout, user } = this.props;

        if(user.isAuthenticated)
        {
            return (
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button onClick = {()=> logout()} className="btn btn-danger">
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }

    render()
    {
        return (
            <div className="fixed-top">
                { this.getNav() }
                <Alert/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        logout(name, password) {
            dispatch(logout(name, password));
	   }
    }
}

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)