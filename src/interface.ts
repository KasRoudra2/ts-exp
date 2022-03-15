export interface Theme {
  theme: {
    color: string;
    linkColor: string;
    linkHover: string;
    backgroundColor: string;
  };
}

export interface stateArray {
    dark: boolean | undefined | null;
    isDark: React.Dispatch<React.SetStateAction<boolean>> | undefined | null;
}

