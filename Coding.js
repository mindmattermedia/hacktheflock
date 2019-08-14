//////////////////////////////////////////////////////////////////////////////////
//  We accumulate a new acceleration each time based on the three rules below:  //
//                   Separation, Alignment, Cohesion                            //
//           We can increase or decrease the strength of these rules            //
//       Try changing the values to change the weight of the forces below       //
//////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
//    alignment changes the Boids Alignment    //
//         Try changing 1.0 into 100           //
/////////////////////////////////////////////////
alignment = 10000.0;

////////////////////////////////////////////////
//    cohesion changes the Boids Cohesion     //
//        Try changing 1.0 into 1000          //
////////////////////////////////////////////////
cohesion = 1.0;

//////////////////////////////////////////////////
//  separation changes the Boids Separation     //
//         Try changing 3.0 into 300            //
//////////////////////////////////////////////////
separation = 3.0;

/////////////////////////////////////////////////////////////////////////////
//  We can also change the Boids size, speed and turning speed with        //
//                boideSize, boidSpeed and boidTurn                        //
//      We can increase or decrease the strength of these forces           //
//  Try changing the values to change the weight of the forces below       //
/////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////
//  boidSize sets the size of each Boid  //
//        Try changing 4 into 10         //
///////////////////////////////////////////
boidSize = 15;

/////////////////////////////////////////////////////////////////
//  boidSpeed sets the maximum speed that the Boids can reach  //
//                 Try changing 3 into 300                     //
/////////////////////////////////////////////////////////////////
boidSpeed = 3;

////////////////////////////////////////////////////
//  boidTurn sets the turning speed of the Boids  //
//          Try changing 0.05 into 5              //
////////////////////////////////////////////////////
boidTurn = 0.05;



//////////////////////////////////////////////////////////////////
//    Boid.prototype.render is the function that draws Boids    //
//////////////////////////////////////////////////////////////////
Boid.prototype.render = function() {

  ////////////////////////////////////////////////////////////////////////
  //  var theta rotates the shape or Boid in the direction of velocity  //
  ////////////////////////////////////////////////////////////////////////
  var theta = this.velocity.heading() + radians(90);

  ///////////////////////////////////////////////////////////
  //  noStroke removes the outline or stroke of each Boid  //
  ///////////////////////////////////////////////////////////
  noStroke();

  ///////////////////////////////////////////////////////////////
  //  fill(255, 89, 0) sets the colour of the Boids to orange  //
  ///////////////////////////////////////////////////////////////
  fill(random(0,255), random(0,255), random(0,255));

  ////////////////////////////////////////////////////////////////
  //  fill(157, 0, 255) sets the colour of the Boids to purple  //
  ////////////////////////////////////////////////////////////////
  //fill(157, 0, 255);

  ///////////////////////////////////////////////////////////////////////
  //  push() stores information related to the current transformation  //
  //    state and style  of the Boids, such as fill() and stroke()     //
  ///////////////////////////////////////////////////////////////////////
  push();

  /////////////////////////////////////////////////////////
  //  translate is the coordinates of the shape or Boid  //
  /////////////////////////////////////////////////////////
  translate(this.position.x, this.position.y);

  //////////////////////////////////////////////////////////////////////////////
  //      rotate(theta) rotates the Boid in the direction of the velocity     //
  //  When using Images, please add "//" in front of the "rotate" code below  //
  //////////////////////////////////////////////////////////////////////////////
  rotate(theta);

  //////////////////////////////////////////////////////
  //   We have precoded four different shapes below:  //
  //  Triangles, Squares, Rectangles, and Circles     //
  //////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  //   beginShape() initiates drawing the Boids     //
  ////////////////////////////////////////////////////
  beginShape();

  //////////////////////////////////////////////////////////////////////////////
  //   TO CHANGE SHAPES, ADD "//" IN FRONT OF THE CODE YOU WISH TO REMOVE     //
  //         REMOVE "//" FROM THE CODE YOU WISH TO ADD                        //
  //////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////
  //                         TIPS:                               //
  //       1. Each vertex is a point or corner of a shape        //
  //   2. Try changing the numbers, ex: changing a 2 into a 10   //
  /////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////
  //                              TRIANGLES:                               //
  //   Below are three points or vertices. Together they draw a triangle.  //
  //      To change the shape of the Boid, please delete or add "//"       //
  //               in front of the "vertex" code below                     //
  ///////////////////////////////////////////////////////////////////////////
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);

  /////////////////////////////////////////////////////////////////////////
  //                              SQUARES:                               //
  //    Below are four points or vertices. Together they draw a square.  //
  //      To change the shape of the Boid, please delete or add "//"     //
  //               in front of the "vertex" code below                   //
  /////////////////////////////////////////////////////////////////////////
  //vertex(0, 0); vertex(this.r * 2, 0); vertex(this.r * 2, -this.r * 2); vertex(0, -this.r * 2);

  ////////////////////////////////////////////////////////////////////////////////
  //                              RECTANGLES:                                   //
  //            We can draw a rectangle by using the rect() function            //
  //         To change the shape of the Boid, please delete or add "//"         //
  //                     in front of the "rect" code below                      //
  ////////////////////////////////////////////////////////////////////////////////
  //rect(0, this.r * 2, this.r * 8, this.r * 4);

  ////////////////////////////////////////////////////////////////////////////////
  //                              CIRCLES:                                      //
  //            We can draw a circle by using the ellipse() function            //
  //         To change the shape of the Boid, please delete or add "//"         //
  //                   in front of the "ellipse" code below                     //
  ////////////////////////////////////////////////////////////////////////////////
  //ellipse(0, 0, this.r * 2, this.r * 2);



  //////////////////////////////////////////////////////////////////////////////
  //                              TO USE IMAGES:                              //
  //    ADD "//" IN FRONT OF THE SHAPE CODE ABOVE THAT YOU WISH TO REMOVE     //
  //        REMOVE "//" FROM THE IMAGE CODE BELOW THAT YOU WISH TO ADD        //
  //                DON'T FORGET TO ADD "//" TO "ROTATE" ABOVE                //
  //////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  //                                 BEES:                                   //
  //      We can insert an image of a bee by using the image() function      //
  //         To change the image of the Boid, please delete or add "//"      //
  //                     in front of the "image" code below                  //
  /////////////////////////////////////////////////////////////////////////////
  //image(animals[0], this.position.x, this.position.y, animals[0].width/15, animals[0].height/15);

  /////////////////////////////////////////////////////////////////////////////
  //                                 BIRDS:                                  //
  //      We can insert an image of a bird by using the image() function     //
  //         To change the image of the Boid, please delete or add "//"      //
  //                     in front of the "image" code below                  //
  /////////////////////////////////////////////////////////////////////////////
  //image(animals[1], this.position.x, this.position.y, animals[1].width/20, animals[1].height/25);

  //////////////////////////////////////////////////////////////////////////////
  //                                 MONKEYS:                                 //
  //    We can insert an image of a monkey by using the image() function      //
  //         To change the image of the Boid, please delete or add "//"       //
  //                     in front of the "image" code below                   //
  //////////////////////////////////////////////////////////////////////////////
  //image(animals[2], this.position.x, this.position.y, animals[2].width/10, animals[2].height/10);

  /////////////////////////////////////////////////
  //   endShape() finishes drawing the Boids     //
  /////////////////////////////////////////////////
  endShape(CLOSE);

  /////////////////////////////////////////////////////////////////////
  //  pop() restores information related to the original state and  //
  //         style of the Boids, such as fill() and stroke()        //
  ////////////////////////////////////////////////////////////////////
  pop();

}
