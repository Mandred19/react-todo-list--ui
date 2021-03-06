import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';
import {grey} from '@mui/material/colors';

export const muiCheckbox: Components<Theme> = {
  MuiCheckbox: {
    styleOverrides: {
      colorPrimary: {
        color: grey[500],
      },
    },
  },
};
