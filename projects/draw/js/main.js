var canvas;
var canvasScreenShot; //for exporting .png
var imgLoader;

  // Set up the yepnope (Modernizr.load) directives...
  Modernizr.load([
  {
      // Test if Input Range is supported using Modernizr
      test: Modernizr.inputtypes.range,
      // If ranges are not supported, load the slider script and CSS file
      nope: [
          // The slider CSS file
          'libs/slider/fd-slider.mhtml.min.css',
          // The slider JS file
          'libs/slider/fd-slider.js'
      ],
      callback: function(id, testResult) {
          // If the slider file has loaded then fire the onDomReady event
          if("fdSlider" in window && typeof (fdSlider.onDomReady) != "undefined") {
              try { fdSlider.onDomReady(); } catch(err) {};
          };
      }
  }
  ]);
  function init() {

    canvas = new fabric.Canvas('myCanvas');
    canvasScreenShot = document.getElementById("myCanvas");
    drawingMode();
    canvas.contextContainer.strokeStyle = '#555';

    //to make the input color change without having to click confirm
    $("#drawingColor").spectrum({
    clickoutFiresChange: true
    });
  };


  function addSVG(src){
    fabric.loadSVGFromURL(src ,function(objects, options) {

    var shape = fabric.util.groupSVGElements(objects, options);
    canvas.add(shape.scale(0.5));
    shape.set({ left: 100, top: 100 }).setCoords();
    canvas.renderAll();
  });
  }

  function addImage(src){
  fabric.Image.fromURL(src, function(img){
    img.scale(0.5);
    img.set({ left: 100, top: 100 }).setCoords();
    canvas.add(img).setActiveObject(img);
    canvas.renderAll();
  })
  }

  function drawingMode(){
  var drawingMode = document.getElementById('drawingMode');
  var drawingOptions = document.getElementById('drawingOptions');
  var drawingColor = document.getElementById('drawingColor');
  var drawingLineWidth = document.getElementById('drawingLineWidth');

  canvas.freeDrawingColor = drawingColor.value;
  canvas.freeDrawingLineWidth = parseInt(drawingLineWidth.value, 10) || 1;

  if(canvas.isDrawingMode == true){
    canvas.isDrawingMode = false;
    drawingOptions.style.display = 'none';
    drawingMode.innerHTML = 'Enter drawing mode';
  }else {
    canvas.isDrawingMode = true;
    drawingOptions.style.display = '';
     //to make the slider work in browsers not supporting input type range
     if("fdSlider" in window && typeof (fdSlider.onDomReady) != "undefined") {
              fdSlider.redrawAll();
          };
     drawingMode.innerHTML = 'Cancel drawing mode';
  }
      drawingColor.onchange = function() {
        canvas.freeDrawingColor = drawingColor.value;
      };
      drawingLineWidth.onchange = function() {
        canvas.freeDrawingLineWidth = parseInt(drawingLineWidth.value, 10) || 1;
        console.log(drawingLineWidth.value);
      };
  }
  function removeObject() {
    updateExportButton();
    var activeObject = canvas.getActiveObject(),
        activeGroup = canvas.getActiveGroup();
    if (activeObject) {
      canvas.remove(activeObject);
    }
    else if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      canvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
        canvas.remove(object);
      });
    }
  };

  function addOwnImage(){
    imgLoader = document.getElementById("imgLoader");
      imgLoader.onchange = function handleImage(e){
          var reader = new FileReader();
          reader.onload = function(event){
              var imgObj = new Image();
              imgObj.src = event.target.result;
              //fabric js stuff
              imgObj.onload = function(){
                var image = new fabric.Image(imgObj);
                image.set({
                  left:250,
                  top:250,
                });
                image.scaleToWidth(100);
                canvas.add(image);
              }
          }
          reader.readAsDataURL(e.target.files[0]);
        }
  }
  var drawHereExists = true;
  if(drawHereExists == true){
     $('html').mousedown(function() {
        drawhereExists = false;
        var drawHere = document.getElementById('drawHere');
        drawHere.style.display = 'none';
      });
  }