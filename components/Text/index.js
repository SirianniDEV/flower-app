import styled from 'styled-components';

export const AppText = styled.p
`
font-family: 'Inter';
font-size: ${props=>props.fs||"13px"};
font-weight: ${props=>props.fw||'400px'};
text-align: ${props=>props.align||"left"};
padding:${props=>props.padding||"0px"};
margin: 0px;
position:${props=>props.position||"none"};
`

export default function Text ({
    txt='Text',
    size='16px',
    weight='400',
    align='left',
    padding='0px',
    position='none',
}){
    return(
        <>
            <AppText position={position} align={align} fs={size} fw={weight} padding={padding}>{txt}</AppText>
        </>
    )
}