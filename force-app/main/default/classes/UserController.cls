public with sharing class UserController {
  @AuraEnabled
  public static String signUp(String email, String password) {
    // Your sign-up logic here
    return 'Success';
  }
}
