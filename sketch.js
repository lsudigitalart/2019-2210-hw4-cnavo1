function setup( ) {
   createCanvas(800, 600);
   background(100, 88, 70);

    strokeWeight(3)
    stroke(0)
    line(0, -20, 270, 150)//topleftdiagnal
    line(0, 600, 270, 400)//bottomleftdiagnal
    line(270, 150, 270, 400)//leftwallvertical
    line(800, -20, 530, 150)//toprightdiagnal
    line(800, 600, 530, 400)//bottomrightdiagnal
    line(530, 150, 530, 400)//rightwallvertical
    line(270, 150, 530, 150)//tophorizontal
    line(270, 360, 400, 380)//leftfloor
    line(400, 380, 530, 360)//rightfloor
    line(400, 380, 400, 150)//middle line

    fill(143, 124, 96)
    noStroke()
    quad(273, 153, 397, 153, 397, 377, 273, 357)
    quad(403, 153, 527, 153, 527, 357, 403, 377)

    strokeWeight(5)
    stroke(239, 211, 63)
    line( 300, 270, 360, 280)
    line( 300, 270, 320, 260)
    line( 300, 270, 315, 290)
    line( 430, 280, 490, 270)
    line( 490, 270, 475, 260)
    line( 490, 270, 475, 290)

    noStroke()
    fill(255, 154, 0)
    ellipse(146, 229, 30, 50)
    ellipse( 615, 229, 30, 50)
    fill(61, 44, 33)
    triangle(128, 243, 164, 243, 128, 287)
    triangle(630, 243, 594, 243, 630, 287)
   

}

// var leftHallX = ;

function draw() {
    print(mouseX, mouseY);
}

var treasureRoom = false;
var deadEnd = false;

var leftHallX = 331;
var leftHallY = 263;
var leftHallD = 65;

var rightHallX = 464;
var rightHallY = 258;
var rightHallD = 67;

var chestX = 396;
var chestY = 370;
var chestD = 100;

var rightRoomY = 258; //400;
var rightRoomX = 400; //258;
var rightRoomD = 50;



function mousePressed() {
   
    if ( treasureRoom == false && deadEnd == false && dist (mouseX, mouseY, leftHallX, leftHallY) < leftHallD) {
        createCanvas(800, 600);
        background(100, 88, 70);
        stroke(0);
        strokeWeight(3);
        line(0, 600, 270, 400);//bottomleftdiagnal
        line(800, 600, 530, 400);//bottomrightdiagnal
        line(270, 400, 530, 400);//middlefloor
        line(270, 400, 270, 0);//leftvertical
        line(530, 400, 530, 0);
        fill(72, 52, 34);
        stroke(0);
        strokeWeight(2);
        quad( 300, 300, 500, 300, 500, 450, 300, 450);//chest
        strokeWeight(3.5);
        line(300, 360, 500, 360);
        fill(236, 142, 0);
        rect(393, 360, 15, 20);
        treasureRoom = true;
    }


    
    if( treasureRoom == false && deadEnd == false && dist (mouseX, mouseY, rightHallX, rightHallY) < rightHallD) {
        createCanvas(800, 600);
        background(100, 88, 70);
        stroke(0);
        strokeWeight(5);
        line(0, 600, 163, 386);
        line(800, 600, 637, 386);
        line(163, 386, 637, 386);
        line(163, 0, 163, 386);
        line(637, 0, 637, 386);
        stroke(239, 211, 63);
        line(400, 300, 400, 215);
        line(400, 215, 380, 245);
        line(400, 215, 420, 245);
      deadEnd =true;

    }



    if ( deadEnd == true && dist (mouseX, mouseY, rightRoomX, rightRoomY) < rightRoomD) {
        createCanvas( 800, 600);
        background(0);
        textSize(65);
        text( 'DEAD END', 230, 300);
        fill(255, 255, 255);
        
    }


    if ( treasureRoom == true && dist (mouseX, mouseY, chestX, chestY) < chestD) {
       createCanvas( 800, 600);
        background( 236, 142, 0);
        textSize(85);
        fill(0);
        text( 'FOUND CHEST', 95, 200);
        textSize(60);
        text( '1 out of 2', 272, 350);

    }

  

}

   
    



