import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import typography from "./typography";

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
