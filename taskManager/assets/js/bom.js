const allList = document.querySelectorAll('.collection a');
var values = [
    window.location.href,
    window.location.host,
    window.location.protocol,
    window.location.port,
    window.location.hostname,
    window.navigator.appCodeName,
    window.navigator.appVersion,
    window.navigator.platform,
    window.navigator.language,
    window.navigator.cookieEnabled,
    window.screen.height,
    window.screen.width,
    window.screen.pixelDepth,
    window.history.length,
    window.history.state,
];
// for (let index = 0; index < 15; index++) {
//     values[index] =
// }
allList.forEach((el, index) => {
    el.innerHTML = values[index];
});