import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { defaultTheme } from '../../../../../static/cssStatic';
import { ColorChange, GridContainer, GridItem, GridItemParagraph, SectionTitle } from './HomeSection3.styled'

function HomeSection3(): JSX.Element {
    return (
        <Section itemBackground={defaultTheme.colors.bg2}>
            <SectionTitle>Dlaczego Ł<ColorChange>app</ColorChange>ka?</SectionTitle>
            <GridContainer>
                <GridItem>
                    <div><img src="/assets/svg/section3icons/img1.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Wyszukiwanie zwierzaków w oparciu o Twoje preferencje co do ich typów (pies, kot, świnka morska itd.) oraz w wybranej lokalizacji (położenie schroniska względem Ciebie itp.)</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem>
                    <div><img src="/assets/svg/section3icons/img2.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Podstawowe informacje na jego temat wszystkich zwierzaków, jak np.: odległość do schroniska, w którym przebywa, gatunek, maść, wiek, płeć, status sterylizacji oraz informacje o usposobieniu zwierzęcia)</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem>
                    <div><img src="/assets/svg/section3icons/img3.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Możliwość udostępniania profili zwierzaków w mediach społecznościowych</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem>
                    <div><img src="/assets/svg/section3icons/img4.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Cyfrowa książeczka zdrowia pupila, w której możesz aktywnie śledzić stan szczepień, wizyt u weterynarza, przepisywanych lekarstw, odbytych operacji oraz innych kwestii związanych ze zdrowiem pupila</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="81px">
                    <div><img src="/assets/svg/section3icons/img5.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Możliwość wyboru różnych wariantów wolontariatu, związanego z pomocą dla schronisk i zwierzaków</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="81px">
                    <div><img src="/assets/svg/section3icons/img6.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Zgłaszanie zaginionych pupili, z możliwością korespondowania między członkami społeczności oraz możliwością udostępniania lokalizacji</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="81px">
                    <div><img src="/assets/svg/section3icons/img7.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Raportowanie błąkających się zwierząt wraz z możliwością udostępniania ich lokalizacji w aplikacji (informowanie schronisk i służb zajmujących się opuszczonymi zwierzętami)</GridItemParagraph>
                    </div>
                </GridItem>
                <GridItem itemHeight="81px">
                    <div><img src="/assets/svg/section3icons/img8.svg" ></img></div>
                    <div>
                        <GridItemParagraph>Możliwość zapisywania przeglądanych profili w kategorii „Ulubione”, tak aby w wygodny sposób przeglądać je później</GridItemParagraph>
                    </div>
                </GridItem>
            </GridContainer>
        </Section>
    )
}

export default HomeSection3
