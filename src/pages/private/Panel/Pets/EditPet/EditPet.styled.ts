import styled from "styled-components";

export const Thumbnail = styled.figure`
    position: relative;
    width:150px;
    height: 150px;
    margin:0;
    padding:0;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    figcaption {
        border-radius: 50%;
        display: flex;
        cursor:pointer;
        justify-content: center;
        align-items: center;
        position: absolute;
        right:5px;
        top:5px;
        
        width:30px;
        height:30px;
        color:red;
        background-color: rgba(255,255,255,.2);
        transition-duration: .2s;
        

        :hover{
            background-color: ${props => props.theme.colors.bg1};
        }
    }
`;