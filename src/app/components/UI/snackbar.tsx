import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

interface Props {
 severity: "success" | "error" | "warning" | "info";
 message: string;
 close: () => void;
 open: boolean;
}

const SnackbarUI = ({ severity, message, close, open }: Props) => {
    console.log(severity, message)
 return (
  <>
   <Snackbar open={open} autoHideDuration={6000} onClose={close}>
    <Alert onClose={close} variant="filled" severity={severity}>
     {message}
    </Alert>
   </Snackbar>
  </>
 );
};

export default SnackbarUI;
