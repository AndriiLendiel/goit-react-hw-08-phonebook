import { FormWrapper, MainForm, SubWrapperForm, Title, FormLabel, FormInput, FormButton } from "utils/utils";
import { registrationThunk, loginThunk } from "../../../redux/auth/auth-operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useDispatch, useSelector} from 'react-redux'
import {selectProfile} from '../../../redux/auth/auth-selectors'
import {selectIsLoading} from '../../../redux/auth/auth-selectors'
import {Hourglass} from 'react-loader-spinner';







const RegistrationPage = () => {
const isLoading = useSelector(selectIsLoading)
const dispatch = useDispatch()
const navigate = useNavigate()
const profile = useSelector(selectProfile)
const handleSubmit = (e) => {
    e.preventDefault();
	const newUser = {
		name: e.target.elements.name.value,
		email: e.target.elements.email.value,
		password: e.target.elements.password.value
	}
dispatch(registrationThunk(newUser))
.then(() => {
toast.success(`user ${newUser.name} is registrated`)
if(!profile){
	toast('AutoLogin. Waiting...',
	{
	  icon: '⏳',
	  style: {
		borderRadius: '10px',
		background: '#333',
		color: '#fff',
	  },
	}
  );
}
navigate('/login')
setTimeout(() => {
	dispatch(
		loginThunk({
		email: e.target.elements.email.value,
		password: e.target.elements.password.value
			}),
			).unwrap().then(() => {
				navigate('/')
			toast.success(`Welcome ${e.target.elements.name.value}`)

			})
			.catch(() => toast.error('Smth wrong'))
}, 2000);})
.catch((error) => {

	toast.error("Smth wrong")
	console.log(error)})

    }
    return (
		<>
		{isLoading ?
			<div style={{display: 'flex', alignItems: 'center', height: '60%'}}>
			<Hourglass 
			visible={true}
			height="80"
			width="100%"
			ariaLabel="hourglass-loading"
			wrapperStyle={{}}
			wrapperClass=""
			colors={['#306cce', '#72a1ed']}
			/>
			</div> :
       <div>
	   <Title>SignUp</Title>
<FormWrapper>
<MainForm onSubmit={handleSubmit} >
	   <SubWrapperForm>
			   <FormLabel htmlFor='exampleInputName'>
			   Your	Name
			   </FormLabel>
			   <FormInput
				   name='name'
				   type='text'
				   id='exampleInputName'
				   aria-describedby='nameHelp'
			   />
		   </SubWrapperForm>
		   <SubWrapperForm>
			   <FormLabel htmlFor='exampleInputEmail1'>
				   Email address
			   </FormLabel>
			   <FormInput
				   name='email'
				   type='email'
				   id='exampleInputEmail1'
				   aria-describedby='emailHelp'
			   />
		   </SubWrapperForm>
		   <SubWrapperForm >
			   <FormLabel
				   htmlFor='exampleInputPassword1'

			   >
				   Password
			   </FormLabel>
			   <FormInput
				   name='password'
				   type='password'
				   id='exampleInputPassword1'
			   />
		   </SubWrapperForm>

		   <FormButton type='submit'>
			   Submit
		   </FormButton>
	   </MainForm>
</FormWrapper>

   </div>
		}




 </>
    )
}

export default RegistrationPage