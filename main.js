canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
img_width=675;
img_height=550;

var img_image;

img_x = 100;
img_y=100;

function add()
{
    img_imgTag= new Image();
    img_imgTag.onload=uploading;
    img_imgTag.src=img_image
}

function uploading()
{
    ctx.drawImage(img_imgTag,img_x,img_y,img_width,img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
     
    if((keyPressed >=97 && keyPressed<=122)||(keyPressed>=65 && keyPressed<=90)){

        alphabetkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Alphabet Key";
        console.log("alphabet key")


    }
    else{
        otherkey();
        document.getElementById("keypressedrem").innerHTML="You pressed a symbol or an other key";
        console.log("other keys")


    }
    if(keyPressed >=48 && keyPressed<=57){

        numkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Number Key";
        console.log("number key")


    }
    if(keyPressed >=37 && keyPressed<=40){

        arrowkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Arrow Key";
        console.log("arrow key")


    }
    if(keyPressed==17){
        splkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Arrow Key";
        console.log("special key")
    }
    if(keyPressed==18){
        splkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Arrow Key";
        console.log("special key")
    }
    if(keyPressed==27){
        splkey();
        document.getElementById("keypressedrem").innerHTML="You Pressed Arrow Key";
        console.log("special key")
    }
    
   

    

        

    
    
  
    
}
function alphabetkey()
{
img_image="ALPHABET KEY.png";
add();

}

function numkey()
{
img_image="NUMBER KEY.png";
add();

}

function arrowkey()
{
img_image="ARROW KEY.png";
add();

}

function splkey()
{
img_image="SPECIAL KEY.png";
add();

}

function otherkey()
{
img_image="OTHER KEYS.png";
add();

}