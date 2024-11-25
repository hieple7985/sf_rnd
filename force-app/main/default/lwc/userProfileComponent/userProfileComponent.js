import { LightningElement, api } from 'lwc';

export default class BasicUserProfile extends LightningElement {
    @api userName = 'John Doe'; // Tên người dùng
    @api userTitle = 'Salesforce Developer'; // Tiêu đề/nghề nghiệp
    @api userEmail = 'johndoe@example.com'; // Email người dùng
    @api userPhone = '(123) 456-7890'; // Số điện thoại
    @api userLocation = 'San Francisco, CA'; // Địa điểm
    @api userImage = 'https://lh3.googleusercontent.com/p/AF1QipMbADrsMURHJnXRJdoctA0k4xMprbLlUoWyf4HY=s1360-w1360-h1020';
}
