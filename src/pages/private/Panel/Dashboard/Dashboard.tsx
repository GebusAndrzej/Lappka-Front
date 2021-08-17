import React from 'react'
import { Bar, Grid, Item, ItemWrapper, Date } from './Dashboard.styled'

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


function Dashboard(): JSX.Element {
    return (
        <>
            <Grid>
                <Bar variant="date">
                    <ItemWrapper variant="date">
                        <Date type="date" />
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
                    <ViewGraph></ViewGraph>
                </Item>

                <Item variant="shelter">
                    <Shelter></Shelter>
                </Item>

                <Bar variant="third-row">
                    <ItemWrapper variant="third-row">
                        <PetList></PetList>
                    </ItemWrapper>
                </Bar>
            </Grid>



        </>
    )
}

export default Dashboard
