const browser = window.browser || window.chrome;
const tokenInput = document.getElementById('token');
const statusText = document.getElementById('status');

document.getElementById('options-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const color = tokenInput.value;
  browser.storage.sync.set({token: tokenInput.value}, () => {
    statusText.textContent = 'Token saved. You can close this page.';
  });
});

document.getElementById('read-from-bookmarklet-button').addEventListener('click', () => {
  const bookmarklet = tokenInput.value;
  const matches = bookmarklet.match(/page_token=([a-zA-Z0-9]+)/);
  if (matches && matches.length > 1) {
    tokenInput.value = matches[1];
  }
});

browser.storage.sync.get(['token'], (result) => {
  tokenInput.value = result.token || '';
});
