import React, { ReactChild, useState } from "react"

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled, { css } from "styled-components";

const Button = styled.button<{ variant?: "delete" }>`
    background-color: ${props => props.theme.colors.green};
    border-radius: 10px;
    min-width:100px;
    min-height:45px;
    border:none;
    color:white;
    cursor: pointer;

    ${(props) => props.variant == "delete" && css`
        background-color:red;
    `}
`;

interface Props {
    onAccept: () => void,
    component: ReactChild,
    confirmationText: string
}

export const ConfirmDialog = ({ onAccept, component, confirmationText }: any): JSX.Element => {
    const [isShowing, setIsShowing] = useState(false)
    const handleShowModal = () => {
        setIsShowing(true)
    }
    return (<> {component({ handleShowModal })}
        <Dialog
            open={isShowing}
            keepMounted
            onClose={() => setIsShowing(false)}
            aria-labelledby="alert-dialog-confirm-delete"
            aria-describedby="alert-dialog-slide-confirm-delete"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Usunąć?"}</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {confirmationText}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => setIsShowing(false)} >
                    Anuluj
                </Button>
                <Button onClick={() => { setIsShowing(false), onAccept() }} variant="delete">
                    Usuń
                </Button>
            </DialogActions>

        </Dialog> </>)
}