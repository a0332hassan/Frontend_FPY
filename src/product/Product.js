import React,{Component} from "react";
import Header from "../shared/header";
import SideBar from "../shared/SideBar";
import Footer from "../shared/Footer";
import ProductAdd from "./components/ProductAdd";
import ProductUpdate from "./components/ProductUpdate";

export default class Product extends Component{
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
                            <h3 className="card-title">Products</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-default-add">
                                   Add
                                </button>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th style={{width: 10}}>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1.</td>
                                <td>Name</td>
                                <td>
                                    Description
                                </td>
                                <td>100.00</td>
                                <td className="text-center">
                                    <a href="javascrip:void(0)" data-toggle="modal" data-target="#modal-default-update"><i className="fas fa-edit text-success"></i></a>
                                    </td>
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
            <ProductAdd></ProductAdd>
            <ProductUpdate></ProductUpdate>
        </div>
        )
        
    }
}