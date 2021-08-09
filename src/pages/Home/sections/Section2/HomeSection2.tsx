import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import styled from 'styled-components';
import { CSS } from '../../../../static/cssStatic';

const SectionTitle = styled.h1`
    padding:30px;
    font-family: 'Ubuntu';
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1.425px;
    color: ${CSS.black};
`;
const GridContainer = styled.div`
    display: grid;
    margin: auto;
    margin-bottom: 100px;
    width: 1149px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    @media(max-width:1209px){
        grid-template-columns: 1fr;
        width: 110%;
    }
`;

const GridItem = styled.div<{itemHeight?: string}>`
    box-sizing: border-box;
    margin: auto;  
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    height: ${props => props.itemHeight || "160px;"};
    width: 558px;
    text-align: left;
    background-color: white;
    box-shadow:0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    img{
        width:20px;
        height: 20px;
        line-height: 20px;
        margin: 0px;
        margin: 30px 0px 0px 20px;
    }

    @media(max-width:588px){
        width: 90%;
        height: auto;
        padding: 0px 15px 30px 0px;
    }
`;

const GridItemTitle = styled.h2`
    margin: 30px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.675px;
    text-transform: uppercase;
    color: ${CSS.black};
`;

const GridItemParagraph = styled.p`
    width: 90%;
    margin: 16px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.6px;
    color: ${CSS.gray};
`;

function HomeSection2(): JSX.Element {
    return (
        <Section>
            <SectionTitle>O naszej aplikacji</SectionTitle>
            <GridContainer>
                <GridItem>
                    <div><img src="/assets/svg/checkIcon.svg" ></img></div>
                    <div>
                        <GridItemTitle>Zaadoptuj idealnego zwierzaka</GridItemTitle>
                        <GridItemParagraph>Dzięki Łappce dużo łatwiej zaadaptujesz samotne zwierzaki. 
                        Znalezienie i wybranie Twojego nowego pupila są teraz jeszcze 
                        łatwiejsze – możesz to zrobić nie wychodząc z domu!</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem>
                    <div><img src="/assets/svg/checkIcon.svg" ></img></div>
                    <div>
                        <GridItemTitle>Wybierz idealny wolontariat</GridItemTitle>
                        <GridItemParagraph>Korzystając z Łappki wejdziesz do społeczności osób, 
                        którym nie jest obojętny los zwierzaków. Razem możemy 
                        pomóc jeszcze większej ilości opuszczonych zwierzaków.</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="180px">
                    <div><img src="/assets/svg/checkIcon.svg" ></img></div>
                    <div>
                        <GridItemTitle>Zadbaj o swojego pupila</GridItemTitle>
                        <GridItemParagraph>Oprócz adoptowania samotnych zwierząt, możesz również 
                        w niej prowadzić dokumentację medyczną swojego pupila i 
                        kontaktować się z innymi użytkownikami.</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="180px">
                    <div><img src="/assets/svg/checkIcon.svg" ></img></div>
                    <div>
                        <GridItemTitle>Odnajdź ukochaną zgubę</GridItemTitle>
                        <GridItemParagraph>Czy zdarzyło ci się kiedyś, że Twój ukochany pies albo kot 
                        uciekł lub zniknął? Niestety zdarza się to dość często. Dlatego 
                        postanowiliśmy wykorzystać działanie Łappki oraz życzliwość 
                        społeczności, do wspólnego rozwiązywania takich problemów!</GridItemParagraph>
                    </div>
                </GridItem>
            </GridContainer>
        </Section>
    )
}

export default HomeSection2
