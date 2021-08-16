import React from 'react'
import { Title, Value } from '../Dashboard.styled'
import { Container } from './ViewGraph.styled'

function ViewGraph(): JSX.Element {
    return (
        <Container>
            <Title>Liczby wyświetleń</Title>
            <Value>2 657</Value>
            <div>
                Graph
                <br />
                <br />
                <br />
                <br />
                <br />
                as
            </div>
        </Container>
    )
}

export default ViewGraph