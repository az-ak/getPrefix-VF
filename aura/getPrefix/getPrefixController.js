({
    doInit: function(component, event, helper) {
        var action = component.get('c.getpfx');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Mapのkeyをおさめる空の配列を準備
                var arrayOfKeys = [];
                // Mapとしての戻り値を格納
                var StoreResponse = response.getReturnValue();
                // Map型のattributeにApexからの戻りを設定(子コンポーネントに渡す)
                component.set('v.pfxMap', StoreResponse);
                // 戻り値のMapをループし、keyの配列を作成
                for (var singlekey in StoreResponse) {
                    arrayOfKeys.push(singlekey);
                }
                arrayOfKeys.sort();
                // List型のattributeにkeyの配列を設定
                component.set('v.keyList', arrayOfKeys);
            } else {
                console.debug(response.error[0].message);
            }
        });
        $A.enqueueAction(action);
    },
})