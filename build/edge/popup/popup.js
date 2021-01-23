const browser = window.browser || window.chrome;

browser.storage.sync.get(['token'], (result) => {
  const token = result.token;
  if (token) {
    browser.tabs.query(
      {currentWindow: true, active: true},
      (tabs) => {
        const tab = tabs[0];
        document.getElementById('saver').src =
          "https://feedbin.com/pages?url=" +
          encodeURIComponent(tab.url) +
          "&title=" +
          encodeURIComponent(tab.title) +
          "&page_token=" +
          encodeURIComponent(token);
        document.getElementById('text').innerText = "Page sent to Feedbin";
        setTimeout(() => window.close(), 2500);
      }
    );
  } else {
    document.body.classList.add('show-options');
  }
});

document.getElementById('options-button').addEventListener('click', () => {
  browser.runtime.openOptionsPage();
});
