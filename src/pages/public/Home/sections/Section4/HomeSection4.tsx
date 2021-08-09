import React from 'react'
import { Section } from '../../components/HomeSection.styled'
import { BottomText, Grid, H2, IMG, Text, Wrapper } from './HomeSection4.styled'

function HomeSection4(): JSX.Element {
    return (
        <Section>
            <Grid>
                <Wrapper>
                    <H2>
                        Podaj swoją łapkę zwierzakom!
                    </H2>
                    <Text>
                        Misja, która przyświeca Łappce, związana jest z chęcią niesienia pomocy zwierzakom oraz całej społeczności, dla której losy bezbronnych zwierząt nie są obojętne. Osób chcących pomagać jest wiele. Czasami jednak warunki oraz indywidualne możliwości utrudniają adoptowanie pupili. Postanowiliśmy wyjść naprzeciw tym potrzebom oraz znacznie usprawnić całość procesu. Dzięki Łappce przygarnianie samotnych psów, kotów i innych zwierząt domowych będzie tak proste, jak kilka kliknięć w telefonie. Aplikacja ułatwi także znajdowanie zaginionych pupili, dzięki wymianie informacji pomiędzy członkami społeczności. Dodatkowo, każdy użytkownik będzie mógł w niej prowadzić kartę zdrowia swojego ukochanego zwierzaka.
                    </Text>
                    <BottomText>
                        Razem możemy pomóc jeszcze większej ilości zwierząt w potrzebie!
                    </BottomText>
                </Wrapper>

                <Wrapper>
                    <IMG src="/assets/png/Homepage/phones.png" />
                </Wrapper>

            </Grid>
        </Section>
    )
}

export default HomeSection4
