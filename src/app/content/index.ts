chrome.runtime.onMessage.addListener(function (msg: string) {
  const p = document.createElement('p');
  p.innerHTML = msg;
  document.body.prepend(p);
});
