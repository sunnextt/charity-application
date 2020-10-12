import React from 'react';
// import AdminMain from './AdminMain'

export default function DashBoard() {
    return (
          <div className="dashboard">
            <div className="admin-header">
              <div className="admin-header-text">
                <h3>Admin Panel</h3>
              </div>
              <div className="">
                <a href="/dashboard" >DashBoard</a>
              </div>
              <div className="admin-log">
                <span>Hello admin</span>
                <a href="/login">logout</a>
              </div>
            </div>
            <div className="admin-body">
              <div className="row">
                <div className="col-1-of-4">

                </div>
                <div className="col-3-of-4">

                </div>
              </div>
            </div>
          </div>
)
}
