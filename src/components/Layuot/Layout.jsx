import {NavLink, Outlet} from 'react-router-dom'
import { NavList, NavItem, NavItemName,Header, Nav, MainWrapper } from './Layout.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProfileThunk,logoutThunk } from '../../redux/auth/auth-operations'
import {selectToken, selectProfile} from '../../redux/auth/auth-selectors'



export const Layout = () => {
    const dispatch = useDispatch()
const profile = useSelector(selectProfile)
const token = useSelector(selectToken)

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