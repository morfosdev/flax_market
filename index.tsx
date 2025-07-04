
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internals
import { Router } from './src';

// ---------- inject Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
document.head.appendChild(fontLink);

// ---------- App Component
export default function App() {
  return <Router />;
}

RN.AppRegistry.registerComponent('App', () => App);

RN.AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
