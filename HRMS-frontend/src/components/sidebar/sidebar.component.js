import React from 'react'
import {
    withStyles
} from '@material-ui/core/styles'

import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Badge
} from '@material-ui/core'


const styles = theme => ({
    root: {
        maxWidth: 300,
        height: 550,
        backgroundColor: theme.palette.background.paper,
    },

})

@withStyles(styles)
export  class Sidebar extends React.Component {
     render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
               Hello world
            </div>
        )
    }
}

