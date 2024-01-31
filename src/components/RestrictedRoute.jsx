
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLogged } from "../redux/auth/auth-selectors"



export const RestrictedRoute = ({children, redirectTo='/'}) => {
const isLogged = useSelector(selectIsLogged)
return !isLogged ? children :
<Navigate to={redirectTo}/>
}