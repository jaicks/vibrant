import React, { Component } from 'react';
import { postList, AddPost, EditPost, CloseModal } from '../actions/postActions';
import { connect } from "react-redux";
import Add from './Add';
import Edit from './Edit';
import MessageModal from './MessageModal';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addUser: false,
            editUser: false,
            selectedUser: {}
        }
    }
    componentDidMount() {
        this.props.postList();
    }
    handleAddUser = () => {
        console.log("tesansd");
        this.setState({ addUser: true })
    }
    handleEditUser = (data) => {
        this.setState({ editUser: true, selectedUser: data })
    }
    handleCloseModal = () => {
        this.setState({ addUser: false, editUser: false, showMessage: false })
        this.props.CloseModal()
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <div className="d-flex justify-content-end px-3 py-2" >
                    <button className="btn btn-primary" onClick={this.handleAddUser}>Add User</button>
                </div>
                <table className="table table-border table-striped table-info">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Tilte</th>
                            <th scope="col">Body</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            list && list.length > 0 && (
                                list.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.title}</td>
                                            <td>{data.body}</td>
                                            <td onClick={() => { this.handleEditUser(data) }}className="edit-link">edit</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
                {this.state.addUser && <Add
                    AddPost={this.props.AddPost}
                    handleCloseModal={this.handleCloseModal} />}
                {
                    this.state.editUser && <Edit
                        selectedUser={this.state.selectedUser}
                        EditPost={this.props.EditPost}
                        handleCloseModal={this.handleCloseModal}
                    />
                }
                {
                    (this.props.isAddUser || this.props.isEditUser) && <MessageModal
                        isAdd={this.props.isAddUser}
                        isEdit={this.props.isEditUser}
                        handleCloseModal={this.handleCloseModal}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.postData,
    isEditUser: state.isEditUser,
    isAddUser: state.isAddUser
});
export default connect(mapStateToProps, { postList, AddPost, EditPost, CloseModal })(Landing); 