import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../../app/hooks';
import { getUserActiveShelterState } from '../../../../features/auth/authSlice';

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

function NoShelterComponent(): JSX.Element {
    const userShelterState = useAppSelector(getUserActiveShelterState)
    if (userShelterState == "loading")
        return (<Wrapper><CircularProgress></CircularProgress></Wrapper>)
    else if (userShelterState == "idle")
        return (<Wrapper><h2>Najpierw dołącz do schroniska</h2><Link to="/shelter-apply">Zobacz listę schronisk</Link></Wrapper>)
    return (
        <Wrapper><h2>Najpierw dołącz do schroniska</h2><Link to="/shelter-apply">Zobacz listę schronisk</Link></Wrapper>
    )
}

export default NoShelterComponent
