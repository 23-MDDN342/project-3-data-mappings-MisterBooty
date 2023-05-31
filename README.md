[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wBh5q70M)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11103453&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 3: Data Mappings
09/05/23

Created two separate images of poses and expressions for the sketch exercise. I’m wanting to carry on my style and design from project two. I also really like the idea of adding accessories or different faces shapes depending on the type of person they are mapped to. 

16/05

Impleneted my facial base of my previous porject into this set of code. Got the vairbless i need working as well as colour.

Next step is to create the eyes outh and nose, then futher on down the line I need to work on how create a system in which the face changes the directions it faces depending on said photo.


18/05

I have successfully implemented my code into my design!! The arcs were very different at first and were all jumbled. This is because I needed to change my angle mode to radians instead of degrees. Unfortunately, my face seems to be rotating too much to be mapped probably as shown above. I need to figure this out first, then I can work on implementing positions for the eyes, mouth, nose,ears and extras.

23/05

Fixed the angle mode problem in which the face points were jumbled and my code was doing somersaults. Each of the sliders are now working perfectly with each facial feature and they are named. The next step is to get the positions working and train the machine learning. I would also like to do something cool with colour but I’m not sure if that is possible within my timeframe.

started implementing the postions into the first set f eyes. I realsied it needs trranslate so i dont have to do heaps of math. This also requires push and pops.

24/03

The positions are harded to do than I thought. Originally I thought i could merely translate each group of shapes that needed to be put together. this for some reason only worked for the first face that my design was mapped to. It did not work for any others. This meant I had to use another method which is the strategy I’m currently sitting at. It involves mapping every single shape on every variation of facial features. Whilst this works, it is taking a very long time. I spent about 4 hours on this today and i have only just finished doing the eyes. I believe I need to figure something else out or limit my design and its features. 

25/05

New Plan. I am Only going to Map the eyes and mouths to the facial points. If I have time, I will do the nose as well. My main focus is going to be on training the machine learning function on recognising different people. I need to put my variations into rules (e.g blondes have a smile, brunettes have a whistling mouth). I’m halfway through finishing the mouth so that will be my next step after I finish it.

30/05

The Nose, mouth and eyes are now all mapped onto certain facial points and move pretty decently with the different variations of faces. I’ve started to train the machine and I’ve made it to 60 faces. It’s pretty tiring! I decided to use these five different variations. Expression, Hair length, Hair colour, Eye colour and Age.

Expression = MouthType: smile/Scared Mouth, smile with teeth/Happy Mouth,  neutral/ Bucktooth Mouth,  quirky/ Whistle Mouth

Hair length = EarType: Bald/Earring , Short/Elf,  Medium/Large ear, Long/HeadPhones

Hair Colour = NoseType: Red/Plastic Nose, Brunette/Round Nose, Blonde/Pinnochio Nose, Bald/Pimple  Nose

Eye colour = EyeType: Brown/Dead Eyes, Black/Surprised Eyes, Blue/Suspicious Eyes, Green/Scared Eyes

Age = ExtraType: Young/Devil Horns, Youngmiddle/Scars,  MiddleOld/Arrow,  Old/ Holes

30/05
 I decided to include photo shoots, animated characters and candid photos of me and my friends for my smaple images! Unfortunately my faces don’t currently work as their is a problem with the arrays that needs to be solved.

 31/05

 Given that my arrays weren’t working I thought it might be a good opportunity to perhaps retrain my data to something a little less speculative. I got rid of hair length and replaced it with jewellery , as well as added some tweaks to age and hair colour. The new training variables with the facial features pairs  are:

MouthType = Mouth expression: smile/Scared Mouth, smile with teeth/Happy Mouth,  neutral/ Bucktooth Mouth,  ‘ooo’ mouth / Whistle Mouth
EarType = Jewellery:  2x Earrings /Earring , 1x Earring /Elf,  None /Large ear, Necklace/HeadPhones
NoseType = Hair Colour: Red/Plastic Nose, Brunette/Pimple Nose, Blonde/Pinocchio Nose, Black/Round  Nose
EyeType =  Eye colour Brown/Dead Eyes, Black/Surprised Eyes, Blue/Suspicious Eyes, Green/Scared Eyes
ExtraType = Age: < 35 /Devil Horns, 35<45 /Arrow, 45<60 /Scars, 60+ / Holes
