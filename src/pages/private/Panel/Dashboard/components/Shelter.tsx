import React from 'react'
import { ShelterTitle, ShelterWrapper, Location, LocationText, ShelterSummaryBox } from './Shelter.styled'
import { ReactComponent as SVG_Location } from '../../../../../assets/svg/location.svg';
import { Title, Value } from '../Dashboard.styled';
import { useAppSelector } from '../../../../../app/hooks';
import { getUserActiveShelter } from '../../../../../features/auth/authSlice';
import { baseurl } from '../../../../../app/axiosConfig';


function Shelter(): JSX.Element {
    const userShelter = useAppSelector(getUserActiveShelter)
    return (
        <ShelterWrapper>
            <figure>
                {userShelter?.photoId == "00000000-0000-0000-0000-000000000000" ?
                    <img src="/assets/mock/shelterlogo.png" />
                    :
                    <img src={`${baseurl}:5003/api/files/${userShelter?.photoId}?bucketName=2`} />
                }
            </figure>
            <ShelterTitle>{userShelter?.name}</ShelterTitle>

            <Location>
                <SVG_Location />
                <LocationText>
                    {userShelter?.address.city} ul.{userShelter?.address.street}
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
