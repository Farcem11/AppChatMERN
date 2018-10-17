import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actionCreators'

class Navigator extends Component
{
    render()
    {
        const { logout } = this.props;

        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>

                <div className="navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button onClick = {()=> logout()} className="btn btn-danger btn-lg">
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
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

export default connect(null, mapDispatchToProps)(Navigator)