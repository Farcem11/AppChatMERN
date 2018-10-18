
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component
{
    render()
    {
        const { user, component: Component } = this.props;
        
        return (
            <Route
                render = 
                {
                    (props) =>
                    {
                        if(user.isAuthenticated)
                        {
                            return <Component {...props} />
                        }
                        else
                        {
                            return <Redirect to='/login' />
                        }
                    }
                }
            /> 
        )
    }
};

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(PrivateRoute)