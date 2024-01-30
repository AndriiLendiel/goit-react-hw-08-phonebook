import { FormWrapper, MainForm, SubWrapperForm, Title, FormLabel, FormInput, FormButton } from "utils/utils";
import { registrationAction } from "../../../service/auth-service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



const RegistrationPage = () => {

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
	const newUser = {
		name: e.target.elements.name.value,
		email: e.target.elements.email.value,
		password: e.target.elements.password.value
	}
registrationAction(newUser)
.then(() => {

toast.success(`user ${newUser.name} is registrated`)
console.log('created User')
navigate('/login')}
)
.catch((error) => {
	console.log(newUser)
	toast.error("Smth wrong")
	console.log(error)})

    }
    return (
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
    )
}

export default RegistrationPage