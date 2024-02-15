import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('CUSTOMER TRUCK WASH', 159, 6.0, 24, 4.0),
    createData('TRAILER WASH', 237, 9.0, 37, 4.3),
    createData('TRUCK WASH', 262, 16.0, 24, 6.0),
    createData('POLISHING', 305, 3.7, 67, 4.3),
    createData('TRUCK POLISHING', 356, 16.0, 49, 3.9),
    createData('TRUCK DETAILING', 356, 16.0, 49, 3.9),
    createData('DETAILING', 356, 16.0, 49, 3.9),
    createData('HOPPER WASH', 356, 16.0, 49, 3.9),
    createData('TANKER WASH', 356, 16.0, 49, 3.9),
    createData('WASHOUT', 356, 16.0, 49, 3.9),
    createData('ANY TRAILER', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    return (
        <TableContainer style={{ marginTop: "40px" }} component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">HIGHWAY</StyledTableCell>
                        <StyledTableCell align="right">EXIT</StyledTableCell>
                        <StyledTableCell align="right">CITY</StyledTableCell>
                        <StyledTableCell align="right">STATE</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}