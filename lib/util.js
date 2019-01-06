utilObj = {
  screenSize () {
    var width = window.screen.width;
    var height = window.screen.height;
    return { width: width, height: height } 
  }
};
module.exports = utilObj;