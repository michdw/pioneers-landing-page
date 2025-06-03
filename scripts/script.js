const { useSyncExternalStore } = require("react");

$(document).ready(function () {
    $('#mailform').load('components/mailform.html')
});

$(window).load(function() {
    $('#loading-screen').delay(250).fadeOut(0)
})