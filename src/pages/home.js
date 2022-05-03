import React from "react";
import { NavLink } from 'react-router-dom';
import './home.css';
import { Component } from 'react';
import { AiFillCalendar,AiOutlineDeploymentUnit,AiFillSignal,AiFillMail,AiOutlineDollar,AiOutlineForm,AiOutlineLogout,AiOutlineMenu,AiOutlineDown} from "react-icons/ai";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="logo-details">
          <span id="logo_name" className="logo_name"> HR DASHBOARD </span>
          
          </div>
          <ul className="nav-links">
            
            <li>
              <a href="/">
                <i className="bx bx-box" />
                <span className="links_name"><AiFillMail/>  Apply Leave</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-list-ul" />
                <span className="links_name"><AiFillCalendar/>  Attendance</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-pie-chart-alt-2" />
                <span className="links_name"><AiOutlineDeploymentUnit/>  Circular</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-user" />
                <span className="links_name"><AiFillSignal/>  Perfomances<AiOutlineDown/></span><br />
              </a>
            </li>
            <li>
              <a href="/">
                <span className="links_name">Leave Management</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-book-alt" />
                <span className="links_name"><AiOutlineDollar/>  Payroll Management</span>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="bx bx-message" />
                <span className="links_name"><AiOutlineForm/>  Grievance Complaint</span>
              </a>
            </li>
            <li className="log_out">
              <a href="/">
                <i className="bx bx-log-out" />
                <span className="links_name"><AiOutlineLogout/>   Log out</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <nav>
            <div className="sidebar-buthrefn">
              <i className="bx bx-menu sidebarBtn" />
              <span className="dashboard"><AiOutlineMenu/>  DASHBOARD </span>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search" />
            </div>
            <div className="profile-details">
              <span className="admin_name">HR</span>
              <i className="bx bx-chevron-down" />
            </div>
          </nav>
        </section>
      </div>
    );
  }
}

export default Home;
