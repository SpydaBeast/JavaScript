/**
 * Created by Brien on 9/8/2016.
 */
var f = document.getElementById('image');
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var extents =
{
    tlX: 0, tlY: 0,  //top-left-x & y
    trX: 0, trY: 0,  //top-right-x & y...

    blX: 0, blY: 0,
    brX: 0, brY: 0
};

/**************Comment by Brien Calloway date: 9/8/2016**********************************/
/********This code block is not supported in my idea - I'm running intellJ 15.0.2********

var resizers =``				//this OBJECT will hold the coordinates of
{												//the draggers for the crop rectangle
    ulX: 0, ulY: 0,
    umX: 0, umY: 0,
    urX: 0, urY: 0,

    mlX: 0, mlY: 0,
    mmX: 0, mmY: 0,
    mrX: 0, mrY: 0,

    llX: 0, llY: 0,
    lmX: 0, lmY: 0,
    lrX: 0, lrY: 0
}
/***************************************************************************************/


f.addEventListener('change',function(evt){
    var reader = new FileReader();
    var img = document.createElement('img');

    reader.addEventListener('load',function(){
        img.src = reader.result;
        var w = img.width;
        var h = img.height;
        prepareCanvas(w,h,img);
    })

    reader.readAsDataURL(evt.target.files[0]);

    console.log(evt.target.files[0]);

});

function prepareCanvas(w, h, imgNode){

    //vars used to center the image
    var imgWidth, imgHeight;
    var offsetX, offsetY;
    var cWidth = c.width;
    var cHeight = c.height;
    var ratio = w/h;	//aspect ratio


    ctx.clearRect(0,0,cWidth,cHeight);

    //We need to layout the image in the canvas based on
    //the aspect ratio of the image. This will also help with
    //our picture extends for the crop.
    if(ratio > 1){   //this means width > height
        imgWidth = cWidth;
        imgHeight = imgWidth / ratio;
        offsetX = 0;
        offsetY = (cHeight - imgHeight) / 2;
    } else {
        imgHeight = cHeight;
        imgWidth = imgHeight * ratio;
        offsetX = (cWidth - imgWidth) / 2;
        offsetY = 0;
    }
    //ctx.clearRect(0,0,400,400);
    ctx.drawImage(imgNode, offsetX, offsetY, imgWidth, imgHeight);
}