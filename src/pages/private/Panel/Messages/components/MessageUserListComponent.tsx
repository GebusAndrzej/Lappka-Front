import React from 'react'
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components'
// import { defaultTheme } from '../../../../../static/cssStatic';

const Wrapper = styled.div<{ status?: "mobile-hidden" | "normal" }>`
    display:flex;
    flex-direction: column;
    gap:5px;
    margin-right: 10px;
    max-height:80vh;
    overflow-y: auto;
    overflow-x: hidden;
    direction: rtl;
    padding-bottom: 10px;
    box-sizing: border-box;
    user-select: none;

    @media (max-width: ${props => props.theme.break.tablet}){

        ${(props) => props.status == "mobile-hidden" && css`
            display:none;
        ` }
    } 

    &::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        /* background: #f1f1f1;  */
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        border-radius: 15px;
        /* background: ${props => props.theme.colors.gray};  */
        background-color: #cecece;
        opacity: .5;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.green}; 
    }
`;

export const ChatItem = styled.div`
    direction: ltr;
    position: relative;
    max-width:100%;
    height:96px;
    display: grid;
    grid-template-columns: 55px 1fr 40px;
    border-radius: 20px;
    box-sizing:border-box;
    padding:5px;
    cursor: pointer;
    margin:0px 3px;

    figure{
        width: 56px;
        margin:0;
        display:flex;
        justify-content: center;
        align-items: center;
        /* aspect-ratio: 1/1; */
        img {
            max-width: 55px;
            max-height: 55px;
        }
    }
    :hover{
        box-shadow: 0px 2px 4px rgba(0,0,0,.25);
    }
    &.active{
        background-color:white;
    }
`;
const Preview = styled.div`
    padding-left: 10px;
    display:flex;
    flex-direction: column;
    grid-template-rows: 1fr 1fr;
    align-content: center;
    justify-content: center;
`;
const User = styled.span`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    /* padding-bottom:10px; */
    color: ${props => props.theme.colors.gray};
`;
const Message = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    color: #616161;
    opacity: 0.8;
    padding-top:5px;
`;

const Meta = styled.div`
    display:flex;
    flex-direction: column;
    grid-template-rows: 1fr 1fr;
    align-items: flex-end;
    justify-content: center;
`;

export const Badge = styled.div`
    background-color: ${props => props.theme.colors.lightgreen};
    border-radius: 50%;
    aspect-ratio: 1/1;
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size: 12px;
    padding: 4px;
`;

const Time = styled.span`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    /* display: flex; */
    /* align-items: flex-end; */
    /* text-align: right; */
    padding-bottom: 5px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.gray};
`;

interface Props {
    // activeUser: string;
    // changeUser: (x: string) => void;
    state: "mobile-hidden" | "normal"
}
interface RouteParams {
    id?: string
}

function MessageUserListComponent(props: Props & RouteParams): JSX.Element {
    const history = useHistory()
    const { id } = useParams<RouteParams>();


    function handleClick(x: string) {
        // props.changeUser(x)
        // const width = defaultTheme.break.tablet
        history.push(`/messages/${x}`)
    }


    return (
        <Wrapper status={props.state}>
            {[1, 2, 3, 0, 4, 5, 6, 7, 8].map(x => {
                return (
                    <ChatItem key={x} className={id == `${x}` ? "active" : ""} onClick={() => handleClick(`${x}`)}>
                        <figure>
                            <img src="/assets/Homepage/avatars/avatar1.webp" />
                        </figure>
                        <Preview>
                            <User>{"Janusz".substr(0, 20)}</User>
                            <Message>{`Cześć ${x}`.substr(0, 32)}</Message>
                        </Preview>
                        <Meta>
                            <Time>08:{x}0</Time>
                            {x % 3 == 0 ?
                                false
                                :
                                <Badge>{x}{x % 2 == 0 ? "+" : ""}</Badge>
                            }
                        </Meta>
                    </ChatItem>)
            })}
        </Wrapper>
    )
}

export default MessageUserListComponent
