import React,{Component} from "react";
import Header from "./shared/header";
import SideBar from "./shared/SideBar";
import Footer from "./shared/Footer";

export default class Dashboard extends Component
{
    render()
    {
        return(
            <div>
                <div className="wrapper">
                    <Header></Header>
                    <SideBar></SideBar>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper mt-4">
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-info">
                                <div className="inner">
                                <h3>150</h3>
                                <p>New Orders</p>
                                </div>
                                <div className="icon">
                                <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                <h3>53</h3>
                                <p>Complete Orders</p>
                                </div>
                                <div className="icon">
                                <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                <h3>44</h3>
                                <p>Customers</p>
                                </div>
                                <div className="icon">
                                <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                <h3>65</h3>
                                <p>Users</p>
                                </div>
                                <div className="icon">
                                <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}
                    <Footer></Footer>
                </div>
                {/* ./wrapper */}
                </div>

        )
    }
}