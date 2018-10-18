import React, { Component } from 'react'
import { connect } from 'react-redux';

class Home extends Component
{
    render()
    {
        const { user } = this.props;
        
        return (
            <div>
                <span> Welcome {user.data.FirstName + " " + user.data.LastName} </span>
            </div>
        )
    }
};

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Home)