import React,{Component} from "react";

export default class UserUpdate extends Component
{
    componentDidMount() {
        // Access jQuery via window.$
    if (window.$) {
        // Initialize Select2 Elements
        window.$('.select2').select2();
      } else {
        console.error("jQuery is not loaded");
      }
      }
     render(){
        return(
            <form>
                <div className="modal fade" id="modal-default-update">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Update User</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                            <label>Role</label>
                            <select className="select2" multiple="multiple" data-placeholder="Select a role" style={{width: '100%'}}>
                                <option>Admin</option>
                                <option>Farmer</option>
                            </select>
                            </div>
                            {/* /.form-group */}
                        </div>
                        <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>
                {/* /.modal */}
            </form>
        )
     }
}