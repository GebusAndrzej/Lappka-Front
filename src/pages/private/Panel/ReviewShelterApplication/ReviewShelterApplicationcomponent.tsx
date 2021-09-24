import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { acceptShelterApplication, declineShelterApplication, fetchAllShelterApplications, fetchShelter, getAllShelterApplications, getShelter } from '../../../../features/shelters/shelterSlice';
import { showSnackbar } from '../../../components/Snackbar';

interface RouteParams {
    id: string
}

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
            {shelter?.name}

            <table>

                {id ?
                    // filtered by id
                    applications.filter(x => { return x.shelterId == id }).map(a => {
                        return <tr key={a.id}>
                            <td>
                                {a.userId} {'->'} {a.shelterId} {a.status}

                            </td>
                            <td>
                                <button onClick={() => accept(a.id)}>Zaakceptuj</button>
                            </td>
                            <td>
                                <button onClick={() => decline(a.id)}>Odrzuć</button>
                            </td>
                        </tr>
                    })
                    :
                    // non filtered
                    applications.map(a => {
                        return <tr key={a.id}>
                            <td>
                                {a.userId} {'->'} {a.shelterId} {a.status}

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


            </table>
        </div>
    )
}

export default ReviewShelterApplicationcomponent
