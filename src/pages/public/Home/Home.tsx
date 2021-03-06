import React from 'react'
import Newsletter from './sections/Newsletter/NewsletterSection';
import HomeSection1 from './sections/Section1/HomeSection1';
import HomeSection2 from './sections/Section2/HomeSection2';
import HomeSection3 from './sections/Section3/HomeSection3';
import HomeSection4 from './sections/Section4/HomeSection4';
import HomeSection5 from './sections/Section5/HomeSection5';
import FooterSection from './sections/Footer/FooterSection';

function Home(): JSX.Element {
    return (
        <>
            <HomeSection1></HomeSection1>
            <HomeSection2></HomeSection2>
            <HomeSection3></HomeSection3>
            <HomeSection4></HomeSection4>
            <HomeSection5></HomeSection5>
            <Newsletter></Newsletter>
            <FooterSection></FooterSection>
        </>
    )
}

export default Home
