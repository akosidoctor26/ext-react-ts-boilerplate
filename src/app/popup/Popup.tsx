import React from 'react';

const Popup = () => {
  const onClick = async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs[0];

    // Say Hello!
    const message = 'Hello!';
    chrome.tabs.sendMessage(activeTab.id || 0, message);
  };

  const openSidePanel = async () => {
    const tabs: chrome.tabs.Tab[] = await chrome.tabs.query({
      currentWindow: true,
      active: true,
    });
    const tab: chrome.tabs.Tab = tabs[0];
    await chrome.sidePanel.open({ tabId: tab.id, windowId: tab.windowId });
  };

  return (
    <main>
      <button onClick={onClick}>Say Hello</button>
      <button onClick={openSidePanel}>Open Side Panel</button>
    </main>
  );
};

export default Popup;
