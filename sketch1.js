function sketch(parent) { // we pass the sketch data from the parent
  return function( p ) { // p could be any variable name

    // p5 sketch goes here

    var word = 'yeet'; // printed text

    // set up canvas
    p.setup = function() {
      let canvas = p.createCanvas(400, 400);
      canvas.parent(parent.$el);
      p.textSize(50);
      p.textFont('Georgia');
    };

    // draw first yeet
    p.draw = function() {
      p.background(255);
      p.mouseOverText();
      p.textAlign(CENTER);
      p.text(word, 200, 200);
    };

    // if mouse over text
    p.mouseOverText = function() {
        if (p.mouseX > 160 &&
            p.mouseX < 230 &&
            p.mouseY < 200 &&
            p.mouseY > 170) {
            p.textSize(100);
            p.yeet();
        }
        else {
          p.textSize(32);
        }
    }

    // crazy yeets
    p.yeet = function() {
        xval = p.mouseX;
        yval = p.mouseY;
        p.text(word, xval, yval);
        for (var i = 0; i < parent.data.x; i++) { // vue binding
            xval += p.random(-50,50);
            yval += p.random(-50,50);
            p.text(word, xval, yval);
        }
    }
  };
}

console.log('p5 script 1 loaded');