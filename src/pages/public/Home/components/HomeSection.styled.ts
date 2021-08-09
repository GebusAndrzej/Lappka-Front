import React from "react";
import styled from "styled-components";
import { CSS } from '../../../../../src/static/cssStatic';


export const Section = styled.section<{ itemBackground?: string }>`
    width: 100%;
    margin:0px;
    min-height:200px;
    box-sizing: border-box;
    background: ${props => props.itemBackground || "${CSS.bg1}"};
`;