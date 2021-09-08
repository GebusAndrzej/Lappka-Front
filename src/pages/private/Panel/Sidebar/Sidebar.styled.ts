import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Fixed = styled.div`
    grid-area: sidebar;
    position: fixed;
    height:100vh;
    z-index:10;

    
    @media (max-width: ${props => props.theme.break.tablet}){
        transition-duration: .3s;

        &.hidden{
            right:-690px;
        }
        &.active{
            right: 0px;
        }
    }
`;

export const Nav = styled.nav`
    width: 290px;
    height:100%;
    background-color: white;
    display:flex;
    flex-direction: column;
    /* box-shadow: 0px 0px 5px rgba(0,0,0,.25); */
    z-index: 10;
    align-items: center;

    @media (max-width: ${props => props.theme.break.tablet}){
        background-color: ${props => props.theme.colors.green};
        border-radius: 30px 0 0 30px;
        border-radius: 30px 0 0 30px;
        width:70vw;
        max-width: 400px;
    }

    @media (max-width: ${props => props.theme.break.mobile}){
        background-color: ${props => props.theme.colors.green};
        width:90vw;
        max-width: 400px;
    }
`;

export const Logo = styled.img`
    max-width: 100%;

    @media (max-width: ${props => props.theme.break.tablet}){
        display:none;
    }
`;

export const ButtonBox = styled.div`
    max-width: 214px;
    display:flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 60px;

    & *:last-child{
        margin-top: auto;
    }

    @media (max-width: ${props => props.theme.break.tablet}) {
        margin-top: 50px;
    }
`;

export const Button = styled(NavLink)`
    display:block;
    width:214px;
    height:45px;
    align-items: center;
    text-align:center;
    text-decoration: none;
    color:${props => props.theme.colors.gray};
    border-radius: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.02em;
    display:flex;
    justify-content: flex-start;
    transition-duration:.3s;

    user-select:none;

    @media (max-width: ${props => props.theme.break.tablet}) {
        color:white;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    & figure {
        display:flex;
        align-items: center;
        justify-content: center;
        margin:10px;

        svg {
            path{
                fill:${props => props.theme.colors.gray};
                @media (max-width: ${props => props.theme.break.tablet}) {
                    fill:white;
                }
            }
            ellipse{
                @media (max-width: ${props => props.theme.break.tablet}) {
                    stroke:white;
                }
            }
        }
    }

    &.active{
        transition-duration:.3s;
        font-Weight: bold;
        color: White;
        background-color: ${props => props.theme.colors.green};

        svg {
            path {
                fill: white
            }
            ellipse {
                stroke: white;
            }
        }

        @media (max-width: ${props => props.theme.break.tablet}) {
            color:rgba(255,255,255,.6);

            svg {
                path {
                    fill: rgba(255,255,255,.6);
                }
                ellipse {
                    stroke: rgba(255,255,255,.6);
                }
            }
        }
    }
`;

export const Hr = styled.hr`
    width:100%;
    border-top: 1px solid ${props => props.theme.colors.bg1};
    margin-bottom: 30px;

    @media (max-width: ${props => props.theme.break.tablet}){
        display:none;
    }
`;

export const Close = styled.div`
    position:absolute;
    right:30px;
    top:20px;
    width:20px;
    height:20px;

`;

export const LogoutButton = styled.button`
    cursor: pointer;
    display:block;
    background-color: ${props => props.theme.colors.bg1};
    border:none;
    padding:0;
    width:214px;
    height:45px;
    align-items: center;
    text-align:center;
    text-decoration: none;
    color:${props => props.theme.colors.gray};
    border-radius: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.02em;
    display:flex;
    justify-content: flex-start;
    transition-duration:.3s;

    user-select:none;

    @media (max-width: ${props => props.theme.break.tablet}) {
        color:white;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }

    & figure {
        display:flex;
        align-items: center;
        justify-content: center;
        margin:10px;

        svg {
            path{
                fill:${props => props.theme.colors.gray};
                @media (max-width: ${props => props.theme.break.tablet}) {
                    fill:white;
                }
            }
            ellipse{
                @media (max-width: ${props => props.theme.break.tablet}) {
                    stroke:white;
                }
            }
        }
    }
`;



