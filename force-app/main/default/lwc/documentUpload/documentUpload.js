import { LightningElement } from 'lwc';

export default class DocumentUpload extends LightningElement {
    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        console.log('Uploaded Files:', uploadedFiles);
    }
}
