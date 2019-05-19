import React          from 'react';
import { withRouter } from 'react-router';
import User           from './shared/User';
import usersContainer from './../containers/users';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {handleGetUsers} = this.props;
    handleGetUsers();
  };


  render() {
    const {
      users: {users}
    } = this.props;

    return (
      <React.Fragment>
          {users.map(user => {
            return(
              <User user={user} />
            );
          })}
      </React.Fragment>
    )
  }
}

export default usersContainer(withRouter(Dashboard));
