function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
  
  export default calculateBMI;
  