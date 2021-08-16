import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Fixed = styled.div`
    grid-area: sidebar;
    position: fixed;
    height:100vh;
    z-index:10;
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
`;

export const Logo = styled.img`
    max-width: 100%;
`;

export const ButtonBox = styled.div`
    max-width: 214px;
    display:flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 60px;

    & a:last-child{
        margin-top: auto;
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

    & figure {
        display:flex;
        align-items: center;
        justify-content: center;
        margin:10px;

        svg {
            path{
                fill:${props => props.theme.colors.gray};
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
    }
`;

export const Hr = styled.hr`
    width:100%;
    border-top: 1px solid ${props => props.theme.colors.bg1};
    margin-bottom: 30px;
`;





