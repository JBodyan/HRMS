import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";

const CardStyle =
    {
        minWidth: "80%",
        maxWidth: "80%",
        maxHeight: "20%"
    };
const ContentStyle =
    {
        display: "flex",
        justifyContent: "center"
    };

const TextFieldStyle =
    {
        width: 200,
        marginLeft: 5
    };
const ButtonFilterStyle =
    {
        border: 'solid 1px'
    };
const DocumentCategoryStyle =
    {
        width: 200,
        marginLeft: 5
    };

const tags = [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5'
];


// export default function MultipleSelect() {
//     const [tagName, setTagName] = React.useState([]);
//
//     function handleChange(event) {
//         setTagName(event.target.value);
//     }
//
//     function handleChangeMultiple(event) {
//         const {options} = event.target;
//         const value = [];
//         for (let i = 0, l = options.length; i < l; i += 1) {
//             if (options[i].selected) {
//                 value.push(options[i].value);
//             }
//         }
//         setTagName(value);
//     }
// }

export class DocumentFilter extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: ""
        }
    }
    render(){
        return  (
            <Card style={CardStyle}>
                <CardActions style={ContentStyle}>
                    <TextField
                        style={TextFieldStyle}
                        id="document-name"
                        placeholder="Document name"
                        type="text"
                        label="Document name"
                    />
                    <TextField
                        style={TextFieldStyle}
                        id="document-content"
                        placeholder="Document content"
                        type="text"
                        label="Document content"
                    />
                    <FormControl style={DocumentCategoryStyle}>
                        <InputLabel htmlFor="document-category">Document category</InputLabel>
                        <Select
                            value={this.state.category}
                            inputProps={{
                                name: 'category',
                                id: 'document-category'
                            }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="category 1">category 1</MenuItem>
                            <MenuItem value="category 2">category 2</MenuItem>
                            <MenuItem value="category 3">category 3</MenuItem>
                        </Select>
                    </FormControl>
                    {/*<FormControl>*/}
                        {/*<InputLabel htmlFor="select-multiple-chip">Tags</InputLabel>*/}
                        {/*<Select*/}
                            {/*multiple*/}
                            {/*value={MultipleSelect.tagName}*/}
                            {/*onChange={MultipleSelect.handleChange}*/}
                            {/*input={<Input id="select-multiple-chip" />}*/}
                            {/*renderValue={selected => (*/}
                                {/*<div>*/}
                                    {/*{selected.map(value => (*/}
                                        {/*<Chip key={value} label={value} />*/}
                                    {/*))}*/}
                                {/*</div>*/}
                            {/*)}>*/}
                            {/*{tags.map(tag => (*/}
                                {/*<MenuItem key={tag} value={tag}>*/}
                                    {/*{tag}*/}
                                {/*</MenuItem>*/}
                            {/*))}*/}
                        {/*</Select>*/}
                    {/*</FormControl>*/}
                    <Button style={ButtonFilterStyle}>Filter</Button>
                </CardActions>
            </Card>
        );
    }
}
export default DocumentFilter