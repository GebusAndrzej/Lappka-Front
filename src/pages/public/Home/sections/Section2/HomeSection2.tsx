import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { SectionTitle, GridContainer, GridItem, GridItemParagraph, GridItemTitle } from './HomeSection2.styled';

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
