public with sharing class UserController {
    @AuraEnabled
    public static User signUp(String email, String password) {
        // Tạo người dùng mới
        User newUser = new User();
        newUser.Email = email;
        newUser.Username = email; // Username phải duy nhất
        newUser.Alias = email.substring(0, 5); // Alias ngắn
        newUser.FirstName = 'Default'; // Có thể thay đổi
        newUser.LastName = 'User'; // Có thể thay đổi
        newUser.ProfileId = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1].Id; // Chọn Profile

        // Mã hóa mật khẩu
        String encodedPassword = UserManagement.encodePassword(password);
        newUser.Password = encodedPassword;

        try {
            insert newUser;
            return newUser;
        } catch (Exception e) {
            throw new AuraHandledException('Error creating user: ' + e.getMessage());
        }
    }

    @AuraEnabled
    public static User login(String email, String password) {
        // Kiểm tra thông tin đăng nhập
        User loggedInUser = [SELECT Id, Email, FirstName, LastName FROM User WHERE Email = :email AND Password = :password LIMIT 1];
        return loggedInUser;
    }

    @AuraEnabled
    public static void logout() {
        // Logic để đăng xuất (thường không cần thiết trong Salesforce)
    }

    @AuraEnabled
    public static User getUserProfile(String userId) {
        // Lấy thông tin người dùng
        return [SELECT Id, Email, FirstName, LastName FROM User WHERE Id = :userId LIMIT 1];
    }
}
