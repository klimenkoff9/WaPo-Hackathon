import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "tailwindcss/tailwind.css";

const CoinbaseCredentials = (handleSubmitAuth) => {
  const validate = (values) => {
    const errors = {};
    if (!values.apiKey) {
      errors.apiKey = "Required";
    }

    if (!values.apiSecret) {
      errors.apiSecret = "Required";
    }

    if (!values.passphrase) {
      errors.passphrase = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      apiKey: "",
      apiSecret: "",
      passphrase: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Submitted!");
    },
  });

  return (
    <div className="bg-white p-10 rounded-lg">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            id="apiKey"
            name="apiKey"
            label="API Key"
            value={formik.values.apiKey}
            onChange={formik.handleChange}
            error={formik.touched.apiKey && Boolean(formik.errors.apiKey)}
            helperText={formik.touched.apiKey && formik.errors.apiKey}
            className="m-8"
          />
          <TextField
            fullWidth
            id="apiSecret"
            name="apiSecret"
            label="API Secret"
            value={formik.values.apiSecret}
            onChange={formik.handleChange}
            error={formik.touched.apiSecret && Boolean(formik.errors.apiSecret)}
            helperText={formik.touched.apiSecret && formik.errors.apiSecret}
            className="m-8"
          />
          <TextField
            fullWidth
            id="passphrase"
            name="passphrase"
            label="Passphrase"
            type="text"
            value={formik.values.passphrase}
            onChange={formik.handleChange}
            error={
              formik.touched.passphrase && Boolean(formik.errors.passphrase)
            }
            helperText={formik.touched.passphrase && formik.errors.passphrase}
            className="m-8"
          />

            {/* Spacer */}
            <div className="pb-4 dn db-ns"></div>

        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CoinbaseCredentials;
