import React,{Component} from "react";

export default class ProductUpdate extends Component
{
     render(){
        return(
            <form>
                <div className="modal fade" id="modal-default-update">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Update Product</h4>
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
                            <label htmlFor="Description">Description</label>
                            <textarea type="text" className="form-control" id="description" placeholder="Enter description" />
                            </div>
                            <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" id="price" placeholder="Enter price" />
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