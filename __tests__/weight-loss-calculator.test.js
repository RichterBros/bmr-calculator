import { User } from '../src/weight-loss-calculator.js';

// constructor(gender, heightFeet, heightInches, weightPounds, age, goalWeight, timeFrameDays, activity)

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 155, 27, 150, 90, 3)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2663);
  });
  test('Should correctly calculate recommended calorie intake per day to lose weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayLose).toBe(2469)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 155, 27, 160, 60, 4)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2963);
  });
  test('Should correctly calculate recommended calorie intake per day to gain weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(3255)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Female", 5, 3, 130, 30, 127, 60, 2)
  });
  test('Should correctly calculate BMR of female user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1868);
  });
  test('Should correctly calculate recommended calorie intake per day to lose weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayLose).toBe(1693)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Female", 5, 3, 130, 30, 135, 30, 1)
  });
  test('Should correctly calculate BMR of female user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1630);
  });
  test('Should correctly calculate recommended calorie intake per day to gain weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(2213)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 145, 27, 165, 15, 3)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2569);
  });
  test('Should correctly calculate recommended calorie intake per day to gain a lot of weight very quickly', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(7236)
  });
});