const person = {
    species: 'Human',
    breathe() {
        console.log('Breathing...');
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];
manager.addTeamMember = function(name) {
    this.team.push(name);
};

console.log("Testing manager object:");
console.log(manager.species);
console.log(manager.company);
console.log(manager.position);
console.log(manager.department);