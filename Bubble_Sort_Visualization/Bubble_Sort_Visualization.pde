float[] values;

void setup () {
  // Create canvas and array of random floats based on height/width
  size(800,500);
  values = new float[width];
  for (int i = 0; i < values.length; i++){
    values[i] = random(height);
  }
  
   //values = sort(values);
  for (int i = 0; i < values.length; i++) {
    for (int j = 0; j < values.length-i-1; j++){
      float a = values[j];
      float b = values[j+1];
      if (a > b) {
        swap(values, j, j+1);
      }
    }
  }
}

void swap (float[] arr, int a, int b){
  // Create function to swap two numbers
  float temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

void draw(){
  // Draw lines
  background(0);
  for (int i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}
