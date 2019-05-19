import React from 'react';
import { withRouter } from 'react-router';
import usersContainer from './../../containers/users';

const User = props => {
  const {user} = props;
  
  return (
    <div className="card m-4">
      <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name={user.name}
                  value={user.name}
                  placeholder="Jane Doe"/>
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name={user.company}
                  value={user.company.name}
                  placeholder="Company Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name={user.email}
                  value={user.email}
                  placeholder="Email"/>
              </div>
            </form>
          </div>
    </div>
  );
}

export default usersContainer(withRouter(User));
