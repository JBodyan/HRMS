import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MUIDataTable from "mui-datatables";
import {history} from "../../../_helpers/history"

const ElementStyle={
    margin: 5
};

const dataTableColumns=[
    {
        name: "firstName",
        label: "First Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "secondName",
        label: "Second Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "lastName",
        label: "Last Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "email",
        label: "Email",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "phoneNumber",
        label: "Phone",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "id",
        options: {
            print: false,
            download: false,
            viewColumns: false,
            display: false,
            filter: false,
            sort: false,
        }
    }
];

const options = {
    filterType: 'textField',
    selectableRows: 'none',
    onRowClick: (rowData , rowMeta, e) => {
        //redirect to /userProfile/{id}
        history.push(`/userProfile/${rowData[5]}`);
    }
};


export const UsersTable = (props) =>{
    return  (
        <div style={ElementStyle}>
            <Card>
                <CardContent>
                    <MUIDataTable
                        title={"Users"}
                        data={props.users}
                        columns={dataTableColumns}
                        options={options}

                    />
                </CardContent>
            </Card>
        </div>
    );
};