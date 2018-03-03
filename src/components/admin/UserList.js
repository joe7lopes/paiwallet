import React from 'react';
import { connect } from 'react-redux';
import { startFetchUsers, startEditUser } from '../../actions/users_action';

class UserList extends React.Component {

  componentWillMount(){
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
    const { users } = this.props;
    return users.map( (user, index) => {
      const name = this.getFullName();
      return (
        <tr key={user.uid}>
          <td>{user.uid}</td>
          <td>{name}</td>
          <td>{user.email}</td>
          <td>
            <div className="switch">
              <label>
                <input
                  checked={!!user.subscriptionActive}
                  type="checkbox"
                  onChange= {this.handleOnSubscriptionActiveChanged.bind(this,user)}
                />
                <span className="lever" />
              </label>
            </div>
          </td>
        </tr>
      );
    });

  }

  renderSaving(){
    return (
        <div className="preloader-wrapper small active right">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
    );
  }

  renderError(){
      return(
        <div className="red-text">
          <p>{this.props.savingError.message}</p>
        </div>
      )
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
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {this.props.isSaving && this.renderSaving()}
                {this.props.savingError && this.renderError()}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  isSaving: state.users.isSaving,
  savingError: state.users.editingUserError
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(startFetchUsers()),
  startEditUser: (user, updates) => dispatch(startEditUser(user,updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
