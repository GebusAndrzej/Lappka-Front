import React from 'react'
import { Bar, ItemWrapper, Title } from '../../Dashboard/Dashboard.styled'

function AddShelter(): JSX.Element {
    return (
        <Bar variant="full-width">
            <ItemWrapper variant="full-width">
                <Title>Doodaj schronisko</Title>

                <pre>
                    {JSON.parse("\"{\\n  \\\"name\\\": \\\"string\\\",\\n  \\\"address\\\": {\\n    \\\"street\\\": \\\"string\\\",\\n    \\\"zipCode\\\": \\\"string\\\",\\n    \\\"city\\\": \\\"string\\\"\\n  },\\n  \\\"geoLocation\\\": {\\n    \\\"latitude\\\": \\\"string\\\",\\n    \\\"longitude\\\": \\\"string\\\"\\n  },\\n  \\\"email\\\": \\\"string\\\",\\n  \\\"phoneNumber\\\": \\\"string\\\"\\n}\"")}
                </pre>

            </ItemWrapper>
        </Bar>
    )
}

export default AddShelter
