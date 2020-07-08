import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from '../src/weight-loss-calculator.js';
import { getFood } from '../src/nutrition-api.js';


async function getElements(){
  const response = await getFood();
  if (response === false){
    $('.test').text(`There was an error handling your request.`);
  } else {
    $('.test').text(`this is a test ${response.foodNutrients[6].amount}`)
  }
}
$(document).ready(function () {
  $('form#user-info').submit(function(event) {
    event.preventDefault();

    let inputGender = $('#gender').val();
    let inputHeightFeet = parseInt($('#height-feet').val());
    let inputHeightInches = parseInt($('#height-inches').val());
    let inputWeightPounds = parseInt($('#weight-lb').val());
    let inputAge = parseInt($('#age').val());
    let inputGoalWeight = parseInt($('#goal-weight').val());
    let inputtedTimeFrame = parseInt($('#time-frame').val());
    let inputActivity = parseInt($('#bmr').val());

    let newUser = new User(inputGender, inputHeightFeet, inputHeightInches, inputWeightPounds, inputAge, inputGoalWeight, inputtedTimeFrame, inputActivity);
    console.log(newUser.inputActivity, "above the calculate BMR function")
    newUser.calculateBMR();
    console.log(newUser);
    console.log(inputActivity, "just the inputted variable")
    console.log(newUser.inputActivity, "below the calculate BMR function")
    $('#form').hide();
    $('.results').show();

    $('#BMR-results').text(`According to the information you have entered, your BMR should be about ${newUser.bmr} meaning, ${newUser.bmr} is how many calories you would consume simply to maintain the weight you are at now.`);
    newUser.calculateCaloriesPerDay();
    // console.log(newUser.calculateCaloriesPerDay());
    // console.log(parseInt($("#bmr").val()));

    function display(inputWeightPounds, inputGoalWeight){
      if (inputWeightPounds > inputGoalWeight){
        $('#diet-results').text(`To lose ${(newUser.weightDifference).toFixed()} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayLose} calories per day`);
      } else if (inputWeightPounds < inputGoalWeight){
        $('#diet-results').text(`To gain ${(newUser.weightDifference).toFixed()} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayGain} calories per day`);
      }
    }
    getElements();
    display(inputWeightPounds, inputGoalWeight);
  });
});