@isTest
public class getPrefixTest {
    public static testMethod void testMyController() {
        List<String> MyList = getPrefix.getpfx().get('001');
        System.assertEquals('Account',MyList[0]);
    }
}