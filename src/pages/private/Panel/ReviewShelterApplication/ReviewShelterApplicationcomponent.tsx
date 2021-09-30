import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { acceptShelterApplication, declineShelterApplication, fetchAllShelterApplications, fetchShelter, getAllShelterApplications, getShelter } from '../../../../features/shelters/shelterSlice';
import { showSnackbar } from '../../../components/Snackbar';

interface RouteParams {
    id: string
}

const Item = styled.td`
    padding:15px;
`;
const Table = styled.table`
    border-collapse: collapse;
    width:100%;

    thead tr {
        background-color: ${props => props.theme.colors.green};
        td {
            padding:5px;
            color:white;
            text-align:center;
        }
    }
    tr{
        td{
            text-align:center;
        }
    }
`
const Button = styled.td<{ variant: "green" | "red" }>`
    padding:15px;
    border-radius: 5px;
    color:white;

    ${(props) => props.variant == "green" && css`
        background-color: ${props => props.theme.colors.green};
    `};
    ${(props) => props.variant == "red" && css`
        background-color: #9f0505;
    `};
`;

function ReviewShelterApplicationcomponent(): JSX.Element {
    const dispatch = useAppDispatch()
    const shelter = useAppSelector(getShelter)
    const applications = useAppSelector(getAllShelterApplications)
    const { enqueueSnackbar } = useSnackbar()

    const { id } = useParams<RouteParams>() ?? null

    async function initialize() {
        id ? dispatch(fetchShelter(id)) : false
        dispatch(fetchAllShelterApplications())
    }

    useEffect(() => {
        initialize()
    }, [id]);

    function accept(id: string) {
        dispatch(acceptShelterApplication(id))
            .then((res) => {
                if (`${res.payload}`.match(/^2..$/)) {
                    showSnackbar(enqueueSnackbar, null, "Zaakceptowano aplikację", "success")
                }
                else {
                    showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
                }
                initialize()
            })
    }
    function decline(id: string) {
        dispatch(declineShelterApplication(id))
            .then((res) => {
                if (`${res.payload}`.match(/^2..$/)) {
                    showSnackbar(enqueueSnackbar, null, "Odrzucono aplikację", "success")
                }
                else {
                    showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
                }
                initialize()
            })
    }

    if (!applications)
        return <div>Brak aplikacji</div>

    return (
        <div>
            {shelter?.name ? `Schronisko ${shelter.name}` : null}

            <Table>
                <thead>
                    <tr>
                        <td>Użytkownik</td>
                        <td></td>
                        <td>Schronisko</td>
                        <td>Status</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                {id ?
                    // filtered by id
                    applications.filter(x => { return x.shelter.id == id }).map(a => {
                        return <tr key={a.id}>
                            <Item>
                                {a.user.firstName} {a.user.lastName}
                            </Item>
                            <td>
                                {'->'}
                            </td>
                            <Item>
                                {a.shelter.name}
                            </Item>
                            <td>
                                {a.status == 0 ? "Oczekujące" : (a.status == 1 ? "Zaakceptowane" : "Odrzucone")}
                            </td>
                            <td>
                                <Button variant="green" onClick={() => accept(a.id)}>Zaakceptuj</Button>
                            </td>
                            <td>
                                <Button variant="red" onClick={() => decline(a.id)}>Odrzuć</Button>
                            </td>
                        </tr>
                    })
                    :
                    // non filtered
                    applications.map(a => {
                        return <tr key={a.id}>
                            <td>
                                {a.user.firstName}
                            </td>
                            <td>
                                {'->'}
                            </td>
                            <td>
                                {a.shelter.name}
                            </td>
                            <td>
                                {a.status == 0 ? "Oczekujące" : (a.status == 1 ? "Zaakceptowane" : "Odrzucone")}
                            </td>
                            <td>
                                <button onClick={() => accept(a.id)}>Zaakceptuj</button>
                            </td>
                            <td>
                                <button onClick={() => decline(a.id)}>Odrzuć</button>
                            </td>
                        </tr>
                    })
                }


            </Table>
        </div>
    )
}

export default ReviewShelterApplicationcomponent
