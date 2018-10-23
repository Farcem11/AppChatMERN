import React, { Component } from 'react'
import { connect } from 'react-redux';
import io from 'socket.io-client'

class Home extends Component
{
    componentDidMount()
    {
        this.socket = io('/');
        this.socket.on('message', m =>
        {
            console.log(m);
        })
        this.socket.emit('message', 'Hi from client')
    }

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