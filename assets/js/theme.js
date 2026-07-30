// Theme switcher based on CSS variables made by Fernardo Paredes
// https://www.fdp.io/blog/2016/11/08/theming-via-css-properties/

// Polyfilling Object.entries for Safari :/
Object.entries = (object) => Object.keys(object).map(
  (key) => [ key, object[key] ]
)

const isObject = (obj) => obj === Object(obj)

const LightTheme = {
  '--bg-color': '#f5f7ff',             // soft pastel nebula white-blue
  '--text-color': '#1a2340',           // deep navy for readability
  '--text-color-light': '#6b75a0',     // muted lavender-gray
  '--link-color': '#3a6dd8',           // nebula blue accent
  '--metadata-color': '#8c94b8',       // cool gray-blue
  '--post-title': '#2a355c',           // darker nebula navy
  '--code-bg-color': '#ffffff',        // clean white
  '--code-border': '#dce2f7',          // faint pastel blue border
  '--table-border-color': '#dce2f7',   // consistent pastel divider
  '--table-header-color': '#eef2ff',   // soft nebula highlight
  '--shadow-color': 'rgba(0, 0, 0, 0.08)', // subtle neutral shadow
  '--invert-logo-color': 'invert(0)',
  themeName: 'LightTheme'
}

const NightTheme = {
  '--bg-color': '#0a0f1f',              // deep cosmic navy
  '--text-color': '#e2e8ff',           // soft glowing white-blue
  '--text-color-light': '#9aa4c8',     // muted nebula lavender
  '--link-color': '#8ab8ff',           // bright star-blue
  '--metadata-color': '#6d78a0',       // cool muted blue-gray
  '--post-title': '#ffffff',           // pure white for contrast
  '--code-bg-color': '#11182d',        // darker nebula pocket
  '--code-border': '#1b2440',          // subtle deep blue border
  '--table-border-color': '#1c2747',   // faint cosmic divider
  '--table-header-color': '#2a355c',   // slightly brighter nebula blue
  '--shadow-color': 'rgba(138, 184, 255, 0.25)', // star-blue glow
  '--invert-logo-color': 'invert(1)',
  themeName: 'NightTheme'
}

// const LightTheme = {
//   '--bg-color': '#F7FAFC',            // soft white, not blinding
//   '--text-color': '#0A1A2F',          // navy text for brand consistency
//   '--text-color-light': '#6B7C93',    // muted blue-gray
//   '--link-color': '#009AA8',          // cyan accent but toned for light mode
//   '--metadata-color': '#828FA1',      // soft cool gray
//   '--post-title': '#2D3E55',          // darker navy-gray for hierarchy
//   '--code-bg-color': '#FFFFFF',       // clean white code blocks
//   '--code-border': '#DCE6F2',         // light navy-tinted border
//   '--table-border-color': '#DCE6F2',  // consistent with code border
//   '--table-header-color': '#EDF2F7',  // subtle sectioning
//   '--shadow-color': 'rgba(0, 0, 0, 0.08)', // soft neutral shadow
//   '--invert-logo-color': 'invert(0)', // navy bunny logo
//   themeName: 'LightTheme'
// }

// const NightTheme = {
//   '--bg-color': '#0A1A2F',            // deep navy background
//   '--text-color': '#FFFFFF',          // main text
//   '--text-color-light': '#8FAECF',    // secondary text
//   '--link-color': '#00EAFF',          // cyan accent
//   '--metadata-color': '#6B7C93',      // muted blue-gray
//   '--post-title': '#FFFFFF',          // strong contrast
//   '--code-bg-color': '#0F223A',       // elevated navy card
//   '--code-border': '#132A46',         // subtle border
//   '--table-border-color': '#1B3B5F',  // navy divider
//   '--table-header-color': '#132A46',  // slightly lighter header
//   '--shadow-color': 'rgba(0, 234, 255, 0.15)', // cyan-tinted shadow
//   '--invert-logo-color': 'invert(1)', // white bunny logo
//   themeName: 'NightTheme'
// }

// const LightTheme = {
//   '--bg-color': '#eee',
//   '--text-color': '#484848',
//   '--text-color-light': '#828282',
//   '--link-color': '#000',
//   '--metadata-color': '#999',
//   '--post-title': '#313131',
//   '--code-bg-color': '#fff',
//   '--code-border': '#f5f5f5',
//   '--table-border-color': '#e5e5e5',
//   '--table-header-color': '#fefefe',
//   '--shadow-color': 'rgba(0, 0, 0, 0.1)',
//   '--invert-logo-color': 'invert(0)',
//   themeName: 'LightTheme'
// }

// const NightTheme = {
//   '--bg-color': '#1c1c1c',
//   '--text-color': '#c4c4c4',
//   '--text-color-light': '#777',
//   '--link-color': '#f1f1f1',
//   '--metadata-color': '#666',
//   '--post-title': '#fff',
//   '--code-bg-color': '#252525',
//   '--code-border': '#222',
//   '--table-border-color': '#292929',
//   '--table-header-color': '#505050',
//   '--shadow-color': 'rgba(255, 255, 255, 0.1)',
//   '--invert-logo-color': 'invert(1)',
//   themeName: 'NightTheme'
// }

const setCSSVariable = (key, value) => document.body.style.setProperty(key, value)

const saveTheme = (theme) => {
  if (window.localStorage) {
    localStorage['theme'] = JSON.stringify(theme)
    localStorage['currentTheme'] = theme.themeName
  }
}

const loadSavedTheme = () => {
  if (window.localStorage) {
    const maybeTheme = localStorage['theme']
    if (maybeTheme) return JSON.parse(maybeTheme)
  }

  return null
}

const updateTheme = (theme) => {
  if (!isObject(theme)) return

  Object
  .entries(theme)
  .forEach(([key, value]) => setCSSVariable(key, value))

  saveTheme(theme)
}

const checkForSavedTheme = () => {
  const theme = loadSavedTheme()
  if (theme) updateTheme(theme)
}

const switchTheme = () => {
  const el = document.getElementById('theme-switcher')
  // Check if we have a saved theme
  const theme = loadSavedTheme()
  const currentTheme = localStorage['currentTheme']
  if (theme && currentTheme === NightTheme.themeName) {
    updateTheme(LightTheme)
    el.className = iconForTheme(LightTheme.themeName)
  } else {
    updateTheme(NightTheme)
    el.className = iconForTheme(NightTheme.themeName)
  }
}

const iconForTheme = (themeName) => {
  if (themeName === NightTheme.themeName) {
    return 'icon-invert_colors'
  } else {
    return 'icon-invert_colors2'
  }
}

// initiate

// set inital theme to night
updateTheme(NightTheme);
checkForSavedTheme();

const el = document.getElementById('theme-switcher');

if (window.localStorage && localStorage['currentTheme']) {
  var iconClasses = iconForTheme(localStorage['currentTheme']);
  el.className = iconClasses;
} else {
  el.className = iconForTheme();
}
