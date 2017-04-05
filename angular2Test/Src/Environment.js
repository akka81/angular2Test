//var tsr:Toastr = require("toastr");
"use strict";
var tsr = require("toastr");
var Utils = (function () {
    function Utils() {
        //toastr configuration
        tsr.options.closeButton = true;
        tsr.options.debug = false;
        tsr.options.newestOnTop = false;
        tsr.options.progressBar = false;
        tsr.options.positionClass = "toast-top-full-width";
        tsr.options.preventDuplicates = false;
        tsr.options.onclick = null;
        tsr.options.showDuration = 300;
        tsr.options.hideDuration = 1000;
        tsr.options.timeOut = 5000;
        tsr.options.extendedTimeOut = 1000;
        tsr.options.showEasing = "swing";
        tsr.options.hideEasing = "linear";
        tsr.options.showMethod = "fadeIn";
        tsr.options.hideMethod = "fadeOut";
        //other global  config
    }
    Utils.getInstance = function () {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }
        return Utils.instance;
    };
    Utils.prototype.writeSuccess = function (mex) {
        tsr.success(mex);
    };
    return Utils;
}());
var environment = (function () {
    function environment() {
    }
    return environment;
}());
environment.utils = Utils.getInstance();
exports.environment = environment;
;
//# sourceMappingURL=Environment.js.map