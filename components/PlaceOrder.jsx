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
} from "@material-ui/core";
import "tailwindcss/tailwind.css";

const PlaceOrder = () => {

  const [currency, setCurrency] = useState("Bitcoin");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      alert(currency);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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

          {/* currency */}

          <FormControl variant="filled">
            <InputLabel>{currency}</InputLabel>
            <Select value={currency} onChange={handleChange}>
              <MenuItem value={"BTC"}>Bitcoin</MenuItem>
              <MenuItem value={"ETH"}>Ethereum</MenuItem>
            </Select>
          </FormControl>

          {/* amount  */}
          <TextField
            fullWidth
            id="amount"
            name="amount"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="m-8"
          />

        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Place Button
        </Button>
      </form>
    </div>
  );
};

export default PlaceOrder;
