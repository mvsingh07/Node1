import { Component } from "react";

class List extends Component{

    constructor(){
        super();

    }

    render(){
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>                                        
                </thead>
                <tbody>
                    {
                        this.props.data.map((user, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <a href="#" onClick={()=>{
                                            this.props.handleDelete(user.id)
                                        }} className="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default List;