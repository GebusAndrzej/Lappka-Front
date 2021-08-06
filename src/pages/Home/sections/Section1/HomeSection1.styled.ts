import styled from "styled-components";
import {CSS} from '../../../../static/cssStatic'

export const Grid = styled.div`
    height: 1100px;
    display:grid;
    grid-template-rows: 1fr 1fr;
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    display: inline-block;
    color: ${CSS.black};
    

`;


