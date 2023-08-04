const { Transformer } = require('@parcel/plugin');
const DtsCreator = require('typed-css-modules').default;
const fs = require('fs');

module.exports = new Transformer({
    async loadConfig({ config }) {
        let { contents } = (await config.getConfig(['tcm.config.json'])) || {};
        return contents;
    },
    async transform({ asset, config }) {
        const creator = new DtsCreator(config);

        const cssFilePath = asset.filePath;
        const tsxFilePath = cssFilePath.replace(".module.scss", '.tsx');

        if (fs.existsSync(tsxFilePath)) {
            let code = await asset.getCode();
            await (await creator.create(cssFilePath, code, true)).writeFile();
        }

        return [asset];
    },
    config: {},
});
