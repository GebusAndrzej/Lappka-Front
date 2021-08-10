import styled from "styled-components";

// container for all cards
export const Container = styled.div`
    padding-top: 200px;
    width:100%;
    min-height:391px;
    margin:auto;
    position: relative;
    padding-bottom: 200px;
`;

// each card
export const Card = styled.div`
    width:730px;
    height:391px;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:10%;
    box-sizing:border-box;
    color: ${props => props.theme.colors.gray};
    text-align: center;
    font-size: 17px;
    line-height: 27px;
    position: relative;
    transition-duration: .4s;

    ::before{
        content: "''";
        opacity:.1;
        font-size:240px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color:${props => props.theme.colors.green};
        position: absolute;
        top: 130px;
    }

    @media (max-width: ${props => props.theme.break.tablet}) {
        font-size: 14px;
        line-height: 17px;
        width:70vw;
        height: auto;
    }
    @media (max-width: ${props => props.theme.break.mobile}) {
        width:90vw;
    }
`;

export const Person = styled.h3`
    color: ${props => props.theme.colors.gray};
    font-family: "Ubuntu";
    font-size: 20px;
    line-height: 23px;
    margin:0;
    margin-top:20px;
`;

export const Age = styled.h5`
    color: ${props => props.theme.colors.gray};
    font-family: "Ubuntu";
    font-size: 16px;
    line-height: 18px;
    margin:0;
    margin-top:5px;
    font-weight: 500;
`;
export const SectionTitle = styled.h1`
    padding-top: 100px;
    margin: 0px;
    font-family: 'Ubuntu';
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1.425px;
    color: ${props => props.theme.colors.black};
`;

export const Avatar = styled.img<{ position: "1" | "2" | "3" | "4" }>`
    max-width:130px;
    position: absolute;
    top: 60px;
    transform: translateX(-50%);

    ${({ position }) => handleAvatar(position)};

    @media (max-width: ${props => props.theme.break.tablet}) {
        display:none;
    }
`;

const handleAvatar = (position: string) => {
    switch (+position) {
        case 1:
            return `
                left: calc(50% - 460px);
            `
        case 2:
            return `
                left: calc(50% - 520px);
                top: 500px;
            `
        case 3:
            return `
                right: calc(50% - 570px);
            `
        case 4:
            return `
                right: calc(50% - 650px);
                top: 600px;
            `
    }
}

