public class getPrefix {
    public Map<String, List<String>> getpfx() {
        Map<String, List<String>> pfx = new Map<String, List<String>>();
        for (SObjectType tmp : Schema.getGlobalDescribe().values()){
            if ( tmp.getDescribe().getKeyPrefix() != null) {
                List<String> MyList = new List<String>();
                MyList.add(tmp.getDescribe().getName());
                MyList.add(tmp.getDescribe().getLabel());
                pfx.put(tmp.getDescribe().getKeyPrefix(), MyList);
            }
        }
        return pfx;
    }
}