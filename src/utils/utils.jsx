import styled from "@emotion/styled";

import {theme} from './theme';
export const Title = styled.div`
font-size: 48px;
color: #034694;
text-align: center;
margin-bottom: 20px;
`






export const ErrorText = styled.p`
font-size: 24px;
color: red;
`

export const FormWrapper = styled.div`
width: 100%;
padding: 5px;
margin-top: ${theme.values.blockMargin};
`

export const MainForm = styled.form`
display: grid;
justify-items: center;
`
export const SubWrapperForm = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
`
export const FormLabel = styled.label`
font-size: 36px;
color: ${theme.colors.textColor};
margin-bottom: 10px;
`

export const FormInput = styled.input`
width: 100%;
margin-bottom: 40px;
height: 25px;
font-size: 24px;
background-color: grey;
opacity: 0.6;
color: black;
padding: 8px;
border-radius: 6px;

`


export const FormButton = styled.button`
width: 80%;
cursor: pointer;
font-size: 28px;
/* width: 300px; */
margin-top: 100px;
margin-left: auto;
margin-right: auto;
padding: 30px 80px;
  background-color: ${theme.colors.btnColor};
  border-radius: 10px;
  border: 1px solid #257C9E;
  color: ${theme.colors.white};
  :active {
    background-color: ${theme.colors.btnColorActive};
    color: whitesmoke;
  }
`