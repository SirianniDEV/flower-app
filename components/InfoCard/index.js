import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div
`
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    color: #000000;
    background: #f5f5f5;
    margin: 0px;
    padding: 25px;
    // z-index: -1;
`
export const TextBox = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 10px 10px;
    font-size; 16px;
    gap: 5px;
`
export const Wrapper = styled.div
`
`
export const Needs = styled.div 
`
    display: flex;

`

export const Care = styled.p
`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

`
export const Icon = styled(Image)``

export default function Card({
    descp="Description here",
    soil="blah blah blah",
    height="blah blah blah",
    sun="sun lvl",
    water="water lvl",
    care="care lvl",

}) {

    return(
        <Container>
            <TextBox>
                <Wrapper>
                <p>{descp}</p>
                <Needs>
                    <p><strong>Soil Needs: </strong>{soil}</p>
                    <p><strong>Height: </strong>{height}</p>
                </Needs>
                <Care>
                    <div>
                    <Icon src={"/sunlight.svg"} width='50' height='50'/>
                    <p>{sun}</p>
                    </div>

                    <div>
                    <Icon src={"/wet.svg"} width='50' height='50'/>
                    <p>{water}</p>
                    </div>

                    <div>
                    <Icon src={"/care.svg"} width='50' height='50'/>
                    <p>{care}</p>
                   </div>

                </Care>
                </Wrapper>
            </TextBox>
        </Container>
    )
}