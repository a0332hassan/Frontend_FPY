import React,{Component} from "react";

export default class ForgotPassword extends Component
{
    render()
    {
        return(
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                    <a href="../../index2.html"><b>FPY</b></a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                        <form action="recover-password" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <a href="/recover-password" className="btn btn-primary btn-block">Request new password</a>
                            </div>
                            {/* /.col */}
                        </div>
                        </form>
                        <p className="mt-3 mb-1">
                        <a href="/">Login</a>
                        </p>
                        <p className="mb-0">
                        <a href="/register" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}
            </div>
        )
    }
}