import { Component } from "react";
import { Navigate } from "react-router-dom";

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            message: '',
            redirect: false
        }
    }

    handleChange = (event) => {
        const fieldsObject = {};
        fieldsObject[event.target.getAttribute('name')] = event.target.value;
        this.setState(fieldsObject);
    }

    handleLogin = (event) => {
        if(this.state.email !== '' && this.state.password !== ''){
            let options = {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(this.state)
            }
            fetch('http://localhost:4000/login',options).then((response)=>{
                response.json().then((result)=>{
                    if(result.token === ''){
                        this.setState({
                            message: result.message
                        })
                    }else{
                        localStorage.setItem('access_token',result.token);
                        this.setState({redirect: true});
                    }
                })
            })
        }
    }

    render(){
        if(this.state.redirect === true){
            return <Navigate to="/products" />
        }else{
            return (
                <div className="container-fluid bg-dark login-page">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-5" id="form1">
                                <div className="form-data">
                                    <div className="forms-inputs mb-4"> <span>Email or username</span> 
                                        <input type="text" name="email" onChange={this.handleChange} />
                                        <div className="invalid-feedback">A valid email is required!</div>
                                    </div>
                                    <div className="forms-inputs mb-4"> <span>Password</span> 
                                        <input type="password" name="password" onChange={this.handleChange} />
                                        <div className="invalid-feedback">Password must be 8 character!</div>
                                        <span className="help-block text-danger">
                                            {this.state.message}
                                        </span>
                                    </div>
                                    <div className="mb-3"> <button className="btn btn-dark w-100" onClick={this.handleLogin}>Login</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default Login;