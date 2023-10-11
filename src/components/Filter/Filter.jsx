import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import makeOptions from "data/makeOptions.json";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setFilter, resetFilter, setIsEmpty } from "redux/filter/slice";

const Filter = () => {
  const dispatch = useDispatch();
  const priceRange = [];
  for (let i = 30; i <= 300; i += 10) {
    priceRange.push(i);
  }

  const validationSchema = Yup.object().shape({
    make: Yup.string()
      .nullable()
      .required()
      .oneOf(makeOptions, "Make should be one of the options"),
    price: Yup.number()
      .oneOf(priceRange, "Price is not within the valid range")
      .required("Price is required"),
    fromMileage: Yup.number()
      .min(0, "From Mileage cannot be negative")
      .max(Yup.ref("toMileage"), "From Mileage must be less than To Mileage")
      .required("From Mileage is required"),
    toMileage: Yup.number()
      .min(0, "To Mileage cannot be negative")
      .required("To Mileage is required"),
  });

  const formik = useFormik({
    initialValues: {
      make: null,
      price: 30,
      fromMileage: 0,
      toMileage: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setFilter(values));
      dispatch(setIsEmpty(false));
    },
  });

  const handleReset = () => {
    formik.resetForm();
    dispatch(resetFilter());
    dispatch(setIsEmpty(true));
  };

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Autocomplete
            disablePortal
            id="make-options"
            name="make"
            value={formik.values.make}
            onChange={(e, newValue) => {
              formik.setFieldValue("make", newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Enter text" />
            )}
            options={makeOptions}
          />
          <Select
            labelId="price-select-label"
            id="price-select"
            name="price"
            value={formik.values.price}
            label="Price"
            onChange={formik.handleChange}
          >
            {priceRange.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="fromMileage"
            value={formik.values.fromMileage}
            onChange={formik.handleChange}
          />
          <TextField
            name="toMileage"
            value={formik.values.toMileage}
            onChange={formik.handleChange}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default Filter;
