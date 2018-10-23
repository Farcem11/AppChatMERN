import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actionCreators'

class Chat extends Component
{
    render()
    {
        const { messages } = this.props;
        
        return (
            <div>
                <button onClick={()=> sendMessage('Hi')} > Send </button>
                <span> {messages} </span>
            </div>
        )
    }
};

const mapStateToProps = (state) =>
{
    return {
        messages : state.messages
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        sendMessage(message) {
            dispatch(sendMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)