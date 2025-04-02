"use client";

import { Box, Button, TextField, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";

import styles from "./contact.module.css";

export default function ContactForm() {
 const {
  register,
  handleSubmit,
  setValue,
  reset,
  control,
  formState: { isSubmitSuccessful, isSubmitting },
 } = useForm({
  mode: "onTouched",
 });
 //  const [isSuccess, setIsSuccess] = useState(false);
 const [snackbarMessage, setSnackbarMessage] = useState("");
 //  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
 const [openSnackbar, setOpenSnackbar] = useState(false);

 const userName = useWatch({
  control,
  name: "name",
  defaultValue: "Someone",
 });

 useEffect(() => {
  setValue("subject", `${userName} wysłał ci wiadomość z twojego portfolio!`);
 }, [userName, setValue]);

 const onSubmit = async (
  data: Record<string, object>
  //   e: FormEvent<HTMLFormElement>
 ) => {
  await fetch("https://api.web3forms.com/submit", {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
   },
   body: JSON.stringify(data, null, 2),
  })
   .then(async (response) => {
    const json = await response.json();
    if (json.success) {
     //  setIsSuccess(true);
     setSnackbarMessage("E-mail został wysłany!");
     //  setSnackbarSeverity("success");
     //  e.target.reset();
     console.log(json);
     reset();
    }
   })
   .catch((error) => {
    // setIsSuccess(false);
    setSnackbarMessage("Wystąpił błąd podczas wysyłania e-maila.");
    // setSnackbarSeverity("error");

    console.log(error);
   });
  setOpenSnackbar(true);
 };

 return (
  <>
   <Box className={styles.contact_form}>
    {!isSubmitSuccessful && (
     <form onSubmit={handleSubmit(onSubmit)}>
      <input
       type="hidden"
       value="8fbfba6c-d6d6-4900-a924-79250a402850"
       {...register("access_key")}
      />
      <input type="hidden" {...register("subject")} />
      <input
       type="hidden"
       value="Email z portfolio"
       {...register("from_name")}
      />
      <input
       type="checkbox"
       id=""
       className="hidden"
       style={{ display: "none" }}
       {...register("botcheck")}
      ></input>

      <Box className="">
       <TextField
        label="Twoje imię"
        type="text"
        placeholder="Imię"
        autoComplete="false"
        className={styles.input}
        {...register("name", {
         required: "Full name is required",
         maxLength: 80,
        })}
       />
       {/* {errors.name && (
        <Box className="mt-1 text-red-600">
         <small>{errors.name.message}</small>
        </Box>
       )} */}
      </Box>

      <Box className="">
       {/* <label htmlFor="email_address" className="sr-only">
        Email Address
       </label> */}
       <TextField
        label="Twój adress email"
        id="email_address"
        type="email"
        placeholder="Email Address"
        // name="email"
        autoComplete="false"
        className={styles.input}
        {...register("email", {
         required: "Enter your email",
         pattern: {
          value: /^\S+@\S+$/i,
          message: "Please enter a valid email",
         },
        })}
       />
       {/* {errors.email && (
        <Box className="mt-1 text-red-600">
         <small>{errors.email.message}</small>
        </Box>
       )} */}
      </Box>

      <Box className="mb-3">
       <TextField
        label="Twoja wiadomość"
        multiline
        rows={3}
        // name="message"
        className={styles.input}
        {...register("message", { required: "Enter your Message" })}
       />
      </Box>
      {isSubmitting ? (
       <Button
        loading
        loadingPosition="start"
        type="submit"
        sx={{ height: 40 }}
        className={styles.submit_button}
       >
        Ładowanie
       </Button>
      ) : (
       <Button type="submit" className={styles.submit_button}>
        Wyślij
       </Button>
      )}

      <Snackbar
       open={openSnackbar}
       autoHideDuration={6000}
       onClose={() => setOpenSnackbar(false)}
       anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
       <Alert onClose={() => setOpenSnackbar(false)} severity="success">
        {snackbarMessage}
       </Alert>
      </Snackbar>
     </form>
    )}
   </Box>
  </>
 );
}
