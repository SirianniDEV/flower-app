import styled from 'styled-components';
import img from '../../public/PlacerPhoto.png';

export const Container = styled.div
`
    display:flex;
    justify-content:flex-start;
    align-items: flex-end;
    border-radius: 10px;
    height: 200px;
    width: 350px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    color: #F5F5F5;
`
export const Image = styled.div
`
    background-image: url(${props => props.src});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 10px;
`
export const ImageBox = styled.div
`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 3px;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(191, 191, 191, 0) 10.82%, rgba(58, 58, 58, 0.75) 85.59%);
    border-radius: 10px;
`
export const TextBox = styled.div
`
    display: flex;
    background: #f5f5f5;
    border-radius: 0px 0px 10px 10px;
`

export const Title = styled.p
`
    font-size: 30px;
    margin: 0px;

`
export const SubTitle = styled.p
`
    font-size: 20px;
    font-style: italic;
    margin: 0px;

`

export default function Card({
    Name="Flower name",
    Type="Flower Type",
    src = "/PlacerPhoto.png",
}) {

    return(
        <Image src={src}>
        <Container >
            <ImageBox>
                <Title> {Name}</Title>
                <SubTitle>{Type}</SubTitle>
            </ImageBox> 
        </Container>
        </Image>
    )
}