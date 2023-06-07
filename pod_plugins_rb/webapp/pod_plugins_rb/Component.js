sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("sap.custom.plugin.pod_plugins_rb.pod_plugins_rb.pod_plugins_rb.Component", {
		metadata: {
			manifest: "json"
		}
	});
});