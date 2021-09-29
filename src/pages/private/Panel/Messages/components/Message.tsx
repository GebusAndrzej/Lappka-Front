import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as SVG_Messages } from '../../../../../assets/svg/message.svg';


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
    position: relative;
    margin-top: 25px;
    min-width:20px;
    min-height:20px;
    padding:14px;
    max-width: 80%;
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
export const DateField = styled.div<{ type: "self" | "other" }>`
    font-size: 70%;
    position: absolute;
    bottom:0px;
    
    ${(props) => props.type == "self" && css`
    
    `}
    ${(props) => props.type == "other" && css`
        right:10px;
    `}
`;

interface Props {
    type: "self" | "other";
    message: string,
    prev?: "self" | "other";
    date?: Date
}

function Message(props: Props): JSX.Element {

    const date = props.date ? new Date(props.date) : null;

    return (
        <MsgWrapper type={props.type}>
            {!(props.prev != undefined) ?
                <Avatar>
                    <SVG_Messages />
                </Avatar>
                : <Avatar></Avatar>}
            <Msg type={props.type}>
                {props.message}
                <DateField type={props.type}>
                    {date ?
                        date.toLocaleString()
                        :
                        null
                    }
                </DateField>
            </Msg>
        </MsgWrapper>
    )
}

export default Message