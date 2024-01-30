
import styled from "styled-components";

export const Header = styled.header`
width: 750px;
  height: 100px;
margin-bottom: 5px;
  text-align: center;
  overflow: hidden;
  width: 700px;
border: 1px solid #034694;
background: radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
padding: 20px;
border-bottom: none;
`
export const Nav = styled.nav`

    line-height: 60px;
    /* width: 100%; */
`
export const NavList = styled.ul`
display: flex;
justify-content: space-around;
padding: 0;

`

export const NavItem = styled.li`

a {
    text-decoration: none;
    color: #034694;
    display: inline-block;
    padding: 10px 15px;
    line-height: 1;
    transition: color 500ms linear, transform 500ms ease-in-out;


        &:hover{
color: grey;
border-bottom: 2px solid #034694;
}
}
`
export const NavItemName = styled.li`
    text-decoration: none;
    color: #45171d;
    display: inline-block;
    padding: 10px 15px;
    line-height: 1;
    border: 1px solid grey;
    border-radius: 10px;
`


export const MainWrapper = styled.div`
width: 700px;
min-height: 800px;
border: 1px solid #034694;
background: radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
padding: 20px;
border-top: none;
`









