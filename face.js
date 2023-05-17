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


    angleMode(DEGREES);
    
    strokeWeight(.4);
    stroke(DarkAqua_const);
    fill(DirtyAqua_const);
    
    ellipse(0,0,this.faceX,this.faceY) // main big old face circle
    
    ellipse(-1,-3.1,this.faceX+1,this.faceY/1.4) // head top, varies on facial direction
    noStroke();
    ellipse(0,0,this.faceX-.25,this.faceY-1) // face colour to hide the head top outline.

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


    /* Perhaps yu could make the main ellipse of the head have another ellipse without a stroke in front. 
    This is turn should get rid of the arc, and thats where you can replace it with a circle.
    once you do this you could then be able to change the facialangles easier.*/

 
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
    this.eyeType = int(map(settings[0], 0, 100, 1, 4));
    this.mouthType = int(map(settings[1], 0, 100, 1, 4));
    // this.noseType = map(settings[2], 0, 100, 0.5, 8);
    // this.earType = int(map(settings[0], 0, 100, 1, 2));
    // this.extraType = int(map(settings[0], 0, 100, 1, 2));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.eyeType, 1, 2, 0, 100);
    settings[1] = map(this.mouthType, 1, 2, 0, 100);
    // settings[2] = map(this.noseType, 0.5, 8, 0, 100);
    // settings[3] = map(this.earType, 1, 2, 0, 100);
    // settings[4] = map(this.extraType, 1, 2, 0, 100);
    return settings;
  }
}
