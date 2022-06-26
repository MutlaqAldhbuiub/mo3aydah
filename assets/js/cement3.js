var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var imageWidth = 1080;
var imageHeight = 1920;

var imageObj = new Image(imageWidth,imageHeight);

imageObj.onload = function(){
    context.drawImage(imageObj, 0, 0);
}

function DownloadCanvasAsImage(){
    let imageName = "moa3aydah.png";
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', imageName);
    let canvas = document.getElementById('myCanvas');
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });
}

imageObj.src = "assets/images/3conv.png"; 

var downloadCardButton = document.getElementById('downloadCard');
downloadCardButton.addEventListener('click', function(e){
    e.preventDefault();
    // clear canvas from text and draw image
    context.clearRect(0, 0, imageWidth, imageHeight);
    context.drawImage(imageObj, 0, 0);

    var text = document.getElementById('name').value;
    var position = document.getElementById('position').value;

    // custom font
    context.textAlign = 'right';
    context.font = "50pt iwan";

    // text color
    context.fillStyle = '#FFFFFF';

    // center and make text
    textWidth = (imageWidth - imageWidth / 1.70)
    textHeight = (imageHeight - 200)

    // fill name text
    context.fillText(text, textWidth, textHeight);

    context.font = "40pt iwan";
    // center and make position
    positionWidth = (imageWidth - imageWidth / 1.65)
    positionHeight = (imageHeight - 150)
    
    // fill the position name
    context.fillText(position, positionWidth, positionHeight);

   
    document.getElementById('name').value = "";
    document.getElementById('position').value = "";

    // download the image
    DownloadCanvasAsImage();
});


