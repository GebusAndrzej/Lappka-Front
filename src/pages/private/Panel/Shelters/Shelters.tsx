import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchShelters, getShelters, setShelter } from '../../../../features/shelters/shelterSlice'
import { PetTable } from '../Dashboard/components/PetList.styled'
import { Bar, ItemWrapper, Title } from '../Dashboard/Dashboard.styled'

import { ReactComponent as SVG_Edit } from '../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../assets/svg/delete.svg';
import { Shelter } from '../../../../model/Shelter'
import { useHistory } from 'react-router'
import { Icon } from './Shelters.styled'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Confirmation = ({ onAccept, component, confirmationText }: any) => {
    const [isShowing, setIsShowing] = useState(false)
    const handleShowModal = () => {
        setIsShowing(true)
    }
    return (<> {component({ handleShowModal })} <Dialog
        open={isShowing}
        keepMounted
        onClose={() => setIsShowing(false)}
        aria-labelledby="alert-dialog-confirm-delete"
        aria-describedby="alert-dialog-slide-confirm-delete"
    >
        <DialogTitle id="alert-dialog-slide-title">{"Usunąć?"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                {confirmationText}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setIsShowing(false)} color="primary">
                Disagree
            </Button>
            <Button onClick={() => onAccept()} color="primary">
                Agree
            </Button>
        </DialogActions>
    </Dialog> </>)
}

function Shelters(): JSX.Element {
    const shelters = useAppSelector(getShelters)
    const dispatch = useAppDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchShelters())
    }, [])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function edit(shelter: Shelter) {
        // dispatch(setShelter(shelter))
        history.push(`/shelters/edit/${shelter.id}`)
    }

    return (
        <>

            <Bar variant="full-width">
                <ItemWrapper variant="full-width">
                    <Title>Schroniska</Title>


                    <PetTable>
                        <thead>
                            <tr>
                                <th>Nazwa</th>
                                <th>email</th>
                                <th>Ulica</th>
                                <th>Miasto</th>
                                <th>Numer</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shelters.map(x => {
                                    return (
                                        <tr key={x.id}>
                                            <td>{x.name}</td>
                                            <td>{x.email}</td>
                                            <td>{x.address.street}</td>
                                            <td>{x.address.city}</td>
                                            <td>{x.phoneNumber}</td>
                                            <td>
                                                <Icon onClick={() => edit(x)} color="green">
                                                    <SVG_Edit />
                                                </Icon>
                                                <Confirmation confirmationText={"Usunąć " + x.name} onAccept={() => (console.log("usuwanie"))} component={({ handleShowModal }: any) =>
                                                    <Icon color="red" onClick={handleShowModal}>
                                                        <SVG_Delete />
                                                    </Icon>
                                                } />

                                                {/* <Link to={'/shelters/edit/' + x.id}> */}
                                                {/* </Link> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </PetTable>
                    <Bar variant="date">
                        <Link to="/shelters/add" >
                            <Button>Dodaj schronisko</Button>
                        </Link>
                    </Bar>
                </ItemWrapper>
            </Bar>
        </>
    )
}

export default Shelters
