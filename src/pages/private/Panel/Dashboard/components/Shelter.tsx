import React from 'react'
import { ShelterTitle, ShelterWrapper, Location, LocationText, ShelterSummaryBox } from './Shelter.styled'
import { ReactComponent as SVG_Location } from '../../../../../assets/svg/location.svg';
import { Title, Value } from '../Dashboard.styled';


function Shelter(): JSX.Element {
    return (
        <ShelterWrapper>
            <figure>
                <img src="/assets/mock/shelterlogo.png" />
            </figure>
            <ShelterTitle>Psiaki Adopciaki z Psiej Wioski</ShelterTitle>

            <Location>
                <SVG_Location />
                <LocationText>
                    Rzeszów, ul. Krakowska 12
                </LocationText>
            </Location>

            <ShelterSummaryBox>
                <div>
                    <Title variant="light">Szuka właściciela</Title>
                    <Value variant="light">34</Value>
                </div>
                <div>
                    <Title variant="light">Z właścicielem</Title>
                    <Value variant="light">643</Value>
                </div>
            </ShelterSummaryBox>

        </ShelterWrapper>
    )
}

export default Shelter
