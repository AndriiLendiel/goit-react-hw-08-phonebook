

import Filter from 'components/Filter';
import ContactList  from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import {selectIsLoading} from '../../redux/auth/auth-selectors';
import {useSelector} from 'react-redux';
import {Hourglass} from 'react-loader-spinner'
export const Main = () => {
    const isLoading = useSelector(selectIsLoading)
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
            <>
<ContactForm />
<Filter/> 
<ContactList/> 
</>
		}
 </>




    )
}