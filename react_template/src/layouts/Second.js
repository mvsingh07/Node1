import {Component} from 'react';
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
import { Outlet } from 'react-router-dom';


class Main extends Component {

    constructor(){
        super();

        this.state={
            parentClass:"sb-nav-fixed"
        }
    }

    onclickHandler=()=>{

        if(this.state.parentClass==="sb-nav-fixed"){
            this.setState({parentClass:"sb-nav-fixed sb-sidenav-toggled"});
        }

        else{
            this.setState({parentClass:"sb-nav-fixed"});
        }

    }
    render() {
        return (
            <div className={this.state.parentClass}>
           
                              
               
                    <Outlet/>
         
            </div>
        );
    }
}

export default Main;