({
	doInit : function(component, event, helper) {
        // 全体のMapオブジェクトと表示したいkeyは親コンポーネントから受け取る
        var map = component.get('v.map');
        var key = component.get('v.key');
		// API名とラベルはlistとなっている
        component.set('v.valueList', map[key]);
	},
})