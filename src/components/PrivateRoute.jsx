import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoading, selectIsLogged } from "../redux/auth/auth-selectors"

export const PrivateRoute = ({children}) => {
    const isLogged = useSelector(selectIsLogged)
    const isLoading = useSelector(selectIsLoading)
    const shouldRedirect = !isLogged && !isLoading

return shouldRedirect ?  <Navigate to = '/'/> 

: children
}