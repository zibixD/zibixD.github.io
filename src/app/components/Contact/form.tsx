"use client";

import {
 Alert,
 AlertColor,
 Box,
 Button,
 TextField,
 Typography,
 styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";

import styles from "./contact.module.css";

const inputStyle = {
 margin: "5% 0",
 width: "90%",
 backgroundColor: "white",
 borderRadius: "0px",
};

const buttonStyle = {
 width: "90%",
 fontSize: "1rem",
 fontWeight: 600,
 backgroundColor: "white",
 margin: "5% 0",
};

const CustomTextFieldCss = styled(TextField)({
 "& .MuiInputBase-root": {
  borderRadius: "0px",
 },
});

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
 const [snackbarSeverity, setSnackbarSeverity] =
  useState<AlertColor>("success");
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
     setSnackbarMessage("E-mail został wysłany!");
     console.log("działa");
     setSnackbarSeverity("success");
     reset();
    } else {
     setSnackbarMessage("Coś poszło nie tak.");
     console.log(" chuja działa");
     setSnackbarSeverity("error");
    }
    setOpenSnackbar(true);
   })
   .catch((error) => {
    setSnackbarMessage("Wystąpił błąd podczas wysyłania e-maila.");
    setSnackbarSeverity("error");
    setOpenSnackbar(true);
    console.log(error);
   });
 };

 return (
  <>
   <Box className={styles.contact_form}>
    {!isSubmitSuccessful ? (
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
       <CustomTextFieldCss
        label="Twoje imię"
        type="text"
        placeholder="Imię"
        autoComplete="false"
        style={inputStyle}
        {...register("name", {
         required: "Full name is required",
         maxLength: 80,
        })}
       />
      </Box>

      <Box className="">
       <CustomTextFieldCss
        label="Twój adress email"
        id="email_address"
        type="email"
        placeholder="Email Address"
        // name="email"
        autoComplete="false"
        style={inputStyle}
        {...register("email", {
         required: "Enter your email",
         pattern: {
          value: /^\S+@\S+$/i,
          message: "Please enter a valid email",
         },
        })}
       />
      </Box>

      <Box className="mb-3">
       <CustomTextFieldCss
        label="Twoja wiadomość"
        multiline
        rows={3}
        // name="message"
        style={inputStyle}
        {...register("message", { required: "Enter your Message" })}
       />
      </Box>
      {isSubmitting ? (
       <Button
        loading
        loadingPosition="start"
        type="submit"
        style={buttonStyle}
       >
        Ładowanie
       </Button>
      ) : (
       <Button type="submit" style={buttonStyle}>
        Wyślij
       </Button>
      )}
     </form>
    ) : (
     <Typography className={styles.sendInfo}>E-mail został wysłany!</Typography>
    )}
   </Box>
   <Snackbar
    open={openSnackbar}
    autoHideDuration={5000}
    onClose={() => setOpenSnackbar(false)}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
   >
    <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
     {snackbarMessage}
    </Alert>
   </Snackbar>
  </>
 );
}
