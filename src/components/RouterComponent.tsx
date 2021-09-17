import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Roles } from '../model/Const'
import Dashboard from '../pages/private/Panel/Dashboard/Dashboard'
import MessagesComponent from '../pages/private/Panel/Messages/MessagesComponent'
import AddPet from '../pages/private/Panel/Pets/AddPet/AddPet'
import AllPets from '../pages/private/Panel/Pets/AllPets/AllPets'
import ReviewShelterApplicationcomponent from '../pages/private/Panel/ReviewShelterApplication/ReviewShelterApplicationcomponent'
import ShelterApply from '../pages/private/Panel/ShelterApply/ShelterApply'
import AddShelter from '../pages/private/Panel/Shelters/AddShelter/AddShelter'
import EditShelter from '../pages/private/Panel/Shelters/EditShelter/EditShelter'
import Shelters from '../pages/private/Panel/Shelters/Shelters'
import Wrapper from '../pages/private/Panel/Wrapper'
import Home from '../pages/public/Home/Home'
import LoginPage from '../pages/public/loginPage/LoginPage'
import PrivateRoute from './PrivateRoute'


function RouterComponent(): JSX.Element {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginPage} />

                {/* Shelter Apply */}
                <PrivateRoute path="/shelter-apply"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Dołącz do schroniska" child={<ShelterApply />} />}

                />

                {/* Dashboard */}
                <PrivateRoute path="/dashboard"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Dashboard" child={<Dashboard />} />}

                />

                {/* Pets */}
                <PrivateRoute path="/pets"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Karty Zwierząt" child={<AllPets />} />}

                />
                <PrivateRoute path="/pets/add-pet"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Dodaj Kartę" subTitle="Dodaj zwierzaka" child={<AddPet />} />}

                />

                {/* Volounteering */}
                <PrivateRoute path="/volounteering"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Wolontariat" />}

                />

                {/* Messages */}
                <PrivateRoute path="/messages"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Wiadomości" child={<MessagesComponent />} />}

                />
                <PrivateRoute path="/messages/:id"
                    exact
                    role={Roles.user}
                    component={() => <Wrapper title="Wiadomości" child={<MessagesComponent />} />}

                />


                {/*  ==================== Admin Routes ==================== */}
                {/* Shelters */}
                <PrivateRoute path="/shelters"
                    exact role={Roles.admin}
                    component={() => <Wrapper title="Schroniska" child={<Shelters />} />}
                />
                <PrivateRoute path="/shelters/add"
                    exact
                    role={Roles.admin}
                    component={() => <Wrapper title="Schroniska" child={<AddShelter />} subTitle="Dodaj schronisko" />}
                />
                <PrivateRoute path="/shelters/edit/:id"
                    exact
                    role={Roles.admin}
                    component={() => <Wrapper title="Schroniska" child={<EditShelter />} subTitle="Edytuj schronisko" />}
                />
                <PrivateRoute path="/applications/"
                    exact
                    role={Roles.admin}
                    component={() => <Wrapper title="Schroniska" child={<ReviewShelterApplicationcomponent />} subTitle="Zobacz Aplikacje" />}

                />
                <PrivateRoute path="/applications/:id"
                    exact
                    role={Roles.admin}
                    component={() => <Wrapper title="Schroniska" child={<ReviewShelterApplicationcomponent />} subTitle="Zobacz Aplikacje" />}

                />




                <Route path="/" component={Home} />

            </Switch>
        </BrowserRouter>
    )
}

export default RouterComponent
