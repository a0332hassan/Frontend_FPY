import React,{Component} from "react";
import Header from "../shared/header";
import SideBar from "../shared/SideBar";
import Footer from "../shared/Footer";

export default class Customer extends Component{
    render()
    {
        return(
        <div class="wrapper">
            <Header></Header>
            <SideBar></SideBar>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper mt-4">
                {/* Main content */}
                <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Customers</h3>
                            <div className="card-tools">
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th style={{width: 10}}>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>CNIC</th>
                                <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1.</td>
                                <td>James</td>
                                <td>
                                James@gmail.com
                                </td>
                                <td>
                                17000-0000000-0
                                </td>
                                <td>G9-1,Street no# 169,House No# 1301</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer clearfix">
                            <ul className="pagination pagination-sm m-0 float-right">
                            <li className="page-item"><a className="page-link" href="#">«</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">»</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            <Footer></Footer>
        </div>
        )
        
    }
}