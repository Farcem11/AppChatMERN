import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as AlertTypes from '../constants/AlertTypes';

const alertTypeMap = {};
alertTypeMap[AlertTypes.DANGER] = 'alert-danger';
alertTypeMap[AlertTypes.WARNING] = 'alert-warning';
alertTypeMap[AlertTypes.INFO] = 'alert-info';
alertTypeMap[AlertTypes.SUCCESS] = 'alert-success';

let show = true;

class Alert extends Component
{
    render()
    {
        const { alert } = this.props;

        if(show)
        {
            setTimeout(() => 
            {
                show = false;
                this.forceUpdate();
            }, 2000)

            return (
                <div className={"alert text-left m-2 p-2 " + alertTypeMap[alert.type]} role="alert">
                    <h5 className="alert-heading">{alert.name}</h5>
                    <hr className="m-0"/>
                    <p className="m-0">{alert.message}</p>
                </div>
            )
        }
        else
        {
            show = true;
            return null;
        }
    }
};

const mapStateToProps = (state) =>
{
    return {
        alert : state.alert
    }
}

export default connect(mapStateToProps)(Alert)