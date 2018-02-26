import React from 'react';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';
import CreateStock from './CreateStock';
import UserList from './UserList';


const sideBarItems = [
  { title: 'Dashboard', icon: 'dashboard' },
  { title: 'Mail-Box', icon: 'contact_mail' },
  { title: 'Posts', icon: 'message' },
  { title: 'Stocks Advice', icon: 'thumbs_up_down' },
  { title: 'Users', icon: 'supervisor_account' },
];

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 0,
    };
  }

  handleSelectedItem(index) {
    this.setState({ selectedItem: index });
  }

  renderContent(index) {
    switch (index) {
      case 0:
        return <h1>dashboard</h1>;
      case 1:
        return <h1>mail box</h1>;
      case 2:
        return <CreatePost />;
      case 3:
        return <CreateStock />;
      case 4:
        return <UserList />;
      default:
        return null;
    }
  }

  renderSideBar() {
    const { selectedItem } = this.state;
    return sideBarItems.map((item, index) => {
      const style = selectedItem === index ? 'active' : '';
      return (
        <li key={index} className={style}>
          <a onClick={() => this.handleSelectedItem(index)}>
            <i className="material-icons">{item.icon}</i>
            {item.title}
          </a>
        </li>
      );
    });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <div>
        <div>
          <ul id="nav-mobile" className="side-nav fixed">
            <li>
              <div className="user-view teal">
                <span className="white-text name">John Doe</span>
                <span className="white-text email">jdandturk@gmail.com</span>
              </div>
            </li>
            {this.renderSideBar()}
          </ul>
        </div>
        <div style={{ paddingLeft: '300px', background: "none" }}>
          <div className="container">
            {this.renderContent(selectedItem)}
          </div>

        </div>
      </div>
    );
  }
}

export default Admin;
