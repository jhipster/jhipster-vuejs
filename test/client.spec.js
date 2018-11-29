const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const constants = require('generator-jhipster/generators/generator-constants');
const VueJSClientGenerator = require('../generators/client/index');

const CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;

const expectedFiles = {
    i18nJson: [
        `${CLIENT_MAIN_SRC_DIR}i18n/en/activate.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/audits.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/configuration.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/error.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/health.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/login.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/logs.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/home.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/metrics.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/password.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/register.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/sessions.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/settings.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/reset.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/en/user-management.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/activate.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/audits.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/configuration.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/error.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/global.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/health.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/login.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/logs.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/home.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/metrics.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/password.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/register.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/sessions.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/settings.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/reset.json`,
        `${CLIENT_MAIN_SRC_DIR}i18n/fr/user-management.json`
    ]
};

describe('JHipster client generator with blueprint', () => {
    const blueprintNames = ['generator-jhipster-vuejs', 'vuejs'];


    blueprintNames.forEach((blueprintName) => {
        describe(`generate client with blueprint option '${blueprintName}'`, () => {
            before((done) => {
                helpers
                    .run(path.join(__dirname, '../node_modules/generator-jhipster/generators/client'))
                    .withOptions({
                        'from-cli': true,
                        build: 'gradle',
                        auth: 'jwt',
                        db: 'mysql',
                        skipInstall: true,
                        blueprint: blueprintName,
                        skipChecks: true
                    })
                    .withGenerators([[VueJSClientGenerator, 'jhipster-vuejs:client']])
                    .withPrompts({
                        baseName: 'jhipster',
                        clientFramework: 'VueJS',
                        useSass: false,
                        enableTranslation: true,
                        nativeLanguage: 'en',
                        languages: ['fr']
                    })
                    .on('end', done());
            });

            it('creates expected files from jhipster client generator', () => {
                // assert.file(expectedFiles.client);
                assert.file(expectedFiles.i18nJson);
            });

            it('contains the specific change added by the blueprint', () => {
                assert.fileContent('package.json', '"vue"');
                assert.fileContent('package.json', '"vuex"');
                assert.fileContent('package.json', '"vuelidate"');
            });
        });
    });
});
