import { useSelector } from "react-redux"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const isLoading = useSelector(state => state.auth.isLoading)
    const shouldRedirect = !isLogged && !isLoading

return shouldRedirect ?  <Navigate to = '/'/> 

: children
}