import React, { Component } from 'react';
import { AddPost } from '../actions/postActions'
class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            userId: ""
        }
    }
    handleSubmit = () => {
        let data = {
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body
        }
        this.props.AddPost(data);
        this.props.handleCloseModal();
    }
    render() {
        return (
            <div className="modal d-flex" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                            <input placeholder="UserId" className="my-3 form-control" onChange={(e) => { this.setState({ userId: e.target.value }) }} />
                            <input placeholder="Title" className="my-3 form-control" onChange={(e) => { this.setState({ title: e.target.value }) }} />
                            <input placeholder="Body" className="my-3 form-control" onChange={(e) => { this.setState({ body: e.target.value }) }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.handleCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add;