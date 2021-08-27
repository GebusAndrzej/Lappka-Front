import React from 'react'

import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';


const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    state?: string
}

function LoadingComponent(props: Props): JSX.Element {
    if (props.state == "loading")
        return (<Wrapper><CircularProgress></CircularProgress></Wrapper>)
    else if (props.state == "idle")
        return (<Wrapper>Brak połączenia z serwerem</Wrapper>)
    return (
        <Wrapper>
            <CircularProgress />
        </Wrapper>
    )
}

export default LoadingComponent
