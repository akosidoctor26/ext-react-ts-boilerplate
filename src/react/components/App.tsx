import React from 'react';

const App = () => {
  const onClick = async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs[0];

    // Say Hello!
    const message = 'Hello!';
    chrome.tabs.sendMessage(activeTab.id || 0, message);
  };
  return (
    <main>
      <button onClick={onClick}>Say Hello</button>
    </main>
  );
};

export default App;
