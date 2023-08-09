function skillsMember() {
  var skills = {
    name: 'John',
    age: 40,
    skills: ['JS', 'React', 'Node'],
    greet: function () {
      console.log(`Hello, I am ${this.name}`);
    },
    getSkills: function () {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} knows ${skill}`);
      }, this);
    }
  };

  skills.greet();
  skills.getSkills();
}