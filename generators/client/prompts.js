
module.exports = {
    askForClient,
    askForE2eTestsFramework
};

function askForClient(meta) {
    if (!meta && this.existingProject) return;

    const applicationType = this.applicationType;

    const choices = [
        {
            value: 'vue',
            name: 'Vue.js'
        }
    ];

    const PROMPT = {
        type: 'list',
        name: 'clientFramework',
        when: () => (applicationType !== 'microservice' && applicationType !== 'uaa'),
        message: () => 'Which *Framework* would you like to use for the client?',
        choices,
        default: 'vue'
    };

    if (meta) return PROMPT; // eslint-disable-line consistent-return

    const done = this.async();

    this.prompt(PROMPT).then((prompt) => {
        this.clientFramework = prompt.clientFramework;
        done();
    });
}

function askForE2eTestsFramework(meta) {
    if (!meta && this.existingProject) return;

    const choices = [
        {
            value: 'cypress',
            name: 'Cypress'
        }
    ];

    const PROMPT = {
        type: 'checkbox',
        name: 'e2eTestsFramework',
        message: () => 'Which *Framework* would you like to use for e2e testing?',
        choices,
        default: []
    };

    if (meta) return PROMPT; // eslint-disable-line consistent-return

    const done = this.async();

    this.prompt(PROMPT).then((prompt) => {
        this.e2eTestsFramework = prompt.e2eTestsFramework;
        done();
    });
}
