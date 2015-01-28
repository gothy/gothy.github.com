/**
 * Logging util
 */
function _log() {;
  try {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  } catch(e) {}
}
/**
 * Warnings Logging util
 */
function _warn() {
  try{
    for (var i = 0; i < arguments.length; i++) {
      console.warn(arguments[i]);
    }
  } catch(e) {}
}

/**
 * Errors Logging util
 */
function _err() {
  try {
    for (var i = 0; i < arguments.length; i++) {
      console.error(arguments[i]);
    }
  } catch(e){
    //alert(msg);
  }
}

function enableLogs() {
  window.log = _log;
  window.warn = _warn;
  window.err = _err;
}

function disableLogs() {
  window.log = function () {};
  window.warn = function () {};
  window.err = function () {};
}
