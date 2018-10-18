import React, { Component } from 'react'
import { connect } from 'react-redux';

class Alert extends Component
{
    render()
    {
        const { alert } = this.props;
        
        return (
            <div class="alert alert-primary text-left m-2 p-2" role="alert">
                <h5 class="alert-heading">Alert status</h5>
                <hr className="m-0"/>
                <p className="m-0">This will show the information of the page.</p>
            </div>
        )
    }
};

const mapStateToProps = (state) =>
{
    return {
        alert : state.alert,
        user : state.user
    }
}

export default connect(mapStateToProps)(Alert)