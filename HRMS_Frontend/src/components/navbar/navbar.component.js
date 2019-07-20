import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Brand
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Home
               </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Recruiitment
               </TypoGraphy>
                </ListItemText>

            <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Employees
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Documents
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Calendar
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Payrole
               </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="subtitle1">
                        Logout
               </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;