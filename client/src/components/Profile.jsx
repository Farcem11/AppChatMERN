import React from 'react'
import { connect } from 'react-redux';

export const Profile = ({ user }) =>
{
    return (
        <div>
            <span> Hi {user.FirstName + " " + user.LastName}</span>
        </div>
    )
};

const mapStateToProps = (state) =>
{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Profile)