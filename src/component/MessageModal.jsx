import React, { Component } from 'react';

class MessageModal extends Component {
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
                          this is success mesage
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={this.props.handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageModal;