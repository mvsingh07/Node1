import { Component } from "react";
import List from "../components/List";
class Products extends Component {


    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            gender: '',
            email: '',
            phone: '',
            password: '',
            
            city: '',
            errorMessage: '',
            successMessage: '',
            users:[]
        }
    }

    handleChange = (event) => {
        let fieldsObject = {};
        fieldsObject[event.target.getAttribute('name')] = event.target.value;
        this.setState(fieldsObject);
    }

    saveUser = () => {
        let options = {
            method: 'post',
            headers: {
                'Content-Type':'application/json'
                // "Authorization" : "Bearer ${localStorage.getItem('access_token')}"
            },
            body: JSON.stringify(this.state)
        }
        fetch('http://localhost:4000/register',options).then((response)=>{
            this.setState({errorMessage:''});
            response.json().then((result)=>{
                if(result.status === 'error'){
                    this.setState({
                        errorMessage: result.message
                    })
                }else{
                    this.setState({
                        name: '',
                        age: '',
                        gender: '',
                        email: '',
                        phone: '',
                        password: '',
                        city: '',
                        successMessage:result.message
                    });
                    this.getUsers();
                }
            })
        })
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers(){

       


        fetch('http://localhost:4000/users').then((response)=>{
            response.json().then((result)=>{
                this.setState({users:result})
            })
        })
    }

    handleDelete = (id) =>{
        if(window.confirm("Are you surely want to delete this record"))
    {
       fetch("http://localhost:4000/user/"+id).then((response)=>
       {

               response.json().then((result)=>{
                this.getUsers();
               })

       })

    }
}

    render() {
        return (
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                            
                            <div className="col-md-6 mb-5">
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Age</label>
                                        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                                        <span className="text-info text-danger">{this.state.errorMessage}</span>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Gender</label>
                                        <select className="form-control" name="gender" onChange={this.handleChange} value={this.state.gender}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control" />
                                    </div>
                                     <div className="col-md-12 form-group mb-3">
                                        <label>City</label>
                                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} className="form-control" />
                                    </div> 
                                    <div className="col-md-12 form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="col-md-12 text-success">
                                        <p>{this.state.successMessage}</p>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" onClick={this.saveUser}>Save User</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-12">
                                <List data={this.state.users} handleDelete={this.handleDelete}/> 
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
export default Products;
