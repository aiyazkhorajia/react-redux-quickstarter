import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, signOut } from 'Store/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.usersData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  var membersView;
  if (loading) {
    membersView = <p>Please wait...</p>;
  } else if (data && data.data) {
    membersView = (
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.data.map((member) => (
          <div className="col" key={member.id}>
            <div className="card">
              <img src={member.avatar} className="card-img-top" alt={member.first_name} />
              <div className="card-body">
                <h5 className="card-title">{member.first_name}</h5>
                <p className="card-text">{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    membersView = <p>No member found!</p>;
  }
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <div>
                <h3 className="d-inline-block">Our Members</h3>
                <button
                  className="btn btn-primary d-inline-block m-2"
                  onClick={() => handleSignOut()}
                >
                  Sign Out
                </button>
              </div>
              <p>List of members fetched from the API</p>
              {membersView}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
