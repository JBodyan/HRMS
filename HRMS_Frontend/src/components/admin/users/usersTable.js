import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const ElementStyle={
    margin: 5
};

export const UsersTable = (props) =>{
    return  (
        <div style={ElementStyle}>
            <Card>
                <CardContent>
                    <Table className="users-table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">UserName</TableCell>
                                <TableCell align="left">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="left">{user.userName}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left"><Button>Info</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};