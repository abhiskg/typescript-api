// Syntactic sugar
class TeamMember {
  name: string;
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  salary: number;

  constructor(name: string, location: string, salary: number) {
    super(name, location);
    this.salary = salary;
  }

  startSupportSession(time: string) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module: string) {
    console.log(`please create quiz for module ${module}`);
  }
}

class Developer {
  designation = "Web Developer";
  team = "dev team";
  tech: string;

  constructor(tech: string) {
    this.tech = tech;
  }

  developerFeature(feature: string) {
    console.log(`Please add this feature ${feature}`);
  }
  release(vwesion: string) {
    console.log(`please release this version ${vwesion}`);
  }
}

const shamim = new Instructor("shamim", "Dhaka", 5000);
console.log(shamim);
shamim.startSupportSession("5pm");
