import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

class Chat extends Component
{
    state =
    {
        messages : [],
        message : ''
    };

    componentDidMount()
    {
        this.socket = io('/');
        this.socket.on('message', (message) => 
        {
            this.setState(
            {
                messages : [...this.state.messages, message]
            })
        });
    }

    handleClick = () =>
    {
        console.log(this.props.user.data.UserName);

        this.setState(
        {
            messages : [...this.state.messages, { text : this.state.message, userName : 'Me' }]
        })

        this.socket.emit('message', this.state.message, this.props.user.data.UserName);
    }

    handleOnChange = (event) =>
    {
        const {name, value} = event.target;
        this.setState(
        {
            [name] : value
        })
    }

    render()
    {
        const messagesObject = this.state.messages.map(message =>
        {
            return (
                <div>
                    <span>{message.userName}</span> : {message.text}
                    <br/>
                </div>
            )
        });
        return (
            <div>
                <input type='text' onChange={this.handleOnChange} name='message' placeholder='Message'/>
                <button onClick={() => this.handleClick()} > Send </button>
                {messagesObject}
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

export default connect(mapStateToProps)(Chat)