import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMobile = () => {
 const theme = useTheme();
 return useMediaQuery(theme.breakpoints.down(700));
};
