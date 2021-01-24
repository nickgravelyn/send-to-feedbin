# Send to Feedbin

Send pages to Feedbin to read later from Edge and Firefox.


## Installing like a developer

1. Clone or download the repo and extract it somewhere permanent, like your Documents or something.
2. Install into your browser:
    1. If Edge:
        1. Go to `edge://extensions` and enable Developer Mode.
        2. Click on "Load unpacked" near the top and choose the `build/edge` folder in the repo.
    2. If Firefox:
        1. Go to `about:debugging` and click on "This Firefox" on the left.
        2. Click on "Load Temporary Add-on..." and choose the `build/firefox` folder in the repo.
3. Once you have the Feedbin icon in your menu bar, click on it and it'll give you a button to configure the token.
4. Follow those instructions to configure your token.
5. Whenever you want to save a page, just click on the Feedbin button.


## Building

If you're making changes, do so in the root files (i.e. not in the `build` folder). Make sure you have Node installed and then run `npm run build` to generate the build files. You can then reload the extension in your browser to see the changes.


## Notes

All code is available under MIT License.

I'm not affiliated with Feedbin in any way; I just like their service and wanted to send pages using an extension rather than a bookmarklet because I don't use bookmark bars.

This probably works fine in Chrome since Edge is basically Chrome these days, but I don't use it so I haven't tested it.
