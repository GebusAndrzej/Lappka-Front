import React, { ReactChild, useState } from 'react'
import { Container, PanelWrapper } from './Panel.styled'
import Sidebar from './Sidebar/Sidebar'
import TitleBar from './TitleBar/TitleBar'

interface Props {
    title: string,
    child?: ReactChild
}

function Wrapper(props: Props): JSX.Element {

    const [MenuState, setMenuState] = useState("hidden")

    function MenuToggle() {
        if (MenuState == "hidden") {
            setMenuState("active")
        }
        else if (MenuState == "active") {
            setMenuState("hidden")
        }
    }

    return (
        <PanelWrapper>
            <Sidebar state={MenuState} toggle={MenuToggle}></Sidebar>
            <TitleBar toggle={MenuToggle} title={props.title}></TitleBar>
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
