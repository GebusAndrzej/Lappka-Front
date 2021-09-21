import React, { useEffect, useState } from 'react'
import { Bar, Grid, Item, ItemWrapper } from './Dashboard.styled'

import { ReactComponent as SVG_Refresh } from '../../../../assets/svg/refresh.svg';
import { ReactComponent as SVG_Messages } from '../../../../assets/svg/message.svg';
import { ReactComponent as SVG_Pets } from '../../../../assets/svg/pets_symbol.svg';
import { ReactComponent as SVG_Volounteering } from '../../../../assets/svg/volounteering.svg';
import { ReactComponent as SVG_Stats } from '../../../../assets/svg/stats.svg';
import { ReactComponent as SVG_Callendar } from '../../../../assets/svg/callendar.svg';
import FirstRowItem from './components/FirstRowItem';
import ViewGraph from './components/ViewGraph';
import Shelter from './components/Shelter';
import PetList from './components/PetList';
// import { DateInput } from '../components/DateInput';
// import ReactDatePicker from 'react-datepicker';
import { CustomDatePicker } from '../components/Inputs.styled';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getTokenInfo, getUserActiveShelter, getUserInfo } from '../../../../features/auth/authSlice';
import NoShelterComponent from '../components/NoShelterComponent';
import { fetchShelterPets, getPets } from '../../../../features/pets/petsSlice';


function Dashboard(): JSX.Element {
    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useAppDispatch()
    const userShelter = useAppSelector(getUserActiveShelter)

    const tokenInfo = useAppSelector(getTokenInfo)
    const pets = useAppSelector(getPets)
    const userInfo = useAppSelector(getUserInfo)

    if (!userShelter) {
        return <NoShelterComponent></NoShelterComponent>
    }

    useEffect(() => {
        if (userShelter)
            dispatch(fetchShelterPets(userShelter.id))
    }, [])

    return (
        <>
            <Grid>
                <Bar variant="date">
                    <ItemWrapper variant="date">
                        <CustomDatePicker
                            placeholderText="Data"
                            dateFormat="dd-MM-yyyy"
                            selected={startDate}
                            // value={startDate}

                            onChange={(date: Date) => {
                                setStartDate(date)
                            }}
                        >
                        </CustomDatePicker>
                        <SVG_Callendar />
                    </ItemWrapper>
                    <ItemWrapper variant="date">
                        <SVG_Refresh />
                    </ItemWrapper>
                </Bar>

                <Bar variant="first-row">
                    <FirstRowItem svg={SVG_Pets} title="Karty zwierząt" value="374" />
                    <FirstRowItem svg={SVG_Stats} title="Obejrzenia" value="12" />
                    <FirstRowItem svg={SVG_Messages} title="Wiadomości" value="0" />
                    <FirstRowItem svg={SVG_Volounteering} title="Wolontariat" value="1359 zł" />
                </Bar>

                <Item variant="chart">
                    <pre>
                        {/* {JSON.stringify(userInfo, null, 2)} */}
                        {JSON.stringify(userShelter, null, 2)}
                    </pre>
                    <ViewGraph></ViewGraph>
                </Item>

                <Item variant="shelter">
                    <Shelter></Shelter>
                </Item>

                <Bar variant="full-width">
                    <ItemWrapper variant="full-width">
                        <PetList pets={pets}></PetList>
                    </ItemWrapper>
                </Bar>
            </Grid>



        </>
    )
}

export default Dashboard
