import React from 'react'
import styled, { css } from 'styled-components'

const MsgWrapper = styled.div<{ type: "self" | "other" }>`
    width:100%;
    min-height:10px;
    display: flex;
    flex-direction: row;
    position: relative;

    ${(props) => props.type == "self" && css`
        /* justify-content: flex-end; */
        flex-direction: row-reverse;
    `}
    ${(props) => props.type == "other" && css`
        justify-content: flex-start;
    `}
`

const Avatar = styled.figure`
    width:60px;
    height:60px;
    margin:0;
    display:flex;
    align-items: center;
    justify-content: center;

    img {
        max-width:60px;
        height: 60px;
    }

    @media (max-width: ${props => props.theme.break.mobile}) {
        display: none;
    }
`

const Msg = styled.div<{ type: "self" | "other" }>`
    margin-top: 25px;
    min-width:20px;
    min-height:20px;
    padding:14px;
    max-width: 60%;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* padding-bottom: 25px; */

    ${(props) => props.type == "self" && css`
        background-color: ${props => props.theme.colors.green};
        border-radius: 20px 0 20px 20px;
        color:white;
        /* text-align:right; */
    `}
    ${(props) => props.type == "other" && css`
        background-color: #EBEEF1;
        border-radius: 0px 20px 20px 20px;

    `}
`

interface Props {
    type: "self" | "other";
    message: string
}

function Message(props: Props): JSX.Element {
    return (
        <MsgWrapper type={props.type}>
            <Avatar>
                <img src="/assets/Homepage/avatars/avatar1.webp" />
            </Avatar>
            <Msg type={props.type}>
                {props.message}
            </Msg>
        </MsgWrapper>
    )
}

export default Message