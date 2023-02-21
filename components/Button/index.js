import styled from 'styled-components';

export const ButtonStyle = styled.button
`
    background-color: #C6589D;
    border-radius: 15px;
    font-family: 'Inter';
    color: #f5f5f5;
    padding: 15px;
    margin: ${props=>props.margin||"0px"};
    font-size: 20px;
    border: none;
    box-shadow: 3px 7px 8px rgba(0, 0, 0, 0.25);
    &:hover {
    background-color: #8F963E;
  }
`

export default function Button ({
    txt='TEXT',
    margin = '0px'
}){
    return( 
    <div>
        <ButtonStyle margin={margin}> {txt} </ButtonStyle>
    </div>
    )
}