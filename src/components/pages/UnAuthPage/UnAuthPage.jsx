import { Title } from "../../../utils/utils"
import { BsTelephoneFill } from "react-icons/bs";
import { GiVibratingSmartphone } from "react-icons/gi";
import { AnAuthWrapper } from "./UnAuthPage.styled";
import {useSelector} from 'react-redux';
import {selectIsLoading} from '../../../redux/auth/auth-selectors'
import {Hourglass} from 'react-loader-spinner'
export const UnAuthPage = () => {
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
                    <AnAuthWrapper>
                    <Title>Please sign up for start 
                    <BsTelephoneFill style={{
                        marginLeft: 25,
                        color: 'green',
                    }}/>
                    </Title>
            
                    <GiVibratingSmartphone style={{
                        marginTop: '50px',
                        width: '500',
                        height: '500',
                        fill: '#2A6881',
                        opacity: '0.4',
                    }}/>
                    </AnAuthWrapper>
        }
</>




    )

}