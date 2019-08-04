import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";

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
                                <TableCell align="left">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell component="th" scope="row">
                                        {user.firstName} {user.secondName} {user.lastName}
                                    </TableCell>
                                    <TableCell align="left">{user.userName}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left"><Link to={`/userProfile/${user.id}`}><Button>Profile</Button></Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};