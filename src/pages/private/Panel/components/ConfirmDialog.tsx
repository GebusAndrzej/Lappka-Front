import React, { ReactChild, useState } from "react"

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled, { css } from "styled-components";

const Button = styled.button<{ variant?: "delete" }>`
    background-color: ${props => props.theme.colors.bg1};
    color:black;
    border-radius: 10px;
    min-width:100px;
    min-height:45px;
    border:none;
    cursor: pointer;
    box-shadow: 0px 1px 5px #00000079;
    
    ${(props) => props.variant == "delete" && css`
        color:white;
        background-color:red;
        &:disabled{
            background-color:#562222;
        }
    `}

    
`;

const DialogBox = styled.div`
    background-color: ${props => props.theme.colors.bg1};
    width:300px;
`;
const ButtonBox = styled.div`
    padding:20px 0;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ValidationText = styled.div`
    font-weight:bold;
    color:red;
`

// interface Props {
//     onAccept: () => void,
//     component: ReactChild,
//     confirmationText: string,
// }

export const ConfirmDialog = ({ onAccept, component, confirmationText, validationText = null }: any): JSX.Element => {
    const [isShowing, setIsShowing] = useState(false)
    const [input, setInput] = useState("")

    const handleShowModal = () => {
        setIsShowing(true)
    }

    const handleChange = (e: any): void => {
        setInput(e.target.value)
    }

    return (<> {component({ handleShowModal })}
        <Dialog
            open={isShowing}
            keepMounted
            onClose={() => setIsShowing(false)}
            aria-labelledby="alert-dialog-confirm-delete"
            aria-describedby="alert-dialog-slide-confirm-delete"
        >


            <DialogBox>
                <DialogTitle id="alert-dialog-slide-title">{"Usunąć?"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {confirmationText}
                    </DialogContentText>
                </DialogContent>

                {
                    validationText ?
                        <>
                            <ButtonBox>Aby usunąć przepisz: <ValidationText>{validationText}</ValidationText></ButtonBox>
                            <ButtonBox>
                                <input
                                    name="input"
                                    type="text"
                                    value={input}
                                    onChange={handleChange}
                                />
                            </ButtonBox>
                        </>
                        :
                        false
                }

                <ButtonBox>
                    <Button onClick={() => setIsShowing(false)} >
                        Anuluj
                    </Button>
                    {validationText ?
                        <Button onClick={() => { setIsShowing(false), onAccept() }} variant="delete" disabled={!(input == validationText)}>
                            Usuń
                        </Button>
                        :
                        <Button onClick={() => { setIsShowing(false), onAccept() }} variant="delete">
                            Usuń
                        </Button>

                    }
                </ButtonBox>
            </DialogBox>


        </Dialog> </>)
}