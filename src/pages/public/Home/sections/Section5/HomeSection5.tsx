import React from 'react'
import ReactCardCarousel from 'react-card-carousel'
import { Section } from '../../components/HomeSection.styled'
import { Age, Card, Container, Person } from './HomeSection5.styled'
import { CSS } from '../../../../../static/cssStatic'



function HomeSection5(): JSX.Element {
    return (
        <Section itemBackground={CSS.bg2}>
            <Container>
                <ReactCardCarousel autoplay={true} autoplay_speed={6000} alignment="vertical">
                    {
                        [1, 2, 3].map(x => {
                            return (
                                <Card key={x}>
                                    Dzięki Łappce bardzo szybko odnalazłam moją ukochaną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąc, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut później już jechałyśmy razem do domu. Cudowna aplikacja!
                                    <Person>Malwina</Person>
                                    <Age>32 lata</Age>
                                </Card>
                            )
                        })
                    }
                </ReactCardCarousel>
            </Container>
        </Section>

    )
}

export default HomeSection5
