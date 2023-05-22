/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 5;

// other variables can be in here too
// here's some examples for colors used






// example of a global function
// given a segment, this returns the average point [x, y]
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

// This where you define your own face object
function Face() {
  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = [119, 85, 17]

  //MINE
  this.eyeType = 2
  this.mouthType = 2
  this.earType = 2
  this.noseType = 2
  this.extraType = 2

  //my code
  const stroke_color = [95, 52, 8];

  const LightBeige_const = [186,169,149];
  const DarkBeige_const = [122,111,98];
  const MustyBrown_const = [46,42,37];
  const FadeBrown_const = [59,53,47];
  const SoftBrown_const = [51,46,41];

  const DarkAqua_const = [45,60,58];
  const DirtyAqua_const = [131,201,195];

  
  // let stroke_color = [95, 52, 8];

  // let LightBeige_const = [186,169,149];
  //   let DarkBeige_const = [122,111,98];
  //   let MustyBrown_const = [46,42,37];
  //   let FadeBrown_const = [59,53,47];
  //   let SoftBrown_const = [51,46,41];

    this.faceX = width/73.84// 73.84
    this.faceY = height/26.31// 26.31


  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
  
    console.log()
    
    ///MY CODE starts here
     push()
    scale(0.3)


    
    

    /*FACE SETUP***/

    strokeWeight(.75);
    stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    
    ellipse(0,0,this.faceX,this.faceY) // main big old face circle
    
    ellipse(-1,-3.1,this.faceX+1,this.faceY/1.4) // head top, varies on facial direction
    noStroke();
    ellipse(0,0,this.faceX-.5,this.faceY-1.5) // face colour to hide the head top outline. size x=-.25, y = -1
     pop();

    
    angleMode(RADIANS);
    scale(0.3)

    /*EYES*********************/

    if (this.eyeType == 1){ // surpised/ eyebrows raised expression
      strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
      
      ellipse(-1,-2, 1.5, 4) // left eye
    
      ellipse(3.5,-2, 1.5, 4) // right eye

      noStroke();

      fill(DirtyAqua_const); 
      triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
      triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent

      strokeWeight(1); /// thicker for brows
      stroke(DarkAqua_const);
      
      noFill(); 
      arc(-1,-4.5,5,3,3.3,5) //left eyebrow raised
      arc(3.5,-4.5,5,3,4.5,6.2) //left eyebrow raised
    
  }

  else if (this.eyeType == 4){ // suspicious / confused eyes
      strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
      ellipse(-1,-2, 1.5, 4) // left eye
    
      ellipse(3.5,-2, 1.5, 4) // right eye

      noStroke();

      fill(DirtyAqua_const); 
      triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
      triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent
      
      stroke(DarkAqua_const);
      fill(DirtyAqua_const); 
      strokeWeight(.4);

      arc(-1,1,3,3,3.85,5.5) //bottom left eye beam line
      arc(3.5,1,3,3,3.85,5.5)//bottom right eye beam line

      strokeWeight(1); /// thicker for brows

      arc(3.5,-5,5,2,7,2.5) // right eyebrow concerned
      noFill(); 
      arc(-1,-4.5,5,3,3.3,5.4) //left eyebrow raised
     
  }

  else if (this.eyeType == 3){ // sad, scared and tired eyes
      /**Eyes */
      strokeWeight(1);
      stroke(DarkAqua_const);
      fill(DarkAqua_const);
      ellipse(-1,-2, 1.5, 4) // left eye
    
      ellipse(3.5,-2, 1.5, 4) // right eye

      noStroke();

      fill(DirtyAqua_const); 
      triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
      triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent
      /**Eyebrows/skin */
      noFill()
      strokeWeight(.4)
      stroke(DarkAqua_const);
      arc(-1.1,-0.2,3,3,1,3) //bottom left eye tired line
      arc(-1.4,0.5,3,3,1.5,2.5) //smaller bottom left eye tired line

      arc(3.6,-0.2,3,3,0,2)//bottom right eye tired line
      arc(4.1,0.5,3,3,0.5,1.5)//smaller bottom right eye tired line

      strokeWeight(1); /// thicker for brows
      fill(DirtyAqua_const); // fill for cover the eye bpart

      arc(4.5,-4.7,3.5,3.5,7.7,3.3) // right eyebrow sad
      arc(-2,-4.7,3.5,3.5,6.1,1.8) // left eyebrow sad
      noFill(); 
  }

else if (this.eyeType == 2){ // dead eyes
 
   /**Eyes */
   strokeWeight(1);
   stroke(DarkAqua_const);
   fill(DarkAqua_const);
  
   line(-2,-3.5,0,-0.5) // left x line 1
   line(0,-3.5,-2,-0.5) // left x line 2

   line(2.5,-3.5,4.5,-0.5) // right x line 1
   line(4.5,-3.5,2.5,-0.5) // right x line 2

   noFill(); 
   arc(-1,-4,10,3,3.6,5) //left eyebrow raised
   arc(3.5,-4,10,3,4.5,5.75) //left eyebrow raised
   
}

/*********MOUTH**************/
if (this.mouthType == 1){ // happy chapy mouth

  stroke(DarkAqua_const);
  noFill();
  strokeWeight(.4);

  arc(1.5, 3, 6, 9, 0, PI, PI + QUARTER_PI); // mouth bottom
  arc(1.5, 3, 6, 1, 0, PI, PI + QUARTER_PI); // mouth top

  fill(DarkAqua_const);

  arc(1.5, 4, 5.6, 5, 0, PI, PI + QUARTER_PI); // mouth darkness
  noFill();
  arc(-2.7, 2, 3, 3, 0, HALF_PI); // left cheek outline
}

else if (this.mouthType == 2){ // whistle mouth

  stroke(DarkAqua_const);
  noFill();
  strokeWeight(.4);

  arc(-2,5,5,5.3,1.7,4.4 ) // left cheek line
  arc(-1,5,4,4.3,5.5,7) // right cheek line

  fill(DirtyAqua_const); // fill to show lips
  arc(4,5.2,4,4.3,4,2) // lip line 
 
  fill(DarkAqua_const);
  ellipse(4.2,5.2, 2,2.5) // mouth

  ellipse(8,5.2, 1.1,1) // music note circle
  noFill();
  strokeWeight(.5); // up thickness for lines
  line(8.5,3,8.5,5.3) // straight line music note
  arc(9,2.2,2,2,7.7,2) //music note flick

}

else if (this.mouthType == 3){ //shocked, sad or scared mouth

  stroke(DarkAqua_const);
  fill(DarkAqua_const);
  strokeWeight(.4);

  fill(DirtyAqua_const);
  arc(3.5,6.5,4,4,5.75,1.85) // right cheek
  arc(-0.5,6.5,4,4,1.2,3.3) // left cheek

  fill(DarkAqua_const);

  ellipse(1.5,5.5,5.5,3) //mouth dark

  arc(0,6,3,3,0.5,5) // left mouth dark

  arc(3,6,3,3,5,3) // right mouth dark

  
}

else if (this.mouthType == 4){ // buck tooth mouth
stroke(DarkAqua_const);
fill(DarkAqua_const);
strokeWeight(.4);

ellipse(1.5,5.5,4,4) //mouth dark

fill(DirtyAqua_const);
ellipse(1.5,6.65,3,1.5) //tongue
line(1,6,1.5,6.5) // tongue dent

ellipse(2,4.5,1.5,1.75) //tooth right
ellipse(1,4.5,1.5,1.75) //tooth left

noFill();
arc(0.5,5, 5,5,3.2,4.3) // top cheek
arc(0.75,6,5,5,1.5,2.4) //  bottom cheek

}
/*NOSE**********/

if (this.noseType == 1){ // basic ball nose
  stroke(DarkAqua_const);
  fill(DirtyAqua_const)
  strokeWeight(.4);
  
  arc(2.5,1,3,3,4,3) // round ball nose

}

else if (this.noseType == 2){ // pinocchio nose
  stroke(DarkAqua_const);
  fill(DirtyAqua_const);
  strokeWeight(.4);

  rect(1,0.5,8.5,1.6,5,5,5) // nose bridge/ main
  line(7,0.3,8,-0.5) // stem 1 base
  line(7.3,0.1,7,-0.5) // stem one branch
  ellipse(8.5,-0.5,1,0.75) // stem 1 leaf
  line(5.5,1.5,7,3) // stem 2 base
  line(6.8,2.7,7.4,2.6) // stem 2 branch
  noStroke()
  rect(0.5,0.7,2,1.2,5,5,5) // gets rid of the rect join 
 
}

else if (this.noseType == 3){ // plastic surgery nose
stroke(DarkAqua_const);
  noFill()
  strokeWeight(.4);

  arc(3.3,-2,3,5,1.75,3.3) // nose bridge curve
  fill(DirtyAqua_const)
  arc(3.2,1.45,2.2,2.2,4.5,2,OPEN) // nose knob
  noFill()
  arc(2.2,2.5,1,1.2,4,6) // nose under curve
}

else if (this.noseType == 4){ // pimple nose
  stroke(DarkAqua_const);
  fill(DirtyAqua_const)
  strokeWeight(.4);
  
  arc(2.5,0,3,5,4.5,2.3,OPEN) // nose birdge and knob
  arc(1.1,1.5,2,2,1,4.5) // nostril
  arc(3.9,0,1.2,1.2,4,8,OPEN) // pimple
  ellipse(2.5,-1,0.1) // blackhead top
  ellipse(2.1,1.2,0.1) // blackhead bottom

}


/*EARS******/

if (this.earType == 1){ // ear with earring
  stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    strokeWeight(.4);
    
    arc(-6.6, 0, 3, 5, 1,5.5,OPEN); // ear 
    arc(-6.6, 0, 1.5, 3, 3,5,OPEN); // ear line

    noFill()

    arc(-6.8, 3, 1.5, 2.5, 5,4,OPEN); // earrings hoopmain
   
    fill(LightBeige_const);
    ellipse(-6.8,4.75,0.75) // earring jewel
   
}

else if (this.earType == 4){ // headphones
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

else if (this.earType == 3){ // big hearing ear
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

else if (this.earType == 2){
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
  pop()
    push();
    noFill()
    rotate(-0.7)
    arc(-5.2,-5,1.5,3.5,1.7,4.7,) // ear inside line 1
    arc(-4.5,-6,1.5,3.5,1.7,4.25,) // ear inside line 2
    pop();


/*EXTRA************/

}

if (this.extraType == 2){ // devil horns
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

else if (this.extraType == 1){ // holes
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

else if (this.extraType == 4){ // scars
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

else if (this.extraType == 3){ // arrow in head
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



 
    // // head
    // ellipseMode(CENTER);
    // stroke(stroke_color);
    // fill(this.mainColour);
    // ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    // noStroke();


    // // mouth
    // fill(this.detailColour);
    // ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

    // // eyebrows
    // fill( this.eyebrowColour);
    // stroke( this.eyebrowColour);
    // strokeWeight(0.08);
    // this.draw_segment(positions.left_eyebrow);
    // this.draw_segment(positions.right_eyebrow);

    // // draw the chin segment using points
    // fill(this.chinColour);
    // stroke(this.chinColour);
    // this.draw_segment(positions.chin);

    // fill(100, 0, 100);
    // stroke(100, 0, 100);
    // this.draw_segment(positions.nose_bridge);
    // this.draw_segment(positions.nose_tip);

    // strokeWeight(0.03);

    // fill(this.lipColour);
    // stroke(this.lipColour);
    // this.draw_segment(positions.top_lip);
    // this.draw_segment(positions.bottom_lip);

    // let left_eye_pos = segment_average(positions.left_eye);
    // let right_eye_pos = segment_average(positions.right_eye);

    // // eyes
    // noStroke();
    // let curEyeShift = 0.04 * this.eye_shift;
    // if(this.num_eyes == 2) {
    //   fill(this.detailColour);
    //   ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
    //   ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

    //   // fill(this.mainColour);
    //   // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
    //   // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    // }
    // else {
    //   let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
    //   let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

    //   fill(this.detailColour);
    //   ellipse(eyePosX, eyePosY, 0.45, 0.27);

    //   fill(this.mainColour);
    //   ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    // }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
   angleMode(DEGREES);
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
    this.eyeType = int(map(settings[0], 0, 100, 1, 4));
    this.mouthType = int(map(settings[1], 0, 100, 1, 4));
     this.noseType = int(map(settings[2], 0, 100, 1,4));
    this.earType = int(map(settings[3], 0, 100, 1, 4));
    this.extraType = int(map(settings[4], 0, 100, 1, 4));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.eyeType, 1, 2, 0, 100);
    settings[1] = map(this.mouthType, 1, 2, 0, 100);
     settings[2] = map(this.noseType, 1, 2, 0, 100);
    settings[3] = map(this.earType, 1, 2, 0, 100);
    // settings[4] = map(this.extraType, 1, 2, 0, 100);
    return settings;
  }
}
