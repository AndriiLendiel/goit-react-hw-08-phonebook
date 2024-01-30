import { Title } from "../../../utils/utils"
import { BsTelephoneFill } from "react-icons/bs";
import { GiVibratingSmartphone } from "react-icons/gi";
import { AnAuthWrapper } from "./UnAuthPage.styled";

export const UnAuthPage = () => {
    return (
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

    )

}