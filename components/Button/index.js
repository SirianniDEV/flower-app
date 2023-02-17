import styled from 'styled-components';

export const ButtonStyle = styled.button
`
    background-color: #C6589D;
    border-radius: 15px;
    color: #f5f5f5;
    padding: 20px;
    font-size: 20px;
    border: none;
    box-shadow: 3px 7px 8px rgba(0, 0, 0, 0.25);
    width: 150px;
    &:hover {
    background-color: #8F963E;
  }
`

export default function Button ({
    txt='TEXT'
}){
    return( 
    <div>
        <ButtonStyle> {txt} </ButtonStyle>
    </div>
    )
}