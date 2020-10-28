import React, {useState, useContext} from 'react';
import { DateContext } from './DateContext';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Form() {

    const classes = useStyles();

    const [item, setItem] = useState("");
    const [date, setDate] = useState("");
    const [relationship, setRelationship] = useState("");

    const [dates, setDates] = useContext(DateContext);


    const updateItem = (e) => {
        setItem(e.target.value);
   

    }

    

    const updateDate = (e) => {
        setDate(e.target.value);


    }



    const updateRelationship = (e) => {

        let updatedValue = e.target.value;

       //parse value from string to boolean
        if (updatedValue === "true" || updatedValue === "false") {
            updatedValue = JSON.parse(updatedValue)
        }
        setRelationship(updatedValue);



    }



    const addNewDate = (e) => {
        e.preventDefault();


        setDates(prevDates => [...prevDates, {item: item, date: date, isFamily : relationship}])


    }




    
    return (
        <div className="container">

        <form onSubmit={addNewDate}>

        <TextField className="formInputs" id="outlined-basic" label="Name" variant="outlined"  value={item} onChange={updateItem} />

        {/*}
        <input type="text" name="item" value={item} onChange={updateItem}/>*/}
  
        {/*<input type="date" name="date" value={date} onChange={updateDate}
            min="2020-01-01" max="2020-12-31"
        />*/}


        <TextField
    id="date"
    label="Birthday"
    type="date"
    value={date}
    className="formInputs"
    onChange={updateDate}
    InputLabelProps={{
      shrink: true,
    }}
  />

<FormControl  variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label"> Relation </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={relationship}
          onChange={updateRelationship}
          label="Choose"
        >
          <MenuItem value="true"> Family </MenuItem>
          <MenuItem value="false"> Friend</MenuItem>
        </Select>
        </FormControl>
  


        {/*<select value={relationship} onChange={updateRelationship}>
           <option defaultValue="Choose" >Choose</option>
            <option value= "true" > Family </option>
            <option value= "false" > Friend </option>
        </select>*/}
       
        <Button className="formInputs" variant="contained" color="primary" type="submit">
  Add
</Button>
        </form>

    
            
        </div>
   
    )
}

export default Form
