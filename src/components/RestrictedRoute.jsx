
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const RestrictedRoute = ({children, redirectTo='/'}) => {
    const isLogged = useSelector(state => state.auth.token)




return !isLogged ? children :
<Navigate to={redirectTo}/>
}