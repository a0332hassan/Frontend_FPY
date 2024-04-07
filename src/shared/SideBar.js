import React,{Component} from "react";

export default class SideBar extends Component
{
    render()
    {
        return(
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="/dashboard" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                        <span className="brand-text font-weight-light">FM</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="/dashboard" className="d-block">Alexander Pierce</a>
                        </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                            <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon ion ion-bag" />
                                <p>
                                Orders
                                <span className="right badge badge-danger">25</span>
                                </p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/products" className="nav-link">
                                <i className="nav-icon ion ion-bag" />
                                <p>
                                Products
                                </p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/users" className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                Users
                                </p>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a href="/customers" className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                Customers
                                </p>
                            </a>
                            </li>
                        </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>
        )

    }
}