import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles
} from "@material-ui/core";
import "tailwindcss/tailwind.css";



const PlaceOrder = (handleSubmitOrder) => {

  const [currency, setCurrency] = useState("Bitcoin");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed!");
  }

  const useStyles = makeStyles({
    root: {
      display: "flex",
    },
  });

  const classes = useStyles();

  return (
    <div className={`bg-white p-10 rounded-lg`}>
      <form onSubmit={handleSubmit}>
          {/* Buy/Sell */}
          <FormControl component="fieldset">
            <RadioGroup
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            >
              <FormControlLabel
                value="Sell"
                control={<Radio />}
                label="Sell"
              />
              <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
            </RadioGroup>
          </FormControl>


          {/* Spacer */}
          <div className="pb-4 dn db-ns"></div>

          {/* currency */}

          <FormControl variant="filled" className={`${classes.root}`}>
            <InputLabel>{currency}</InputLabel>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"BTC"}>Bitcoin</MenuItem>
              <MenuItem value={"ETH"}>Ethereum</MenuItem>
            </Select>
          </FormControl>

          {/* Spacer */}
          <div className="pb-4 dn db-ns"></div>

          {/* amount  */}
          <TextField
            fullWidth
            id="amount"
            name="amount"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        <p className='pb-4'></p>
        <Button color="default" variant="outlined"  type="submit" fullWidth className="m-12">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default PlaceOrder;
