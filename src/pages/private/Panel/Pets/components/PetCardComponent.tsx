import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Pet } from '../../../../../model/Model';

const Card = styled.div`
    display:flex;
    flex-direction: column;
    min-width: 90%;
    max-width: 300px;
    width: clamp(100px, 381px 400px);
    min-height:300px;
    background-color: white;
    border-radius:5px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.1);

    @media (min-width: ${props => props.theme.break.mobile}){
        min-width:300px;
    }
`;

const Image = styled.img`
    width:100%;
    /* max-width:333px; */
    height:250px;
    border-radius: 5px 5px 0 0 ;
    user-select:none;
`

const Info = styled.div`
    padding:15px;

    h3{
        margin:0px;
        margin-bottom: 15px;
    }
    p{
        margin:0;
    }
`;

const BottomBar = styled.div`
    width:100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
`

const EditButton = styled(Link)`
    width:100px;
    height:40px;
    background-color: white;
    border:none;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 5px;
    user-select:none;
    cursor: pointer;
    text-decoration:none;
    color:${props => props.theme.colors.gray};
    display:flex;
    justify-content: center;
    align-items: center;

    :active{
        background-color: ${props => props.theme.colors.bg1};
    }
`

interface Props {
    pet: Pet;
}

function PetCardComponent(props: Props): JSX.Element {
    const date = new Date(props.pet.birthDay)

    return (
        <Card>
            <Image src={"http://10.10.10.38:5003/api/files/" + props.pet.mainPhotoId + "?bucketName=0"} />
            <Info>
                <h3>{props.pet.name}</h3>
                <p>{date.toISOString().split('T')[0]}</p>
                {/* <p>{props.pet.id}</p> */}
                <BottomBar>

                    <EditButton to={"pets/edit/" + props.pet.id}>Edytuj</EditButton>
                </BottomBar>
            </Info>
        </Card>
    )
}

export default PetCardComponent
