import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'

import { layoutConfig } from './config/layout-config';
import { Employees } from './components/pages/Employees';
import { AddEmployee } from './components/pages/AddEmployee';
import { AgeStatistics } from './components/pages/AgeStatistics';
import { SalaryStatistics } from './components/pages/SalaryStatistics';
import { Login } from './components/pages/Login';
import { Logout } from './components/pages/Logout';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function App() {
    const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
    const [routes, setRoutes] = React.useState(layoutConfig.routes);
    useEffect(() => {
        console.log('authUser=', authUser);
        let sroutes: { path: string; label: string; flAdmin: boolean; flAuth: boolean; }[] = [];
        if(authUser.length==0) {
            sroutes = layoutConfig.routes.filter(r => r.label.includes('Login'));
        } else {
            if(authUser.includes("admin")) {
                sroutes = layoutConfig.routes.filter(r => !r.label.includes('Login'));
            } else {
                sroutes = layoutConfig.routes.filter(r => !r.label.includes('Login'));
                sroutes = sroutes.filter(r => !r.label.includes('Add Employees'));
            }
            sroutes[sroutes.findIndex( r => r.path.includes('/logout'))].label = authUser;
        }
        setRoutes(sroutes);
    
       }, [authUser])
    

return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigator routes={routes}  />}>
              <Route index element={<Employees/>}/>
              <Route path='add' element={<AddEmployee/>}/>
              <Route path='statistics/age' element={<AgeStatistics/>}/>
              <Route path='statistics/salary' element={<SalaryStatistics/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='logout' element={<Logout/>}/>
          </Route>
      </Routes>
  </BrowserRouter>

}
export default App;
