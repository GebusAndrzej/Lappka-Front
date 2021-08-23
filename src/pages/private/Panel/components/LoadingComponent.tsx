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

function LoadingComponent(): JSX.Element {
    return (
        <Wrapper>
            <CircularProgress />
        </Wrapper>
    )
}

export default LoadingComponent
