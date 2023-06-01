function draw_one_frame(cur_frac) {

  noStroke()
	let backgroundColor = color("#4C061D") // burnt red background
	fill(backgroundColor)
	rect(0,0, width, height)

	let Leftcolor = color("#F6AE2D"); // mustard yellow
	let Rightcolor = color("#F26419"); // vibrant orange
	let StrongStroke = width/180 //  defined so stroke keeps its weight in different canvas sizes
	let fromWhite = color (255,255,255);
	let toBlack = color (0,0,0)

	/////////////////////////////////////////// 

	let rectMapValue1 = 2.5 // if you take a closer look at the map, these will appear around the wrong way.
	let rectMapValue2 = 0.5525 // the reeason why these values have to be put backwards is so that the shapes move up, not down.

	let rectSize = width / 12 
	let rectSize2 = width / 7.5 

	let SpaceSize = width /6
	let SpaceSize2 = width/12+0.5 
	let spaceSize3 = width / 3.75 

	let quadMapValue1 = 2.5
	let quadMapValue2 = 0.499

	let quadX1Size = width/6 // I have to create varibles for all the quad points otherwise the size doesnt work in the different formats
	let quadY1Size = width/12
	let quadX2Size = width/12
	let quadY2Size = width/8
	let quadX3Size = width/12
	let quadY3Size = width/24
	let quadX4Size = width/768
	let quadY4Size = width/12

	let quadOnSetX = width/6 
	let quadOnSetY = width/3.84 

	let quadOffsetX = width/-12
	let quadOffsetY = width/7.56 

	///////////////////////////////////////////

	let Keyframes = [ // used for both rectangles and the quad loop, to make the shapes move upwards
		-0.425 * width,
		0.125 * width,
		0.625 * width,
		1.125 * width 
	]

///////////////////////////////////////////////////

let ColourNoiseMap;  // Part of this map was taken from a demonstration from Phoebe Zeller in class at Victoria University of Wellington.

if(cur_frac <= 0.5){
ColourNoiseMap = map(cur_frac, 0, 0.5, 1.1, 0) // 1.1 bound means that the White strobe lingers for a bit longer then the black, as it was my orignal stroke colour.
}
else{
ColourNoiseMap = map(cur_frac, 0.5,1, 0,1.1) // this map is then put into the lerp below, which is put into the stroke
}

WhiteLerp = lerpColor(toBlack, fromWhite, ColourNoiseMap)  // stroke and outline that changes from black to white

fill(Leftcolor) // mustard yellow rectangles
stroke(WhiteLerp)
strokeWeight(StrongStroke)
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, rectMapValue1, rectMapValue2, Keyframes[0], Keyframes[1]) // Rectangle Moving upwards map
		for( let across = 0 ; across < width / SpaceSize; across++){
			for( let down = -0.75; down < height / SpaceSize; down++){ // -0.75 for the other rectangles t fit diagnolly.
			
					rect(SpaceSize*across,spaceSize3*down + upwards_extension , rectSize, rectSize2 )
	}
}
}

fill(Leftcolor); // mustard yellow rectangles but placed on a diagonal offeset to appear as a checkerboard
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac, rectMapValue1, rectMapValue2, Keyframes[0], Keyframes[1]) // Rectangle Moving upwards map
		for( let across= -0.5 ; across < width / SpaceSize2; across++){ // 0.5 for offset
			for( let down = -1.25; down < height / SpaceSize2; down++){ // -1.25 for offset
	
					rect(SpaceSize*across ,spaceSize3*down+ upwards_extension, rectSize, rectSize2)
			
	}
}
}

fill(Rightcolor); // vibrant orange quads.
for(let i=0; i<5; i++) {
    let upwards_extension = map(cur_frac,quadMapValue1,quadMapValue2, Keyframes[0], Keyframes[1]) // moves the quads upwards. Has to be applied on each Y value, apologies for the longest ever line of code.
		for( let across= 0; across < width / SpaceSize2; across++){
			for( let down = -1.5; down < height / SpaceSize; down++){
				push();
				translate(across * quadOnSetX, down * quadOnSetY) // repeats the first set of quads across and down
				quad(quadX2Size , quadY2Size + upwards_extension,quadX1Size, quadY1Size + upwards_extension,quadX3Size ,quadY3Size + upwards_extension, quadX4Size, quadY4Size + upwards_extension)	
					pop(); // push and pop so that i can sue translate twice whikst not affecting the other.
						push()
						translate(quadOffsetX,quadOffsetY) // another translate to offset more quads so that are slighlty diagnol and line up with the rectangular chekcerboard.
							push()
							translate(across * quadOnSetX, down * quadOnSetY); // repeats the second set of quads across and down
							quad(quadX2Size , quadY2Size + upwards_extension,quadX1Size, quadY1Size + upwards_extension,quadX3Size ,quadY3Size + upwards_extension, quadX4Size, quadY4Size + upwards_extension)	
								pop();
									pop();
	}
}
}
}
  // // note: to clear the screen draw a rectangle
  // // that is width x height - like this
  // noStroke();
  // fill(10);
  // rect(0, 0, width, height);

  // // note: all shape sizes, line widths, etc. should be a
  // // function of width and height
  // let rect_width = height / 10.0;
  // let half_width = rect_width / 2;

  // // note: animation should progress depending on the 
  // // value of cur_frac which goes from 0 to 1, and it
  // // should loop seamlessly
  // let cur_x = map(cur_frac, 0, 1, 0, width) - half_width;

  // fill(200);
  // // draw the rect moving across the screen
  // rect(cur_x, 0, rect_width, height);
  // // a second version (offscreen) for when it loops back around
  // rect(cur_x+width, 0, rect_width, height);
  // rect(cur_x-width, 0, rect_width, height);

  // // note: you can draw optional things depending on "debugView"
  // if (debugView) {
  //   // we'll draw our "keyframes"
  //   noFill();
  //   stroke(255, 0, 0);
  //   strokeWeight(height/100);
  //   // here we "plug in" the values when cur_frac is 0
  //   rect(-half_width, 0, rect_width, height);
  //   rect( width - half_width, 0, rect_width, height);
  //   rect(-width - half_width, 0, rect_width, height);
  // }


