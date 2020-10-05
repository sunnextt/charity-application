import React from 'react'

export default function DashBoard() {
    return (
          <div className="dashboard-body" >
              <div classname="dashboard">
                <div className='admin-header'>
                  <div className='header-text'>
                    <h3>Admin Panel 2.0</h3>
                    <div className='header-greet'>
                      <span><i class="fa">&#xf007;</i> Hello Admin</span>
                      <link href='' className='logout-btn'><i class="fa">&#xf011;</i></link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1-of-4">
                    <div className='admin-sidebar'>
                      <li>
                        <input placeholder='Search...' className='search-input' type='search' /><input type='submit' id='search-btn-1' class='fa' value='&#xf002;' />
                      </li>
                      <li>
                        <link href='#'><i class="fa">&#xf0e4;</i> Dashboard</link>
                      </li>
                      <li>
                        <link href='#'><i class="fa">&#xf0c0;</i> Users</link>
                      </li>
                      <li>
                        <link href='#'><i class="fa">&#xf055;</i> Add Update</link>
                      </li>
                      <li>
                        <link href='#'><i class="fa">&#xf132;</i> Create Admin</link>
                      </li>
                      <span onclick="size()">
                        <li id='all-nav'>
                          <link href='#' className='dropdown-btn'><i class="fa">&#xf05e;</i> Ban User </link> <i class="fa fa-angle-down" aria-hidden="true"></i>
                          <ul id='nav' className='second-nav-ul'>
                            <li className='nav-items'>
                              <link href='#'>Banned Ips</link>
                            </li>
                          </ul>
                        </li>
                      </span>
                      <li>
                        <link href='#'><i class="fa">&#xf233;</i> Server Info</link>
                      </li>
                    </div>
                  </div>
                  <div className="col-3-of-4">
                    <div className='center-content'>
                      <div className='all-border'>
                        <div className='shows-location'>
                          <div className='location-text'>
                            <span className='location'>Admin <i class="fa">&#xf101;</i> Dashboard</span>
                          </div>
                        </div>
                        <section>
                          <div className='site-info'>
                            <div className='all-quick-info'>
                              <div className='info-icon'><i class="fa">&#xf0c0;</i></div>
                              <div className='text-right'>
                                <div className='info-numbers'><span>15</span></div>
                                <div>Users</div>
                              </div>
                              <div className='info-box-footer'>
                                <link href='#' className='user-href'><span className="pull-left">View Details</span>
                                  <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></link>
                              </div>
                            </div>
                            <div  className='all-quick-info'>
                              <div className='info-icon'> <i className="fa">&#xf132;</i></div>
                              <div className='text-right'>
                                <div className='info-numbers'><span>2</span></div>
                                <div>Total Admins!</div>
                              </div>
                              <div className='info-box-footer'>
                                <link href='#' className='user-href' ><span className="pull-left">View Details</span>
                                  <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></link>
                              </div>
                            </div>
                            <div className='all-quick-info'>
                              <div className='info-icon'> <i class="fa fa-envelope"></i></div>
                              <div className='text-right'>
                                <div className='info-numbers'><span>1,330</span></div>
                                <div>Total Messages!</div>
                              </div>
                              <div className='info-box-footer'>
                                <link href='#' className='user-href' ><span className="pull-left">View Details</span>
                                  <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></link>
                              </div>
                            </div>
                            <div  className='all-quick-info'>
                              <div className='info-icon'><i className="fa">&#xf05e;</i></div>
                              <div className='text-right'>
                                <div className='info-numbers'><span>15</span></div>
                                <div>Banned Users!</div>
                              </div>
                              <div className='info-box-footer'>
                                <link href='#' className='user-href' ><span className="pull-left">View Details</span>
                                  <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></link>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
)
}
