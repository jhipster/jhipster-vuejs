import RegisterService from '../RegisterService.vue';
import LoginModalService from '../LoginModalService.vue';
import TranslationService from '../../../locale/TranslationService.vue';
import { required, minLength, maxLength, helpers, email } from 'vuelidate/lib/validators';
import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from '../../../constants';

const loginPattern = helpers.regex('alpha', /^[_.@A-Za-z0-9-]*$/);

const Register = {
    name: 'Register',
    mixins: [RegisterService, LoginModalService, TranslationService],
    data() {
        return {
            confirmPassword: undefined,
            doNotMatch: undefined,
            error: undefined,
            errorEmailExists: undefined,
            errorUserExists: undefined,
            registerAccount: {
                login: undefined,
                email: undefined,
                password: undefined
            },
            success: false
        };
    },
    validations: {
        registerAccount: {
            login: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(50),
                pattern: loginPattern
            },
            email: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(254),
                email
            },
            password: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(254)
            }
        },
        confirmPassword: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(254)
        }
    },
    methods: {
        register: function() {
            if (this.registerAccount.password !== this.confirmPassword) {
                this.doNotMatch = 'ERROR';
            } else {
                this.doNotMatch = null;
                this.error = null;
                this.errorUserExists = null;
                this.errorEmailExists = null;
                this.registerAccount.langKey = this.currentLanguage;
                this.processRegistration(this.registerAccount)
                    .then(response => {
                        this.success = true;
                    })
                    .catch(error => {
                        this.success = null;
                        if (error.response.status === 400 && error.response.data.type === LOGIN_ALREADY_USED_TYPE) {
                            this.errorUserExists = 'ERROR';
                        } else if (error.response.status === 400 && error.response.data.type === EMAIL_ALREADY_USED_TYPE) {
                            this.errorEmailExists = 'ERROR';
                        } else {
                            this.error = 'ERROR';
                        }
                    });
            }
        }
    }
};

export default Register;
