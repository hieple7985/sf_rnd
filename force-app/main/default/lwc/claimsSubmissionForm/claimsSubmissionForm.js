import { LightningElement, track } from 'lwc';

export default class ClaimsSubmissionForm extends LightningElement {
    @track claimDetails = {
        name: '',
        description: '',
    };

    handleInputChange(event) {
        const field = event.target.name;
        this.claimDetails[field] = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Submitting Claim:', this.claimDetails);
    }
}
