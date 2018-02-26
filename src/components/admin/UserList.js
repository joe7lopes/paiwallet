import React from 'react';
import { connect } from 'react-redux';
import { startFetchUsers, startEditUser } from '../../actions/users_action';

class UserList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  handleOnSubscriptionActiveChanged(user, e) {
    const value = !!e.target.checked;
    this.props.startEditUser(user,{subscriptionActive: value});
  }

  getFullName(firstName, lastName) {
    if (firstName && lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (firstName) {
      return firstName;
    } else if (lastName) {
      return lastName;
    }
    return 'N/A';
  }

  renderUsers() {
    return this.props.users.map((user) => {
      const name = this.getFullName();
      return (
        <tr key={user.uid}>
          <td>{user.uid}</td>
          <td>{name}</td>
          <td>{user.email}</td>
          <td>
            <div className="switch">
              <label htmlFor="switcher">
                <input
                  id="switcher"
                  defaultChecked={!!user.subscriptionActive}
                  type="checkbox"
                  onClick={this.handleOnSubscriptionActiveChanged.bind(this,user)}
                />
                <span className="lever" />
              </label>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <section>
        <table className="striped centered">
          <thead>
            <tr>
              <th>#UID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription Paid</th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers()}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(startFetchUsers()),
  startEditUser: (user, updates) => dispatch(startEditUser(user,updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
