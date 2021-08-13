import React, { ReactChild } from 'react'
import { Container, PanelWrapper } from './Panel.styled'
import Sidebar from './Sidebar/Sidebar'
import TitleBar from './TitleBar/TitleBar'

interface Props {
    title: string,
    child?: ReactChild
}

function Wrapper(props: Props): JSX.Element {
    return (
        <PanelWrapper>
            <Sidebar></Sidebar>
            <TitleBar title={props.title}></TitleBar>
            <Container>
                {props.child ?
                    props.child
                    :
                    <div>panel</div>}


            </Container>

        </PanelWrapper>
    )
}

export default Wrapper
