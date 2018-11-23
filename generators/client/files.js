/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const utils = require('./utils');

module.exports = {
    writeFiles
};

function writeFiles() {
    // Dependency management files
    this.template('package.json.ejs', 'package.json');
    this.template('tsconfig.json.ejs', 'tsconfig.json');

    this.copy('.babelrc', '.babelrc');
    this.copy('.postcssrc.js', '.postcssrc.js');
    this.copy('.eslintrc.json', '.eslintrc.json');

    // Config files
    this.copy('config/index.js', 'config/index.js');
    this.copy('config/dev.env.js', 'config/dev.env.js');
    this.copy('config/prod.env.js', 'config/prod.env.js');

    // Webpack config files
    this.copy('webpack/vue.utils.js', 'webpack/vue.utils.js');
    this.template('webpack/utils.js.ejs', 'webpack/utils.js');
    this.copy('webpack/loader.conf.js', 'webpack/loader.conf.js');
    this.copy('webpack/webpack.common.js', 'webpack/webpack.common.js');
    this.template('webpack/webpack.dev.js.ejs', 'webpack/webpack.dev.js');
    this.template('webpack/webpack.prod.js.ejs', 'webpack/webpack.prod.js');

    // Images
    this.copy('webapp/content/images/hipster.png', 'src/main/webapp/content/images/hipster.png');
    this.copy('webapp/content/images/hipster2x.png', 'src/main/webapp/content/images/hipster2x.png');
    this.copy('webapp/content/images/hipster192.png', 'src/main/webapp/content/images/hipster192.png');
    this.copy('webapp/content/images/hipster256.png', 'src/main/webapp/content/images/hipster256.png');
    this.copy('webapp/content/images/hipster384.png', 'src/main/webapp/content/images/hipster384.png');
    this.copy('webapp/content/images/hipster512.png', 'src/main/webapp/content/images/hipster512.png');
    this.copy('webapp/content/images/logo-jhipster.png', 'src/main/webapp/content/images/logo-jhipster.png');

    // App files
    this.copy('webapp/index.html', 'src/main/webapp/index.html');
    this.copy('webapp/app/App.vue', 'src/main/webapp/app/App.vue');
    this.copy('webapp/app/App.component.ts', 'src/main/webapp/app/App.component.ts');
    this.copy('webapp/app/shims-vue.d.ts', 'src/main/webapp/app/shims-vue.d.ts');
    this.copy('webapp/app/constants.ts', 'src/main/webapp/app/constants.ts');
    this.template('webapp/app/main.ts.ejs', 'src/main/webapp/app/main.ts');
    this.copy('webapp/app/shared/config.ts', 'src/main/webapp/app/shared/config.ts');
    this.template('webapp/app/router/index.ts.ejs', 'src/main/webapp/app/router/index.ts');
    this.copy('webapp/app/locale/LanguageService.vue', 'src/main/webapp/app/locale/LanguageService.vue');
    this.copy('webapp/app/locale/TranslationService.vue', 'src/main/webapp/app/locale/TranslationService.vue');
    this.copy('webapp/app/components/home/Home.vue', 'src/main/webapp/app/components/home/Home.vue');
    this.copy('webapp/app/components/home/Home.component.ts', 'src/main/webapp/app/components/home/Home.component.ts');
    this.copy('webapp/app/components/jhi-footer/JhiFooter.vue', 'src/main/webapp/app/components/jhi-footer/JhiFooter.vue');
    this.copy('webapp/app/components/jhi-footer/JhiFooter.component.ts', 'src/main/webapp/app/components/jhi-footer/JhiFooter.component.ts');
    this.template('webapp/app/components/jhi-navbar/JhiNavbar.vue.ejs', 'src/main/webapp/app/components/jhi-navbar/JhiNavbar.vue');
    this.copy('webapp/app/components/jhi-navbar/JhiNavbar.component.ts', 'src/main/webapp/app/components/jhi-navbar/JhiNavbar.component.ts');
    this.copy('webapp/app/components/ribbon/Ribbon.vue', 'src/main/webapp/app/components/ribbon/Ribbon.vue');
    this.copy('webapp/app/components/ribbon/Ribbon.component.ts', 'src/main/webapp/app/components/ribbon/Ribbon.component.ts');
    this.copy('webapp/app/components/account/change-password/ChangePassword.vue', 'src/main/webapp/app/components/account/change-password/ChangePassword.vue');
    this.copy('webapp/app/components/account/change-password/ChangePassword.component.ts', 'src/main/webapp/app/components/account/change-password/ChangePassword.component.ts');
    this.copy('webapp/app/components/account/change-password/change-password.component.test.ts', 'src/main/webapp/app/components/account/change-password/change-password.component.test.ts');
    this.copy('webapp/app/components/account/login-form/LoginForm.vue', 'src/main/webapp/app/components/account/login-form/LoginForm.vue');
    this.template('webapp/app/components/account/login-form/LoginForm.component.ts.ejs', 'src/main/webapp/app/components/account/login-form/LoginForm.component.ts');
    this.copy('webapp/app/components/account/LoginModalService.vue', 'src/main/webapp/app/components/account/LoginModalService.vue');
    this.template('webapp/app/components/account/Principal.vue.ejs', 'src/main/webapp/app/components/account/Principal.vue');
    this.copy('webapp/app/components/account/register/Register.vue', 'src/main/webapp/app/components/account/register/Register.vue');
    this.copy('webapp/app/components/account/register/Register.component.ts', 'src/main/webapp/app/components/account/register/Register.component.ts');
    this.copy('webapp/app/components/account/RegisterService.vue', 'src/main/webapp/app/components/account/RegisterService.vue');
    this.copy('webapp/app/components/account/reset-password/ResetPassword.vue', 'src/main/webapp/app/components/account/reset-password/ResetPassword.vue');
    this.copy('webapp/app/components/account/reset-password/ResetPassword.component.ts', 'src/main/webapp/app/components/account/reset-password/ResetPassword.component.ts');
    this.copy('webapp/app/components/account/sessions/Sessions.vue', 'src/main/webapp/app/components/account/sessions/Sessions.vue');
    this.copy('webapp/app/components/account/sessions/Sessions.component.ts', 'src/main/webapp/app/components/account/sessions/Sessions.component.ts');
    this.copy('webapp/app/components/account/settings/Settings.vue', 'src/main/webapp/app/components/account/settings/Settings.vue');
    this.copy('webapp/app/components/account/settings/Settings.component.ts', 'src/main/webapp/app/components/account/settings/Settings.component.ts');
    this.copy('webapp/app/components/account/settings/settings.component.test.ts', 'src/main/webapp/app/components/account/settings/settings.component.test.ts');
    this.copy('webapp/app/shared/date/filters.ts', 'src/main/webapp/app/shared/date/filters.ts');
    this.template('webapp/app/config/axios-interceptor.ts.ejs', 'src/main/webapp/app/config/axios-interceptor.ts');
    this.template('webapp/app/components/admin/user-management/UserManagement.vue.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagement.vue');
    this.template('webapp/app/components/admin/user-management/UserManagement.component.ts.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagement.component.ts');
    this.template('webapp/app/components/admin/user-management/UserManagementView.vue.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagementView.vue');
    this.template('webapp/app/components/admin/user-management/UserManagementView.component.ts.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagementView.component.ts');
    this.template('webapp/app/components/admin/user-management/UserManagementEdit.vue.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagementEdit.vue');
    this.template('webapp/app/components/admin/user-management/UserManagementEdit.component.ts.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagementEdit.component.ts');
    this.template('webapp/app/components/admin/user-management/UserManagementService.vue.ejs', 'src/main/webapp/app/components/admin/user-management/UserManagementService.vue');
    this.template('webapp/app/components/admin/user-management/user-management.component.test.ts', 'src/main/webapp/app/components/admin/user-management/user-management.component.test.ts');
    this.template('webapp/app/components/admin/user-management/user-management-view.component.test.ts', 'src/main/webapp/app/components/admin/user-management/user-management-view.component.test.ts');
    this.template('webapp/app/components/admin/user-management/user-management-edit.component.test.ts.ejs', 'src/main/webapp/app/components/admin/user-management/user-management-edit.component.test.ts');
    this.template('webapp/app/components/admin/configuration/Configuration.vue.ejs', 'src/main/webapp/app/components/admin/configuration/Configuration.vue');
    this.template('webapp/app/components/admin/configuration/Configuration.component.ts.ejs', 'src/main/webapp/app/components/admin/configuration/Configuration.component.ts');
    this.template('webapp/app/components/admin/configuration/ConfigurationService.vue.ejs', 'src/main/webapp/app/components/admin/configuration/ConfigurationService.vue');
    this.template('webapp/app/components/admin/configuration/configuration.component.test.ts', 'src/main/webapp/app/components/admin/configuration/configuration.component.test.ts');
    this.template('webapp/app/components/admin/docs/Docs.vue.ejs', 'src/main/webapp/app/components/admin/docs/Docs.vue');
    this.template('webapp/app/components/admin/docs/Docs.component.ts.ejs', 'src/main/webapp/app/components/admin/docs/Docs.component.ts');
    this.template('webapp/app/components/admin/health/Health.vue.ejs', 'src/main/webapp/app/components/admin/health/Health.vue');
    this.template('webapp/app/components/admin/health/Health.component.ts.ejs', 'src/main/webapp/app/components/admin/health/Health.component.ts');
    this.template('webapp/app/components/admin/health/HealthModal.vue.ejs', 'src/main/webapp/app/components/admin/health/HealthModal.vue');
    this.template('webapp/app/components/admin/health/HealthService.vue.ejs', 'src/main/webapp/app/components/admin/health/HealthService.vue');
    this.template('webapp/app/components/admin/health/health.component.test.ts', 'src/main/webapp/app/components/admin/health/health.component.test.ts');
    this.template('webapp/app/components/admin/logs/Logs.vue.ejs', 'src/main/webapp/app/components/admin/logs/Logs.vue');
    this.template('webapp/app/components/admin/logs/Logs.component.ts.ejs', 'src/main/webapp/app/components/admin/logs/Logs.component.ts');
    this.template('webapp/app/components/admin/logs/LogsService.vue.ejs', 'src/main/webapp/app/components/admin/logs/LogsService.vue');
    this.template('webapp/app/components/admin/logs/logs.component.test.ts', 'src/main/webapp/app/components/admin/logs/logs.component.test.ts');
    this.template('webapp/app/components/admin/audits/Audits.vue.ejs', 'src/main/webapp/app/components/admin/audits/Audits.vue');
    this.template('webapp/app/components/admin/audits/Audits.component.ts.ejs', 'src/main/webapp/app/components/admin/audits/Audits.component.ts');
    this.template('webapp/app/components/admin/audits/AuditsService.vue.ejs', 'src/main/webapp/app/components/admin/audits/AuditsService.vue');
    this.template('webapp/app/components/admin/audits/audits.component.test.ts', 'src/main/webapp/app/components/admin/audits/audits.component.test.ts');
    this.template('webapp/app/components/admin/metrics/Metrics.vue.ejs', 'src/main/webapp/app/components/admin/metrics/Metrics.vue');
    this.template('webapp/app/components/admin/metrics/Metrics.component.ts.ejs', 'src/main/webapp/app/components/admin/metrics/Metrics.component.ts');
    this.template('webapp/app/components/admin/metrics/MetricsService.vue.ejs', 'src/main/webapp/app/components/admin/metrics/MetricsService.vue');
    this.template('webapp/app/components/admin/metrics/metrics.component.test.ts', 'src/main/webapp/app/components/admin/metrics/metrics.component.test.ts');
    this.template('webapp/app/components/admin/metrics/MetricsModal.vue.ejs', 'src/main/webapp/app/components/admin/metrics/MetricsModal.vue');
    this.template('webapp/app/components/admin/metrics/Metrics.modal.component.ts.ejs', 'src/main/webapp/app/components/admin/metrics/Metrics.modal.component.ts');
    this.template('webapp/app/components/admin/metrics/metrics.modal.component.test.ts', 'src/main/webapp/app/components/admin/metrics/metrics.modal.component.test.ts');
    if (this.applicationType === 'gateway' && this.serviceDiscoveryType) {
        this.template('webapp/app/components/admin/gateway/Gateway.vue.ejs', 'src/main/webapp/app/components/admin/gateway/Gateway.vue');
        this.template('webapp/app/components/admin/gateway/Gateway.component.ts.ejs', 'src/main/webapp/app/components/admin/gateway/Gateway.component.ts');
        this.template('webapp/app/components/admin/gateway/GatewayService.vue.ejs', 'src/main/webapp/app/components/admin/gateway/GatewayService.vue');
        this.template('webapp/app/components/admin/gateway/gateway.component.test.ts', 'src/main/webapp/app/components/admin/gateway/gateway.component.test.ts');
    }
    if (this.websocket === 'spring-websocket') {
        this.template('webapp/app/components/admin/tracker/Tracker.vue.ejs', 'src/main/webapp/app/components/admin/tracker/Tracker.vue');
        this.template('webapp/app/components/admin/tracker/Tracker.component.ts.ejs', 'src/main/webapp/app/components/admin/tracker/Tracker.component.ts');
        this.template('webapp/app/components/admin/tracker/TrackerService.vue.ejs', 'src/main/webapp/app/components/admin/tracker/TrackerService.vue');
    }
    this.template('webapp/app/shared/ItemCount.vue.ejs', 'src/main/webapp/app/shared/ItemCount.vue');

    utils.addLanguagesToApplication(this);
    utils.addLanguagesToWebPackConfiguration(this);

    if (!this.enableTranslation) {
        utils.replaceTranslation(this, ['app/App.vue',
            'app/components/home/Home.vue',
            'app/components/jhi-footer/JhiFooter.vue',
            'app/components/jhi-navbar/JhiNavbar.vue',
            'app/components/ribbon/Ribbon.vue',
            'app/components/account/change-password/ChangePassword.vue',
            'app/components/account/login-form/LoginForm.vue',
            'app/components/account/register/Register.vue',
            'app/components/account/reset-password/ResetPassword.vue',
            'app/components/account/sessions/Sessions.vue',
            'app/components/account/settings/Settings.vue',
            'app/components/admin/user-management/UserManagement.vue',
            'app/components/admin/user-management/UserManagementView.vue',
            'app/components/admin/user-management/UserManagementEdit.vue',
            'app/components/admin/configuration/Configuration.vue',
            'app/components/admin/health/Health.vue',
            'app/components/admin/logs/Logs.vue',
            'app/components/admin/metrics/Metrics.vue',
            'app/components/admin/metrics/MetricsModal.vue',
            'app/components/admin/audits/Audits.vue'
        ]);
        if (this.applicationType === 'gateway' && this.serviceDiscoveryType) {
            utils.replaceTranslation(this, ['app/components/admin/gateway/Gateway.vue']);
        }
        if (this.websocket === 'spring-websocket') {
            utils.replaceTranslation(this, ['app/components/admin/tracker/Tracker.vue']);
        }
    }
}
