import React from 'react'

export default function SideBar() {
    return (
        <div>
          <div className="admin-sidebar">
            <ul className="admin-items">
              <li className="admin-list">
                 <Link to="/admin_main">DashBoard</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Teams and Users">Teams and Users</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Projects">Projects</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Update">Update Blogs</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Add Update">Add Update</Link>
              </li>
              <li className="admin-list">
                 <Link to="/create Admin">create Admin</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Ban User">Ban User</Link>
              </li>
              <li className="admin-list">
                 <Link to="/Server Info">Server Info</Link>
              </li>
              <li className="admin-list">
                 <Link to="/status">status</Link>
              </li>
            </ul>
          </div>
        </div>
    )
}
