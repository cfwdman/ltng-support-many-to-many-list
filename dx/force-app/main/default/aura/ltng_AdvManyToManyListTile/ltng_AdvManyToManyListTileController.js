({
	init : function(component, event, helper){
			//console.info('Component initialized');
			helper.noop();
	},

	handleObjectClick : function(component, event, helper){
		helper.navigateToRecord(component, helper);
	},

	handleJunctionClick : function(component, event, helper){
		helper.navigateToJunction(component, helper);
	}
})