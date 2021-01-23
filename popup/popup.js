chrome.storage.sync.get(['token'], (result) => {
  const token = result.token;
  if (token) {
    chrome.tabs.getSelected(null, tab => {
      window.location =
        "https://feedbin.com/pages?url=" +
        encodeURIComponent(tab.url) +
        "&title=" +
        encodeURIComponent(tab.title) +
        "&page_token=" +
        encodeURIComponent(token);
      document.getElementById('text').innerText = "Page sent to Feedbin";
      setTimeout(() => window.close(), 2500);
    });
  } else {
    document.body.classList.add('show-options');
  }
});

document.getElementById('options-button').addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});
