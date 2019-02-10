import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, loadingUsers } from '../../actions';
import Users from '../../components/Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props._loadingUsers();
        this.props._fetchUsers();
    }
    render() {
        return (
            this.props.loading ? <div>Loading...</div> : <Users users={this.props.users} />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users || [],
        loading: state.usersReducer.loading || false
    }
}

const mapDispatchToProps = dispatch => {
    const users = ['facebook', 'google', 'twitter', 'airbnb', 'ShaiMesisterano', 'redux'];
    return {
        _fetchUsers: () => dispatch(fetchUsers(users)),
        _loadingUsers: () => dispatch(loadingUsers(true)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);