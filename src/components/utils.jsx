import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { blue, indigo, deepOrange, grey } from '@mui/material/colors';

import ConsolePlus from '../assets/images/logo-console-plus.svg';
import DevLens from '../assets/images/logo-devlens.svg';
import DomSnapshot from '../assets/images/logo-dom-snapshot.svg';
import GridGuides from '../assets/images/logo-grid-guides.svg';
import JsonWizard from '../assets/images/logo-json-wizard.svg';
import LinkChecker from '../assets/images/logo-link-checker.svg';
import MarkupNotes from '../assets/images/logo-markup-notes.svg';
import PalettePicker from '../assets/images/logo-palette-picker.svg';
import SpeedBoost from '../assets/images/logo-speed-boost.svg';
import StyleSpy from '../assets/images/logo-style-spy.svg';
import TabMasterPro from '../assets/images/logo-tab-master-pro.svg';
import ViewportBuddy from '../assets/images/logo-viewport-buddy.svg';



const logos = {
  devlens: DevLens,
  consoleplus: ConsolePlus,
  domsnapshot: DomSnapshot,
  gridguides: GridGuides,
  jsonwizard: JsonWizard,
  linkchecker: LinkChecker,
  markupnotes: MarkupNotes,
  palettepicker: PalettePicker,
  speedboost: SpeedBoost,
  stylespy: StyleSpy,
  tabmasterpro: TabMasterPro,
  viewportbuddy: ViewportBuddy
};

//Switch de android 12
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,

  '& .MuiSwitch-track': {
    backgroundColor: grey[600], // inactivo
    borderRadius: 22 / 2,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {},
    '&::after': {},
  },

  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
    backgroundColor: '#fff', // la "pelota" siempre blanca
  },

  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: deepOrange['A400'], 
    opacity:1,
  },
}));

export {logos, Android12Switch};
