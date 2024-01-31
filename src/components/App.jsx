import { Routes, Route } from "react-router-dom";
import {  useEffect } from "react";
import { fetchContactsThunk } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";





import { Layout } from "./Layuot/Layout";
import { Main } from "./Main/Main";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "./PrivateRoute";
import { UnAuthPage } from "components/pages/UnAuthPage/UnAuthPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { selectIsLogged } from "../redux/auth/auth-selectors";





export const App = () =>  {
const isLogged = useSelector(selectIsLogged)

  const dispatch = useDispatch()


  useEffect(() => {
dispatch(fetchContactsThunk())
    }, [dispatch, isLogged])
return (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
  >
  <>
  <Toaster
  position="top-rightr"
  reverseOrder={false}
/>

    <Routes>
      <Route path='/' element={<Layout/>}>

  {!isLogged ?

  <Route index element={<UnAuthPage/>}/> :
  <Route index element={<PrivateRoute>{<Main/>}</PrivateRoute>}/>}

      <Route path='/registration' element={
<RestrictedRoute>
<RegistrationPage />
</RestrictedRoute>



}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Route>
    </Routes>
  </>
  </div>
  
)



};
