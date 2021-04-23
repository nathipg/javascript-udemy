class Course {
  #price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  set price(price) {
    if (price < 0) {
      throw new Error('Invalid price');
    }

    this.#price = price;
  }

  get price() {
    return '$' + this.#price.toFixed(2);
  }

  calculateValue() {
    return (this.#price / this.length).toFixed(2);
  }

  getSummary() {
    console.log(`===== ${this.title} =====`);
    console.log(`Length: ${this.length}`);
    console.log(`Price: ${this.price}`);
    console.log(`Value per hour: ${this.calculateValue()}`);
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const course1 = new Course('Course 1', 3, 1000);
const course2 = new Course('Course 2', 6, 2000);

console.log(course1);
console.log(course2);

course1.getSummary();
course2.getSummary();

const practicalCourse = new PracticalCourse('Practical Course', 3, 200, 60);
practicalCourse.getSummary();
console.log('Num of exercises: ' + practicalCourse.numOfExercises);

const theoreticalCourse = new TheoreticalCourse('Theoretical Course', 5, 7000);
theoreticalCourse.getSummary();
theoreticalCourse.publish();
