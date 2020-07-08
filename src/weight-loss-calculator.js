export class User {
  constructor(gender, heightFeet, heightInches, weightPounds, age, goalWeightPounds, timeFrameDays, inputActivity){
    this.gender = gender;
    this.heightFeet = heightFeet;
    this.heightInches = heightInches;
    this.weightPounds = weightPounds;
    this.age = age;
    this.goalWeightPounds = goalWeightPounds;
    this.timeFrameDays = timeFrameDays;
    this.inputActivity = inputActivity;
    this.height;
    this.weight;
    this.goalWeight;
    this.weightDifference;
    this.bmr;
    this.calPerDayLose = 0;
    this.calPerDayGain = 0;
    this.calPerDaySubtractor
  }

  calculateBMR(){
    this.height = ((this.heightFeet * 30.48) + (this.heightInches * 2.54));
    this.weight = (this.weightPounds / 2.205);
    this.goalWeight = (this.goalWeightPounds / 2.205);
    if (this.gender === "Male"){
      this.bmr = (88.326 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age));
    } else if (this.gender === "Female"){
      this.bmr = (447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age));
    }
    if (this.inputActivity === 1){
      this.bmr *= 1.2;
    } else if (this.inputActivity === 2){
      this.bmr *= 1.375;
    } else if (this.inputActivity === 3){
      this.bmr *= 1.55;
    } else if (this.inputActivity === 4){
      this.bmr *= 1.725;
    } else if (this.inputActivity === 5){
      this.bmr *= 1.9;
    }
    this.bmr = parseFloat((this.bmr).toFixed());
  }
  
  calculateCaloriesPerDay(){
    if (this.weight > this.goalWeight){
      this.weightDifference = 2.205 * (this.weight - this.goalWeight);
      this.calPerDayLose = parseFloat((((this.timeFrameDays * this.bmr) - (this.weightDifference * 3500))/this.timeFrameDays).toFixed());
    } else if (this.weight < this.goalWeight){
      this.weightDifference = 2.205 * (this.goalWeight - this.weight);
      this.calPerDayGain = parseFloat((((this.timeFrameDays * this.bmr) + (this.weightDifference * 3500))/this.timeFrameDays).toFixed());
    }
  }
// // Semi psuedo code
//   foodListSubtractor(food){
//     this.calPerDaySubtractor = this.calPerDayGain
//     this.calPerDaySubtractor -= food-cal-value
//   }
}


