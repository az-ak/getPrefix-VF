@isTest
public class getPrefixTest {
    public static testMethod void testMyController() {
        getPrefix controller = new getPrefix();
        List<String> MyList = controller.getpfx().get('001');
        System.assertEquals('Account',MyList[0]);
    }
}