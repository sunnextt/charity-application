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
                      <a href='' className='logout-btn'><i class="fa">&#xf011;</i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col-1-0f-4">



                </div>


                <div className="col-3-0f-4">

                  <section>
                    <div className='site-info'>
                      <div className='all-quick-info'>
                        <div className='info-icon'><i class="fa">&#xf0c0;</i></div>
                        <div className='text-right'>
                          <div className='info-numbers'><span>15</span></div>
                          <div>Users</div>
                        </div>
                        <div className='info-box-footer'>
                          <a href='#' className='user-href'><span className="pull-left">View Details</span>
                            <span className='pull-right'><i className="fa fa-arrow-circle-right"></i></span></a>
                        </div>
                      </div>
                      <div  className='all-quick-info'>
                        <div className='info-icon'> <i className="fa">&#xf132;</i></div>
                        <div className='text-right'>
                          <div className='info-numbers'><span>2</span></div>
                          <div>Total Admins!</div>
                        </div>
                        <div className='info-box-footer'>
                          <a href='#' className='user-href' ><span className="pull-left">View Details</span>
                            <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></a>
                        </div>
                      </div>
                      <div className='all-quick-info'>
                        <div className='info-icon'> <i class="fa fa-envelope"></i></div>
                        <div className='text-right'>
                          <div className='info-numbers'><span>1,330</span></div>
                          <div>Total Messages!</div>
                        </div>
                        <div className='info-box-footer'>
                          <a href='#' className='user-href' ><span className="pull-left">View Details</span>
                            <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></a>
                        </div>
                      </div>
                      <div  className='all-quick-info'>
                        <div className='info-icon'><i className="fa">&#xf05e;</i></div>
                        <div className='text-right'>
                          <div className='info-numbers'><span>15</span></div>
                          <div>Banned Users!</div>
                        </div>
                        <div className='info-box-footer'>
                          <a href='#' className='user-href' ><span className="pull-left">View Details</span>
                            <span className='pull-right'><i class="fa fa-arrow-circle-right"></i></span></a>
                        </div>
                      </div>
                    </div>
                    <div className='message-server'>
                      <span className='warn-message'><i class="fa">&#xf071;</i></span>
                      <span className='warn-message'>dashboard warning message!</span>
                      <span className='right warn-message'><i class="fa fa-times"></i></span>
                    </div>
                    <div className='new-content-holder'>
                      <div className='notifications'>
                        <div className='notify-header'>
                          <h2><i className="fa">&#xf0f3;</i> Notifications</h2>
                          <div className='action-holder'>
                            <i className="fa">&#xf106;</i> <i class="fa">&#xf013;</i>
                          </div>
                        </div>
                        <div className='notify-box'>
                          <div className='sender'>
                            <img src='https://tinyurl.com/wnje5dc' width='30' align='middle'></img>
                            <a href='#' title='view message'><span>FLUFFERS</span></a>
                            <span className='mail-icon'><i class="fa fa-envelope"></i></span>
                          </div>
                        </div>
                      </div>
                      <div className='notifications'>
                        <div className='notify-header'>
                          <h2><i className="fa">&#xf0ac;</i> Bandwidth</h2>
                          <div className='action-holder'>
                            <i className="fa">&#xf106;</i> <i class="fa">&#xf013;</i>
                          </div>
                        </div>
                        <div className='notify-box'>
                          <div className='sender'>
                            <span><i  class="fa">&#xf0ac;</i></span>
                            <span >192.168.0.0 / 20.4 GIB</span>
                          </div>
                        </div>
                      </div>
                      <div className='notifications'>
                        <div className='notify-header'>
                          <h2><i className="fa">&#xf233;</i> Server Info</h2>
                          <div className='action-holder'>
                            <i className="fa">&#xf106;</i> <i class="fa">&#xf013;</i>
                          </div>
                        </div>
                        <div className='notify-box'>
                          <span>60% / 70°F / 3.3 Ghz</span>
                          <span >CPU</span>
                          <div className='fluff-grey'>
                            <div className='fluff-blue'>
                            </div>
                          </div>
                          <span>25% / 4GB / (16GB)</span>
                          <span >MEM</span>
                          <div className='fluff-grey'>
                            <div className='fluff-blue' >
                            </div>
                          </div>
                          <span>70% / 100GB / 50GB</span>
                          <span >BANDWIDTH</span>
                          <div className='fluff-grey'>
                            <div className='fluff-blue' >
                            </div>
                          </div>
                          <span>10% / 100GB / 1TB</span>
                          <span >DISC SPACE</span>
                          <div className='fluff-grey'>
                            <div className='fluff-blue'>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='newest-members'>
                      <div  className='notifications'>
                        <div className='notify-header'>
                          <h2><i className="fa">&#xf0c0;</i> Newest Members</h2>
                          <div className='action-holder'>
                            <i className="fa">&#xf106;</i> <i class="fa">&#xf013;</i>
                          </div>
                        </div>
                        <div className='notify-box'>
                          <table id="customers">
                            <tr>
                              <th>Joined</th>
                              <th>Username</th>
                              <th>IP</th>
                              <th>Banned</th>
                              <th>Actions</th>
                            </tr>
                            <tr>
                              <td>1 week ago</td>
                              <td>FLUFFERS</td>
                              <td>127.0.0.1</td>
                              <td>NO</td>
                              <td>
                                <a className='actions-btns' href='#'><i class="fa">&#xf040;</i></a>
                                <a className='actions-btns2' href='#'><i class="fa fa-times"></i></a>
                              </td>
                            </tr>
                          </table>
                          <div className='view-all-members'>
                            <span className='view-all-btn1'><a href='#'>View All Members</a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>

              </div>
          </div>
)
}
