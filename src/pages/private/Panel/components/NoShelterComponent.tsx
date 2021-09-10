import { CircularProgress } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../../../app/hooks';
import { getUserActiveShelterState } from '../../../../features/auth/authSlice';
import LoadingComponent from './LoadingComponent';

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

function NoShelterComponent() {
    const userShelterState = useAppSelector(getUserActiveShelterState)
    if (userShelterState == "loading")
        return (<Wrapper><CircularProgress></CircularProgress></Wrapper>)
    else if (userShelterState == "idle")
        return (<Wrapper>Najpierw dołącz do schroniska TUTAJ</Wrapper>)
    return (
        <Wrapper>
            <CircularProgress />
        </Wrapper>
    )
}

export default NoShelterComponent
