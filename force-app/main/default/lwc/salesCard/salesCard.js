import { LightningElement, api } from 'lwc';

export default class SalesCard extends LightningElement {
    // Các thuộc tính để nhận dữ liệu từ bên ngoài
    @api productName;
    @api productDescription;
    @api productPrice;
    @api productImage;

    // Xử lý sự kiện "Mua ngay"
    handleBuyNow() {
        alert(`Bạn đã chọn mua: ${this.productName}`);
        // Gửi event để thông báo
        const buyEvent = new CustomEvent('buynow', {
            detail: { productName: this.productName }
        });
        this.dispatchEvent(buyEvent);
    }

    // Xử lý sự kiện "Thêm vào giỏ hàng"
    handleAddToCart() {
        alert(`Đã thêm sản phẩm vào giỏ hàng: ${this.productName}`);
        const addToCartEvent = new CustomEvent('addtocart', {
            detail: { productName: this.productName }
        });
        this.dispatchEvent(addToCartEvent);
    }
}
