import React, { FC, useState } from 'react';
import { ArcContainer, getRootValue } from "@arc-web/components";
import { UserPreferences } from '@arc-web/components/components/accessibility/ArcAccessibility';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants';
import { Theme, ThemeProvider as MTP, createTheme, rgbToHex } from "@mui/material";

function rgbValue(value: string): string {
  const [r, g, b] = getRootValue(value).split(",").map((v) => parseInt(v, 10));
  return `rgb(${r}, ${g}, ${b})`;
}

export function createLightTheme(...args: Parameters<typeof createTheme>): ReturnType<typeof createTheme> {
  args[0] = {
    palette: {
      mode: "light",
      primary: { main: rgbToHex(rgbValue("--arc-light-color-primary")) },
      secondary: { main: rgbToHex(rgbValue("--arc-light-color-secondary")) },
      error: { main: rgbToHex(rgbValue("--arc-light-color-error")) },
      warning: { main: rgbToHex(rgbValue("--arc-light-color-warning")) },
      info: { main: rgbToHex(rgbValue("--arc-light-color-info")) },
      success: { main: rgbToHex(rgbValue("--arc-light-color-success")) },
      background: {
        default: rgbToHex(rgbValue("--arc-light-container-color")),
        paper: rgbToHex(rgbValue("--arc-light-container-color")),
      },
      text: {
        primary: rgbToHex(rgbValue("--arc-light-font-color")),
        secondary: rgbToHex(rgbValue("--arc-light-font-color")),
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: rgbToHex(rgbValue("--arc-light-container-color")),
            color: rgbToHex(rgbValue("--arc-light-font-color")),
          },
        },
      },
    },
    ...args[0],
  };

  return createTheme(...args);
}

export function createDarkTheme(...args: Parameters<typeof createTheme>): ReturnType<typeof createTheme> {
  args[0] = {
    palette: {
      mode: "dark",
      primary: { main: rgbToHex(rgbValue("--arc-dark-color-primary")) },
      secondary: { main: rgbToHex(rgbValue("--arc-dark-color-secondary")) },
      error: { main: rgbToHex(rgbValue("--arc-dark-color-error")) },
      warning: { main: rgbToHex(rgbValue("--arc-dark-color-warning")) },
      info: { main: rgbToHex(rgbValue("--arc-dark-color-info")) },
      success: { main: rgbToHex(rgbValue("--arc-dark-color-success")) },
      background: {
        default: rgbToHex(rgbValue("--arc-dark-container-color")),
        paper: rgbToHex(rgbValue("--arc-dark-container-color")),
      },
      text: {
        primary: rgbToHex(rgbValue("--arc-dark-font-color")),
        secondary: rgbToHex(rgbValue("--arc-dark-font-color")),
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: rgbToHex(rgbValue("--arc-dark-container-color")),
            color: rgbToHex(rgbValue("--arc-dark-font-color")),
          },
        },
      },
    },
    ...args[0],
  };

  return createLightTheme(...args);
}

interface ThemeProvierProps {
  children: React.ReactNode;
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProvierProps> = ({ children, lightTheme, darkTheme }) => {
  const [isDark, setIsDark] = useState(false);
  lightTheme = lightTheme || createLightTheme();
  darkTheme = darkTheme || createDarkTheme();
  const theme = isDark ? darkTheme : lightTheme;

  const [prefersDark, setPrefersDark] = useState(window.matchMedia('(prefers-color-scheme: dark)'));
  prefersDark.addEventListener('change', handlePreferenceColorSchemeChange);
  React.useEffect(() => {
    setPrefersDark(window.matchMedia('(prefers-color-scheme: dark)'));
  }, []);

  function handlePreferenceColorSchemeChange(event: MediaQueryListEvent) {
    setIsDark(event.matches);
  }

  function handleThemeChange(event: CustomEvent<{ preferences: UserPreferences }>) {
    const theme = event.detail.preferences.theme;
    console.log('Theme changed to:', theme);
    if (theme === 'auto') {
    } else {
      setIsDark(theme === 'dark');
    }
  }

  const arcContainer = document.querySelector('arc-container') as ArcContainer;
  if (arcContainer) {
    arcContainer.addEventListener(ARC_EVENTS.accessibilityChange, handleThemeChange);
  }

  return (
    <MTP theme={theme}>
      {children}
    </MTP>
  );
}
