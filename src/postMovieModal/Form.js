import React, { useState,useContext } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { MoviesContext } from "../MoviesContext";
import MovieInstance from "../model/MovieInstance";
const defaultValues = {
  name: "",
  category:"",
  imageUrl:"",
  rating: 0,
};
const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues)
  const {addMovie,alertMessage,handleWithModal} = useContext(MoviesContext)
  const handleInputChange = (e) => {
    let { name, value } = e.target;
	if(name == "rating" && value>100){
		value = 100;
	}
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    let result = addMovie(new MovieInstance(formValues.name,formValues.category,formValues.rating,formValues.imageUrl))
	if(result){
		handleWithModal()
	}
};
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="center" direction="column" >
        <Grid item>
          <TextField
            id="form_name_input"
            name="name"
            margin="normal"
			fullWidth={true}
			label="Movie name"
            type="text"
            value={formValues.name}
            required={true}
			onChange={handleInputChange}
          />
        </Grid>
		<Grid item style={{width:'60%'}}>
          <FormControl fullWidth>
            <TextField
			select
			  label="Movie category"
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              <MenuItem key="fantasy" value="fantasy">
                Fantasy
              </MenuItem>
              <MenuItem key="action" value="action">
                Action
              </MenuItem>
              <MenuItem key="drama " value="drama">
                Drama
              </MenuItem>
			  <MenuItem key="horror" value="horror">
                Horror
              </MenuItem>
			  <MenuItem key="romantic" value="romantic">
			  Romantic 
              </MenuItem>
            </TextField>
          </FormControl>
        </Grid>
		<Grid item>
          <TextField
            id="form_image_url_input"
            name="imageUrl"
            margin="normal"
			fullWidth={true}
			label="Movie image url"
            type="text"
            value={formValues.imageUrl}
            required={true}
			onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="form_rating_input"
            name="rating"
            margin="normal"
			fullWidth={true}
			label="Movie rating"
            type="number"
            value={formValues.rating}
            required={true}
			onChange={handleInputChange}
          />
        </Grid>
        <p id="form_alert_message">{alertMessage}</p>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;