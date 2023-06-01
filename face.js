
var DEBUG_MODE = false;

var NUM_SLIDERS = 5;

function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

function Face() {
  
  this.eyeType = 2
  this.mouthType = 2
  this.earType = 2
  this.noseType = 2
  this.extraType = 2

  const stroke_color = [95, 52, 8];

  const LightBeige_const = [186,169,149];
  const DarkBeige_const = [122,111,98];
  const MustyBrown_const = [46,42,37];
  const FadeBrown_const = [59,53,47];
  const SoftBrown_const = [51,46,41];

  const DarkAqua_const = [45,60,58];
  const DirtyAqua_const = [131,201,195];

    this.faceX = width/73.84// 73.84
    this.faceY = height/26.31// 26.31
  
   /*    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, */
    
  this.draw = function(positions) {

    /*------------------- Average Value Points----------------------*/

  this.averageRightEye = segment_average(positions.right_eye)
  this.averageLeftEye = segment_average(positions.left_eye)

  this.averageRightEyeBrow = segment_average(positions.right_eyebrow)
  this.averageLeftEyeBrow = segment_average(positions.left_eyebrow)

  this.averageTopLip = segment_average(positions.top_lip)
  this.averageBottomLip = segment_average(positions.bottom_lip)
  this.averageChin = segment_average(positions.chin)

  this.centerMouth = segment_average([positions.top_lip[8],positions.bottom_lip[6]])

  this.nosecenter = segment_average([positions.nose_bridge[2],positions.nose_tip[2]])

  this.headCenterAverage = segment_average([positions.chin[0],positions.chin[16]])

   /*------------------- Specific Value Points----------------------*/

   //EYES
    
  this.ReyeX = positions.right_eye[0][0] 
  this.ReyeY = positions.right_eye[0][1]

  this.LeyeX = positions.left_eye[0][0] 
  this.LeyeY = positions.left_eye[0][1]

  //NOSE

  this.noseCenterX = positions.nose_tip[2][0]
  this.noseCenterY = positions.nose_tip[2][1]

  // CHEEKS

  this.cheekTopLeftX = positions.top_lip[0][0]
  this.cheekTopLeftY = positions.top_lip[0][1]

  this.cheekTopRightX = positions.top_lip[6][0]
  this.cheekTopRightY = positions.top_lip[6][1]

  this.cheekBottomLeftX = positions.bottom_lip[4][0]
  this.cheekBottomLeftY = positions.bottom_lip[4][1]

  this.cheekMiddleLeftX = positions.top_lip[7][0]
  this.cheekMiddleLeftY = positions.top_lip[7][1]

  this.cheekMiddleRightX = positions.top_lip[11][0]
  this.cheekMiddleRightY = positions.top_lip[11][1]
  
  this.cheekBottomRightX = positions.bottom_lip[0][0]
  this.cheekBottomRightY = positions.bottom_lip[0][1]

  //EARS

  this.earPosLeft = positions.chin[0][0]
  this.earPosRight = positions.chin[16][0]

  //CHIN

  this.ChinCenterX = positions.chin[8][0]
  this.ChinCenterX = positions.chin[8][1]
/*------------------------------Points End---------------------*/


  /* Code below resourced Phoebe Zeller */
  //START    \/
     push()
     console.log("center - left = " + (this.noseCenterX - this.cheekTopLeftX ))
     console.log("right - center = " + ( this.cheekTopRightX - this.noseCenterX) )
     if((this.noseCenterX - this.cheekTopLeftX) < (this.cheekTopRightX - this.noseCenterX )){
     scale(-0.3, 0.3) // pheobe code
     }
     else{
// END    /\

    scale(0.3)
     }

    /*----------------------FACE SETUP--------------------*/

    strokeWeight(.4);
    stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    
    ellipse(0,0,this.faceX,this.faceY) // main big old face circle
    
    ellipse(this.headCenterAverage[0]-1,-3.1,this.faceX+1,this.faceY/1.4) // head top, varies on facial direction -1, -3.1
    noStroke();
    ellipse(0,0,this.faceX-.5,this.faceY-1.5) // face colour to hide the head top outline. size x=-.25, y = -1
     pop();

    push()
    angleMode(RADIANS);

      /* Code below resourced Phoebe Zeller */
  //START    \/
    if((this.noseCenterX - this.cheekTopLeftX) < (this.cheekTopRightX - this.noseCenterX )){
      scale(-0.3, 0.3)
      }
      else{
      scale(0.3)
      }
    // END    /\

    /*-----------------FACIAL-------------*/

    /*******EYES******/

    if (this.eyeType < 25){ // surpised/ eyebrows raised expression HAS POSTIONS
      
      //LEFT EYE
      strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);

      ellipse(this.averageLeftEye[0]-.5,this.averageLeftEye[1], 1.5, 4) // left eye -1,-2
      noStroke();
      fill(DirtyAqua_const); 
      triangle(this.averageLeftEye[0]-3.5,this.averageLeftEye[1]+2.5,this.averageLeftEye[0]-3.5,this.averageLeftEye[1]-2,this.averageLeftEye[0],this.averageLeftEye[1],) // left eye indent
      
      //RIGHT EYE
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
      ellipse(this.averageRightEye[0]+2,this.averageRightEye[1], 1.5, 4) // right eye 3.5, -2

      noStroke();
      fill(DirtyAqua_const); 
      triangle(this.averageRightEye[0],this.averageRightEye[1]-1.5, this.averageRightEye[0],this.averageRightEye[1]+1.5,this.averageRightEye[0]+2.5,this.averageRightEye[1]) // right eye indent
      
      //EYEBROWS
      strokeWeight(1); /// thicker for brows
      stroke(DarkAqua_const);
      noFill(); 
      //left
      arc(this.averageLeftEyeBrow[0]-1,this.averageLeftEyeBrow[1]-2.5,5,3,3.3,5) 
      //right
      arc(this.averageRightEyeBrow[0]+1.5,this.averageRightEyeBrow[1]-2.5,5,3,4.5,6.2) 
     
  }

  else if (this.eyeType >= 25 && this.eyeType <= 50){ // suspicious / confused eyes
    
    //LEFT EYE
    strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
   ellipse(this.averageLeftEye[0]-.5,this.averageLeftEye[1], 1.5, 4) 
    
    noStroke();
    fill(DirtyAqua_const); 
    triangle(this.averageLeftEye[0]-3.5,this.averageLeftEye[1]+2.5,this.averageLeftEye[0]-3.5,this.averageLeftEye[1]-2,this.averageLeftEye[0],this.averageLeftEye[1],) // left eye indent

    stroke(DarkAqua_const);
      fill(DirtyAqua_const); 
      strokeWeight(.4);

      arc(this.averageLeftEye[0]-.35,this.averageLeftEye[1]+3,3,3,3.85,5.5) //bottom left eye beam line 

    //RIGHT EYE
   strokeWeight(1);
   stroke(DarkAqua_const);
    fill(DarkAqua_const);
    ellipse(this.averageRightEye[0]+2,this.averageRightEye[1], 1.5, 4) 

    noStroke();
    fill(DirtyAqua_const); 
    triangle(this.averageRightEye[0],this.averageRightEye[1]-1.5, this.averageRightEye[0],this.averageRightEye[1]+1.5,this.averageRightEye[0]+2.5,this.averageRightEye[1]) // right eye indent
      
    stroke(DarkAqua_const);
    fill(DirtyAqua_const); 
    strokeWeight(.4);

    arc(this.averageRightEye[0]+2.1,this.averageRightEye[1]+3,3,3,3.85,5.5)//bottom right eye beam line 
   
    //EYEBROWS

  //left
      strokeWeight(1); /// thicker for brows
      noFill(); 
      arc(this.averageLeftEyeBrow[0]-.5,this.averageLeftEyeBrow[1]-2,5,3,3.3,5.4) //left eyebrow raised
  //right
      strokeWeight(1); /// thicker for brows
      noFill(); 
      arc(this.averageRightEyeBrow[0]+3,this.averageRightEyeBrow[1]-3.5,5,2,7,2.5) // right eyebrow concerned
  
  }

  else if (this.eyeType >= 50 && this.eyeType <= 75){ // sad, scared and tired eyes
   
    //LEFT EYE
      strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
     ellipse(this.averageLeftEye[0]-.5,this.averageLeftEye[1], 1.5, 4) 
    
    noStroke();
    fill(DirtyAqua_const); 
    triangle(this.averageLeftEye[0]-3.5,this.averageLeftEye[1]+2.5,this.averageLeftEye[0]-3.5,this.averageLeftEye[1]-2,this.averageLeftEye[0],this.averageLeftEye[1],) // left eye indent

    //RIGHT EYE
   stroke(DarkAqua_const);
   fill(DarkAqua_const);
   ellipse(this.averageRightEye[0]+2,this.averageRightEye[1], 1.5, 4) 

   noStroke();
   fill(DirtyAqua_const); 
   triangle(this.averageRightEye[0],this.averageRightEye[1]-1.5, this.averageRightEye[0],this.averageRightEye[1]+1.5,this.averageRightEye[0]+2.5,this.averageRightEye[1]) // right eye indent

      /**Eyebrows and skin lines*/

      noFill()
      strokeWeight(.4)
      stroke(DarkAqua_const);
      arc(-1.1,-0.2,3,3,1,3) //bottom left eye tired line
      arc(-1.4,0.5,3,3,1.5,2.5) //smaller bottom left eye tired line

      arc(3.6,-0.2,3,3,0,2)//bottom right eye tired line
      arc(4.1,0.5,3,3,0.5,1.5)//smaller bottom right eye tired line

      strokeWeight(1); /// thicker for brows
      fill(DirtyAqua_const); // fill for cover the eye part

      arc(this.averageRightEyeBrow[0]+3,this.averageRightEyeBrow[1]-3,3.5,3.5,7.7,3.3) // right eyebrow sad 4.5,-4.7
      arc(this.averageRightEyeBrow[0]-3,this.averageRightEyeBrow[1]-3,3.5,3.5,6.1,1.8) // left eyebrow sad-2,-4
      noFill(); 
  }

else if (this.eyeType > 75){ // dead eyes
 
   strokeWeight(1);
   stroke(DarkAqua_const);
   fill(DarkAqua_const);

  //left
   line(this.averageLeftEye[0]-1.25,this.averageLeftEye[1]-2.5,this.averageLeftEye[0]+.85,this.averageLeftEye[1]+.5) // left x line 
   line(this.averageLeftEye[0]+.85,this.averageLeftEye[1]-2.5,this.averageLeftEye[0]-1.25,this.averageLeftEye[1]+.5) // left x line 2 

   //right
   line(this.averageRightEye[0]+1.75,this.averageRightEye[1]-2.60,this.averageRightEye[0]+3.85,this.averageRightEye[1]+.5) // right x line 1 
   line(this.averageRightEye[0]+3.85,this.averageRightEye[1]-2.60,this.averageRightEye[0]+1.75,this.averageRightEye[1]+.5) // right x line 2 

   noFill(); 
   arc(this.averageLeftEyeBrow[0],this.averageLeftEyeBrow[1]-2.75,10,3,3.6,5) //left eyebrow raised 
   arc(this.averageRightEyeBrow[0]+3,this.averageRightEyeBrow[1]-2.75,10,3,4.5,5.75) //right eyebrow raised 
   
}

/*********MOUTH**************/

if (this.mouthType < 25){ // happy chapy mouth

  stroke(DarkAqua_const);
  noFill();
  strokeWeight(.4);

  arc(this.centerMouth[0]+1.75,this.centerMouth[1]+2.5, 6, 9, 0, PI, PI + QUARTER_PI); // mouth bottom  
   arc(this.centerMouth[0]+1.75,this.centerMouth[1]+2.5, 6, 1, 0, PI, PI + QUARTER_PI); // mouth top 

  fill(DarkAqua_const);

  arc(this.centerMouth[0]+1.75,this.centerMouth[1]+3.5 ,5.6, 5, 0, PI, PI + QUARTER_PI); // mouth darkness 
 fill(DirtyAqua_const)
  arc(this.cheekTopLeftX-2,this.cheekTopLeftY+1.5, 3, 3, 0, HALF_PI); // left cheek outline small

}

else if (this.mouthType >=25 && this.mouthType <= 50){ // whistle mouth

  stroke(DarkAqua_const);
  fill(DirtyAqua_const);
  strokeWeight(.4);

  // cheeks
  arc(this.cheekMiddleLeftX-2.75,this.cheekMiddleLeftY+4.25,5,5.3,1.7,4.4 ) // left cheek line
  arc(this.centerMouth[0]-.5,this.centerMouth[1]+4.25,4,4.3,5.5,7) // right cheek line 

  fill(DirtyAqua_const); // fill to show lips
  arc(this.cheekMiddleRightX+4.75,this.cheekMiddleRightY+4.55,4,4.3,4,2) // lip line 
 
  fill(DarkAqua_const);
  ellipse(this.cheekMiddleRightX+4.75,this.cheekMiddleRightY+4.55, 2,2.5) // mouth

//music note
  ellipse(this.cheekTopRightX+7.2,this.cheekTopRightY+4.75, 1.1,1) // music note circle 
  noFill();
  strokeWeight(.5); // up thickness for lines
  line(this.cheekTopRightX+7.2,this.cheekTopRightY+2.25,this.cheekTopRightX+7.75,this.cheekTopRightY+4.75) // straight line music note 
  arc(this.cheekTopRightX+7.75,this.cheekTopRightY+1.5,2,2,7.7,2) //music note flick 

}

else if (this.mouthType >= 50 && this.mouthType <= 75){ //shocked, sad or scared mouth

  stroke(DarkAqua_const);
  fill(DarkAqua_const);
  strokeWeight(.4);

  fill(DirtyAqua_const);
  arc(this.cheekBottomRightX+2.5,this.cheekBottomRightY+5.75,4,4,5.75,1.85) // right cheek 
  arc(this.cheekBottomLeftX-.25,this.cheekBottomLeftY+5.35,4,4,1.2,3.3) // left cheek 

  fill(DarkAqua_const);

  ellipse(1.5,5.5,5.5,3) //mouth dark

  arc(0,6,3,3,0.5,5) // left mouth dark

  arc(3,6,3,3,5,3) // right mouth dark

  
}

else if (this.mouthType > 75){ // buck tooth mouth

stroke(DarkAqua_const);
fill(DarkAqua_const);
strokeWeight(.4);

ellipse(this.centerMouth[0]+1.75,this.centerMouth[1]+4.85,4,4) //mouth darkness

fill(DirtyAqua_const);
ellipse(this.centerMouth[0]+1.80,this.centerMouth[1]+5.9,3,1.5) //tongue 
line(this.centerMouth[0]+1.3,this.centerMouth[1]+5.3,this.centerMouth[0]+1.80,this.centerMouth[1]+5.9) // tongue dent

ellipse(this.centerMouth[0]+2.25,this.centerMouth[1]+3.85,1.5,1.75) //tooth right 
ellipse(this.centerMouth[0]+1.25,this.centerMouth[1]+3.85,1.5,1.75) //tooth left

noFill();
arc(this.cheekTopLeftX+1,this.cheekTopLeftY+4.5, 5,5,3.2,4.3) // top cheek
arc(this.cheekBottomLeftX+1,this.cheekBottomLeftY+5,5,5,1.5,2.4) //  bottom cheek 

}

/********NOSE**********/

if (this.noseType < 25){ // basic ball nose

  stroke(DarkAqua_const);
  fill(DirtyAqua_const)
  strokeWeight(.4);
  
  arc(this.noseCenterX+2.5,this.noseCenterY+1,3,3,4,3,OPEN) // round ball nose

}

else if (this.noseType >=25 && this.noseType <= 50 ){ // pinocchio nose

  stroke(DarkAqua_const);
  fill(DirtyAqua_const);
  strokeWeight(.4);

// main nose
  rect(this.noseCenterX+1.75,this.noseCenterY+.1,8.5,1.6,5,5,5) // nose 

//stem 1
  line(this.noseCenterX+7.5,this.noseCenterY,this.noseCenterX+8.5,this.noseCenterY-0.75) // stem 1 base 
  line(this.noseCenterX+7.5,this.noseCenterY,this.noseCenterX+7.4,this.noseCenterY-0.75) // stem one branch 
  ellipse(this.noseCenterX+9,this.noseCenterY-0.75,1,0.75) // stem 1 leaf 

  //stem 2
  line(this.noseCenterX+6,this.noseCenterY+1.25,this.noseCenterX+7.4,this.noseCenterY+2.75) // stem 2 base 
  line(this.noseCenterX+6.75,this.noseCenterY+2.25,this.noseCenterX+7.75,this.noseCenterY+2.25) // stem 2 branch 
  
  // negative space
  noStroke()
  rect(this.noseCenterX+1,this.noseCenterY+.3,2,1.2,5,5,5) // gets rid of the rect join 
 
}

else if (this.noseType >=50 && this.noseType <= 75){ // plastic surgery nose

stroke(DarkAqua_const);
  noFill()
  strokeWeight(.4);

  arc(this.noseCenterX+3.5,this.noseCenterY-2.5,3,5,1.75,3.3) // nose bridge curve 

  fill(DirtyAqua_const)
  arc(this.noseCenterX+3.4,this.noseCenterY+0.9,2.2,2.2,4.5,2,OPEN) // nose knob 

  noFill()
  arc(this.noseCenterX+2.4,this.noseCenterY+1.9,1,1.2,4,6) // nose under curve

  stroke(DirtyAqua_const)
  strokeWeight(1)
  arc(this.noseCenterX+2.95 ,this.noseCenterY-2,3,5,1.75,3.3) // nose bridge negativespace curve 
  arc(this.noseCenterX+2.6,this.noseCenterY+1.1,1,1.2,4,6) // nose negative under curve

}

else if (this.noseType > 75){ // pimple nose

  stroke(DarkAqua_const);
  fill(DirtyAqua_const)
  strokeWeight(.4);
  
  arc(this.noseCenterX+2.75,this.noseCenterY,3,5,4.5,2.3,OPEN) // nose birdge and knob 
  arc(this.noseCenterX+1.1,this.noseCenterY+1,2,2,1,4.5) // nostril

  arc(this.noseCenterY+3.5,this.noseCenterY,1.2,1.2,4,8,OPEN) // pimple 
  ellipse(this.noseCenterX+3,this.noseCenterY-1,0.1) // blackhead top 
  ellipse(this.noseCenterX+2.5,this.noseCenterY+1,0.1) // blackhead bottom 

}

/*EARS******/

if (this.earType < 25){ // ear with earring

  stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    strokeWeight(.4);
    
    arc(-6.6, 0, 3, 5, 1,5.5,OPEN); // ear 
    arc(-6.6, 0, 1.5, 3, 3,5,OPEN); // ear line

    noFill()

    arc(-6.8, 3, 1.5, 2.5, 5,4,OPEN); // earrings hoop
   
    fill(LightBeige_const);
    ellipse(-6.8,4.75,0.75) // earring jewel
   
}

else if (this.earType >= 25 && this.earType <= 50){ // headphones

    stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    strokeWeight(.4);

    ellipse(-5.75,0.5,6) // headphone ear cushion
    fill(DarkAqua_const);
    ellipse(-6.5,0.5,6) // headphone shell
    fill(DirtyAqua_const);
    rect(-8,-3.5,3,1,2,2,2,2) // headphone band connection

    noFill();
    strokeWeight(1.5)
    arc(-4,-4.5,5,9,3,4.75) //headphpne band
    strokeWeight(.4)

    // these lines are to make it seem that the headphone band is going around the head
    stroke(DirtyAqua_const); 
    arc(-3,-4.9,5,8,3,4.75);
    strokeWeight(.5)
   line(-4,-8.5,-3,-8.5)
    
}

else if (this.earType >= 50 && this.earType <= 75){ // big hearing ear

    fill(DirtyAqua_const);
  
    noStroke()
    arc(-7, 0, 4, 6, 0.1,0,OPEN); // ear fill to hide face lines

    stroke(DarkAqua_const);
    strokeWeight(.4);
    arc(-6.5, 3, 2.5, 3, 6.2,3.5,OPEN); // ear lobe
    arc(-7, 0, 4, 6, 1.7,6,OPEN); //outer  ear top

    noFill()
    arc(-7, 0, 2.5, 4.5, 2.3,6.5,OPEN); // ear big line
     arc(-6.5, 0.5, 1.5, 1.5, 2,6,OPEN); // small inside ear lobe curve
    arc(-6.75, 1.5, 2, 1.5, 6,3,OPEN); // ear smaller line
}

else if (this.earType > 75){ // elf

   stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    strokeWeight(.4);
    
    push();
    fill(DirtyAqua_const);
    rotate(-0.7)
    arc(-5,-5,3.2,5.8,8,7.5,OPEN) // ear 
    pop();

    fill(DirtyAqua_const)
    arc(-8,-2,2.6,3.5,2.75,4.75) // ear point
   
    arc(-6.5,-3.6,3,3.5,1.3,3.2) //ear dip to mask curve
  
    push();
    noFill()
    rotate(-0.7)
    arc(-5.2,-5,1.5,3.5,1.7,4.7,) // ear inside line 1
    arc(-4.5,-6,1.5,3.5,1.7,4.25,) // ear inside line 2
    pop();


/*EXTRA************/

}

if (this.extraType < 25){ // devil horns
  stroke(DarkAqua_const);
  
   strokeWeight(.7);

   fill(DarkAqua_const)
   rect(-8.2,-6,2.5,2,3,3,3,3) // left circulir base and chip
   arc(-7,-8.5,5,9,1.5,3.2 ,OPEN) //left horn outline bottom
    noFill()
   arc(-7,-9,5,6,1.5,3.2) //left horn outline top 


   fill(DarkAqua_const)
   arc(4,-8.5,5,9,6.2,1.11 ,OPEN) //right  horn outline bottom
    noFill()
   arc(4,-9,5,6,6.2,1.15) //right  horn outline top 
   arc(4,-8.4,5,6,6.2,1.11) //right  horn outline fill
}

else if (this.extraType >= 25 && this.extraType <= 50){ // holes

   stroke(DarkAqua_const);
   fill(DirtyAqua_const);
   strokeWeight(.4);

   /**BIG HOLES */

   ellipse(1.5,-7,1.5,3) // hole 1 outline
   fill(DarkAqua_const);
   ellipse(1.25,-7,.5,2) // hole 1 dark

   fill(DirtyAqua_const);
   ellipse(-3.25,5,1,2.5) // hole 2 outline
   fill(DarkAqua_const);
   ellipse(-3.5,5,0.25,1.5) // hole 2 dark

   fill(DirtyAqua_const);
   ellipse(-4,-7,.75,2) // hole 3 outline
   fill(DarkAqua_const);
   ellipse(-4.2,-7,0.1,1) // hole 3 dark

   fill(DirtyAqua_const);
   ellipse(1.2,-2,.75,2) // hole 4 outline
   fill(DarkAqua_const);
   ellipse(1,-2,0.1,1) // hole 4 dark

   fill(DirtyAqua_const);
   ellipse(-4,-2,1.25,2.5) // hole 5 outline
   fill(DarkAqua_const);
   ellipse(-4.2,-2,0.25,1.5) // hole 5 dark

   /**SMALL HOLES */

   ellipse(2,8.2,0.2,0.5) // bottom right under mouth
   ellipse(5.5,2.7,0.2,0.5) // middle right above mouth
   ellipse(-1,1,0.2,0.5) // middle middle underneath eye
   ellipse(-1,-7,0.2,0.5) // middle top above eyebrow
   ellipse(4,-6.5,0.2,0.5) // top right above eyebrow
   ellipse(5.5,-2,0.2,0.5) // middle right below eye
   ellipse(-5,3.5,0.2,0.5) // middle left below ear
   ellipse(-5,-4.5,0.2,0.5) // middle left below ear
}

else if (this.extraType >= 50 && this.extraType <= 75){ // scars

stroke(DarkAqua_const);
   noFill()
   strokeWeight(.3);
   arc(-2,-7,3,3.5,3,4.5) //scar 1 main line
   line(-3,-7.1,-4,-7.1) // bottom scar 1 short line
    line(-2.75,-7.6,-3.9,-7.8) // scar 1 middle line
   line(-2.4,-8.1,-3.4,-8.5) // scar 1 top line

   arc(1.5,-5.75, 5,5,4.75,6) // scar 2 main line
   line(3,-6.75,4,-7) // scar 2 bottm line
   line(2.25,-7.5,3,-8) // scar 2 top line
   ellipse(3,-7.25,0.01) // scar 2 middle dot
  
}

else if (this.extraType > 75){ // arrow in head

stroke(DarkAqua_const);
fill(DirtyAqua_const);
strokeWeight(.7)
   line(1.5,-7,8,-7) // arrow stick
   strokeWeight(.4)
   quad(7,-7,8,-8,9,-8,8,-7); // arrow feath top       
   quad(7,-7,8,-6,9,-6,8,-7); // arrow feather bottom
   noFill();
   strokeWeight(.4)
   arc(0.4,-6.75,2,2,5,0.5) // head indenttom 
}  

   angleMode(DEGREES); //// never move this 
  pop()
  
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true

  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.eyeType = int(map(settings[0], 0, 100, 0, 100));
    this.mouthType = int(map(settings[1], 0, 100, 0, 100));
    this.noseType = int(map(settings[2], 0, 100, 0, 100)); // change back to 1 for start of map
    this.earType = int(map(settings[3], 0, 100, 0, 100));
    this.extraType = int(map(settings[4], 0, 100, 0, 100));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = int(map(this.eyeType, 0, 100, 0, 100));
    settings[1] =  int(map(this.mouthType, 0, 100 , 0, 100));
    settings[2] = int(map(this.noseType, 0, 100, 0, 100));
    settings[3] = map(this.earType, 0, 100, 0, 100);
    settings[4] = map(this.extraType, 0, 100, 0, 100);
    return settings;
  }
}
