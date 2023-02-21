import styled from 'styled-components';

export const HeroImage = styled.img
`
`

export default function CircleImage ({
    src='/HeroImageLeft.png',
}){
    return(
        <div>
            <HeroImage src={src} height='700'/>
        </div>
    )
}