const Sketch = (p) => {
  let angle = 0;
  let myImage;
  let imgURL = "";

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.img) {
      imgURL = props.img;
    }
  };

  p.setup = function () {
    p.createCanvas(700, 700, p.WEBGL);
    p.translate(p.width / 2, p.height / 2);
  };

  p.draw = function () {
    if (imgURL) {
      myImage = p.loadImage(imgURL, (img) => (myImage = img));
      imgURL = "";
    }
    p.background(20);
    p.rotateX(angle);
    p.rotateY(angle);
    p.fill(255, 255, 255, 70);
    if (myImage) {
      p.texture(myImage);
    }
    p.box(300);
    angle += 0.01;
  };
};

export default Sketch;
