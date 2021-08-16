import React, { FunctionComponent } from 'react'
import { IconFigure, ItemWrapper, Title, Value } from '../Dashboard.styled'

interface Props {
    svg: FunctionComponent;
    title: string;
    value: string;
}

function FirstRowItem(props: Props): JSX.Element {
    return (
        <ItemWrapper variant="first-row">
            <IconFigure>
                <props.svg />
            </IconFigure>
            <div>
                <Title>{props.title}</Title>
                <Value>{props.value}</Value>
            </div>
        </ItemWrapper>
    )
}

export default FirstRowItem