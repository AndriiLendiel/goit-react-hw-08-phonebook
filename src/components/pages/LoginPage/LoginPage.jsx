import { FormWrapper, MainForm, SubWrapperForm, FormLabel, FormInput, FormButton, Title } from "utils/utils";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/auth/thunk";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const LoginPage = () => {

	const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = (e) => {
e.preventDefault();
	dispatch(
	loginThunk({
	email: e.target.elements.email.value,
	password: e.target.elements.password.value
		}),
		).unwrap().then(() => {
			navigate('/')
		toast.success(`Welcome ${e.target.elements.email.value}`)
		})
		.catch(() => toast.error('Smth wrong'))
	}

	return (
		<div>
			<Title>Login</Title>
<FormWrapper>
<MainForm  onSubmit={handleSubmit}>
				<SubWrapperForm>
					<FormLabel htmlFor='exampleInputEmail1' >
						Email address
					</FormLabel>
					<FormInput
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
				</SubWrapperForm>
				<SubWrapperForm>
					<FormLabel
						htmlFor='exampleInputPassword1'
					>
						Password
					</FormLabel>
					<FormInput
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
					/>
				</SubWrapperForm>
				<FormButton type='submit'>
					Submit
				</FormButton>
			</MainForm>
</FormWrapper>

		</div>
	)
}

export default LoginPage