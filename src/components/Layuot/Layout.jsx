import {NavLink, Outlet} from 'react-router-dom'
import { NavList, NavItem, NavItemName,Header, Nav, MainWrapper } from './Layout.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProfileThunk,logoutThunk } from '../../redux/auth/thunk'



export const Layout = () => {
    const dispatch = useDispatch()
const profile = useSelector(state => state.auth.profile)
const token = useSelector(state => state.auth.token)

useEffect(() => {
token && dispatch(getProfileThunk())
}, [token,dispatch])


    return(
<>
        <Header>
<Nav>
<NavList>


    <NavItem><NavLink to='registration'>Registration</NavLink></NavItem>





{!profile ? 
<NavItem><NavLink to='login'> Login</NavLink></NavItem> :
<NavItem onClick={() => dispatch(logoutThunk())}><NavLink to='/'> LogOut</NavLink></NavItem>
}

{profile && 
<>
<NavItem><NavLink to ='/'> Home</NavLink></NavItem>
<NavItemName>{profile.name}</NavItemName>
</>

}

</NavList>
</Nav>

        </Header>

        <MainWrapper>
        <Outlet/>
        </MainWrapper>

</>
    )
}