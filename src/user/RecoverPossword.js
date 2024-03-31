import React,{Component} from "react";

export default class RecoverPassword extends Component
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
                        <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
                        <form action="login.html" method="get">
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <button type="submit" className="btn btn-primary btn-block">Change password</button>
                            </div>
                            {/* /.col */}
                        </div>
                        </form>
                        <p className="mt-3 mb-1">
                        <a href="/">Login</a>
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