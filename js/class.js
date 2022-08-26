"use strict";
// Syntactic sugar
class TeamMember {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}
class Instructor extends TeamMember {
    constructor(name, location, salary) {
        super(name, location);
        this.designation = "Web Course Instructor";
        this.team = "web team";
        this.salary = salary;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}
class Developer {
    constructor(tech) {
        this.designation = "Web Developer";
        this.team = "dev team";
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`Please add this feature ${feature}`);
    }
    release(vwesion) {
        console.log(`please release this version ${vwesion}`);
    }
}
const shamim = new Instructor("shamim", "Dhaka", 5000);
console.log(shamim);
shamim.startSupportSession("5pm");
