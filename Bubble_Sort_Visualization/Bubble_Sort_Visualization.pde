float[] values;

void setup () {
  // Create canvas and array of random floats based on height/width
  size(800,500);
  values = new float[width];
  for (int i = 0; i < values.length; i++){
    values[i] = random(height);
  }
}

void draw(){
  // Draw lines
  background(0);
  for (int i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}
