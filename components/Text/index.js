import styled from 'styled-components';

export const AppText = styled.p
`
font-family: 'Inter';
font-size: ${props=>props.fs||"13px"};
font-weight: ${props=>props.fw||'400px'};
text-align: left;
padding:${props=>props.padding||"0px"};
margin: 0px;
`

export default function Text ({
    txt='Text',
    size='16px',
    weight='400',
    padding='0px',
}){
    return(
        <>
            <AppText fs={size} fw={weight} padding={padding}>{txt}</AppText>
        </>
    )
}