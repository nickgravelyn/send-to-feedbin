const package = require('./package.json');
const manifestBase = require('./manifest.json');
const fse = require('fs-extra');

const BUILD_DIR = 'build';

// This is kind of wasteful but we're not cloning very large objects
const deepCopyJson = (obj) => JSON.parse(JSON.stringify(obj));

const createForBrowser = async (browser) => {
  process.stdout.write(`Publishing for ${browser}...`);

  const base = `${BUILD_DIR}/${browser}`;

  await fse.emptyDir(base);
  await fse.copy('icons', `${base}/icons`);
  await fse.copy('options', `${base}/options`);
  await fse.copy('popup', `${base}/popup`);
  await fse.copy('LICENSE', `${base}/LICENSE`);

  const manifest = deepCopyJson(manifestBase);
  manifest.version = package.version;

  if (browser !== 'firefox') {
    delete manifest.browser_specific_settings;
  }

  await fse.writeJson(`${base}/manifest.json`, manifest, {spaces: 2});

  process.stdout.write(" Done!\n");
};

const build = async () => {
  await fse.emptyDir(BUILD_DIR);
  await createForBrowser('edge');
  await createForBrowser('firefox');
};

build();
