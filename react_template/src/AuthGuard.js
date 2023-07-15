import { Component } from "react";
import { Navigate  } from "react-router-dom";

class AuthGuard extends Component{

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated:true
        }
    }

    componentDidMount(){
        const accessToken = localStorage.getItem('access_token');
        if(accessToken === null || accessToken === undefined){
            this.setState({isAuthenticated: false});
        }else{
            this.setState({isAuthenticated: true}); 
        }
    }

    render(){
        const { component: Component } = this.props;
        if(!this.state.isAuthenticated){
            return <Navigate to="/login" />;
        }
          else{
        return  <Component {...this.props} />;
    }
}
}

export default AuthGuard;