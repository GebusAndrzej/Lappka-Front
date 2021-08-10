import React from 'react'
import ReactCardCarousel from 'react-card-carousel'
import { Section } from '../../components/HomeSection.styled'
import { Age, Avatar, Card, Container, Person } from './HomeSection5.styled'
import { defaultTheme } from '../../../../../static/cssStatic'



function HomeSection5(): JSX.Element {
    return (
        <Section itemBackground={defaultTheme.colors.bg2}>
            <Container>
                <Avatar position="1" src="/assets/Homepage/avatars/avatar1.webp" />
                <Avatar position="2" src="/assets/Homepage/avatars/avatar2.webp" />
                <Avatar position="3" src="/assets/Homepage/avatars/avatar3.webp" />
                <Avatar position="4" src="/assets/Homepage/avatars/avatar4.webp" />
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
