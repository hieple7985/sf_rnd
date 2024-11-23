import { LightningElement, track } from 'lwc';

export default class LoginComponent extends LightningElement {
    @track username = '';
    @track password = '';
    @track errorMessage = '';

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleLogin() {
        if (!this.username || !this.password) {
            this.errorMessage = 'Vui lòng nhập tên người dùng và mật khẩu!';
            return;
        }

        // Xử lý đăng nhập
        this.errorMessage = ''; // Xóa lỗi cũ nếu có
        console.log(`Tên người dùng: ${this.username}, Mật khẩu: ${this.password}`);

        // Giả lập xác thực
        if (this.username === 'admin' && this.password === '12345') {
            alert('Đăng nhập thành công!');
        } else {
            this.errorMessage = 'Tên người dùng hoặc mật khẩu không đúng.';
        }
    }
}