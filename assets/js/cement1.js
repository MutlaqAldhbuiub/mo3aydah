var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var imageWidth = 1080;
var imageHeight = 1920;

var imageObj = new Image(imageWidth,imageHeight);

imageObj.onload = function()
{
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

imageObj.src = "assets/images/1conv.png"; 

var downloadCardButton = document.getElementById('downloadCard');
downloadCardButton.addEventListener('click', function(e){
    e.preventDefault();
    // clear canvas from text and draw image
    context.clearRect(0, 0, imageWidth, imageHeight);
    context.drawImage(imageObj, 0, 0);

    var text = document.getElementById('name').value;
    var position = document.getElementById('position').value;

    // custom font
    context.textAlign = 'center';
    context.font = "65pt iwan";

    // text color
    context.fillStyle = '#3B3C3B';

    // center and make text
    textWidth = (imageWidth - imageWidth / 2)
    textHeight = (imageHeight - 1300)

    // fill name text
    context.fillText(text, textWidth, textHeight);

    context.font = "45pt iwan";
    // center and make position
    positionWidth = (imageWidth - imageWidth / 2)
    positionHeight = (imageHeight - 1230)
    
    // fill the position name
    context.fillText(position, positionWidth, positionHeight);

   
    document.getElementById('name').value = "";
    document.getElementById('position').value = "";

    // download the image
    DownloadCanvasAsImage();
});


