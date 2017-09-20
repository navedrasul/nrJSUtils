// Define the Library Object.
window.nrJSUtil = (function(){
  
    var nrJSUtil = {};
  
    nrJSUtil.name = "nrJSUtil";
    nrJSUtil.desc = "Naved Rasul JavaScript Utility Library Object";
    nrJSUtil.ver = "1.0.0";
  
    nrJSUtil.isDefined = function(x) {
        return (typeof maybeObject != "undefined");
        }
    };
  
    return nrJSUtil;
  
})();

// Defined shortened alias "nru" for "nrJSUtil".
if (!nrJSUtil.isDefined(nru)) {
    window.nru = nrJSUtil;
}
