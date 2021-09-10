import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Shelter } from '../../../../../model/Model';
import { TableHead } from '@material-ui/core';

import { Icon } from '../Shelters.styled'
import { ReactComponent as SVG_Edit } from '../../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../../assets/svg/delete.svg';
import { ConfirmDialog } from '../../components/ConfirmDialog';

import styled from 'styled-components'

const THeader = styled(TableCell)`
    background-color: ${props => props.theme.colors.green};
    color:white;
`;


interface Props {
    shelters: Shelter[],
    edit: (shelter: Shelter) => void,
    delete: (shelter: Shelter) => void,
}


interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

// function edit(shelter: Shelter) {
//     // dispatch(setShelter(shelter))
//     history.push(`/shelters/edit/${shelter.id}`)
// }

// async function handleDeleteShelter(shelter: Shelter) {
//     console.log(shelter);
//     try {
//         const res = await dispatch(deleteShelter(shelter.id || ""))
//         console.log(res)
//         if (`${res.payload}`.match(/^2..$/)) {
//             successSnackbar()
//             dispatch(fetchShelters())
//         }
//         else {
//             errorSnackbar()
//         }
//     }
//     catch (e) {
//         console.log(e);

//     }
// }

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div style={{ display: "flex" }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? ">>" : "<<"}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <span>{">"}</span> : <span>{"<"}</span>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? "<" : ">"}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? "<<" : ">>"}
            </IconButton>
        </div>
    );
}

function create(shelter: Shelter) {
    return shelter
}

// const rows = [
//     createData('Cupcake', 305, 3.7),
//     createData('Donut', 452, 25.0),
//     createData('Eclair', 262, 16.0),
//     createData('Frozen yoghurt', 159, 6.0),
//     createData('Gingerbread', 356, 16.0),
//     createData('Honeycomb', 408, 3.2),
//     createData('Ice cream sandwich', 237, 9.0),
//     createData('Jelly Bean', 375, 0.0),
//     createData('KitKat', 518, 26.0),
//     createData('Lollipop', 392, 0.2),
//     createData('Marshmallow', 318, 0),
//     createData('Nougat', 360, 19.0),
//     createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function ShelterTable(props: Props): JSX.Element {

    const rows = props.shelters.map(x => create(x))

    // const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <THeader>
                            Nazwa
                        </THeader>
                        <THeader>
                            Email
                        </THeader>
                        <THeader>
                            Telefon
                        </THeader>
                        <THeader>

                        </THeader>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>
                                {row.email}
                            </TableCell>
                            <TableCell>
                                {row.phoneNumber}
                            </TableCell>
                            <TableCell style={{ textAlign: "right" }}>
                                <Icon onClick={() => props.edit(row)} color="green">
                                    <SVG_Edit />
                                </Icon>

                                <ConfirmDialog confirmationText={"Usunąć " + row.name + "?"} onAccept={() => (props.delete(row))} component={({ handleShowModal }: any) =>
                                    <Icon color="red" onClick={handleShowModal}>
                                        <SVG_Delete />
                                    </Icon>}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={rows.length}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
