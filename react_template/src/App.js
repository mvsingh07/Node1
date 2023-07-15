
import { Fragment } from 'react';
import Main from './layouts/Main';
import Second from './layouts/Second'
import {Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Login from './pages/Login';
import AuthGuard from './AuthGuard';
import ProductCustomizer from './pages/ProductCustomizer';
import ProdCustomizer from './pages/ProdCustomizer';
import ImagePosition from  './pages/ImagePosition';
import ImageSelection from './pages/ImageSelection';


function App() {
  return (
    <Fragment>
        <Routes>
            <Route path="/" element={<AuthGuard component={Main}/>}>
                <Route index = "True"  element={<Dashboard/>}/>
                <Route  path='/Dashboard' element={<Dashboard/>}/>
                            <Route path="/Products" element={<Products/>}/>
            </Route>

            <Route path="/" element={<AuthGuard component={Second}/>}>
                <Route  path='/ProductCustomizer' element={<ProductCustomizer/>}/>
                <Route  path='/ProdCustomizer' element={<ProdCustomizer/>}/>
                <Route path='/ImageSelection' element={<ImageSelection/>}/>
                <Route path='/ImagePosition' element={<ImagePosition/>}/>



            </Route>



            <Route exact path='/login' element={<Login />} />
        </Routes>
    </Fragment>
  );
}

export default App;

//import { Fragment } from "react";
// import Main from './layouts/Main';
// import { Routes,Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Products from "./pages/Products";

// function App(){
//   return(
//    <Fragment>

//       <Routes>

//           <Route path="/" element={<Main/>}>

//               <Route path="/Dashboard" element={<Dashboard/>}/>

//               <Route path="/Products" element={<Products/>}/>
                     
//           </Route>

//       </Routes>


//    </Fragment>

//   )
// }

// export default App;