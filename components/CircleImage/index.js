import styled from 'styled-components';

export const HeroImage = styled.img
`
`

export default function CircleImage ({
    src='/HeroImage.png',
}){
    return(
        <div>
            <HeroImage src={src} width='400'/>
        </div>
    )
}