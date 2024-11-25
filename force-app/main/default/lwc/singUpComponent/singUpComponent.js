import { LightningElement, track } from 'lwc';
import signUp from '@salesforce/apex/UserController.signUp';

export default class SignUp extends LightningElement {
    @track email;
    @track password;

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    async handleSignUp() {
        try {
            const result = await signUp({ email: this.email, password: this.password });
            console.log('User signed up:', result);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }
}
