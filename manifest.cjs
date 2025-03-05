module.exports = {
  manifest_version: 3,
  name: '<APP_NAME>',
  description: '<APP_DESCRIPTION>',
  version: '1.0.0',
  action: {
    default_popup: 'popup.html',
  },
  background: {
    service_worker: 'background.js',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['contentScript.js'],
    },
  ],
  // "options_page": "options.html", /** Full Page Options **/
  options_ui: {
    page: 'options.html',
    open_in_tab: false,
  },
  side_panel: {
    default_path: 'side-panel.html',
  },
  permissions: ['sidePanel'],
};
