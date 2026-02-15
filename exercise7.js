const shape = {
    calculateArea() {
        return 0;
    }
};

const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;   
rectangle.calculateArea = function() {
    return this.width * this.height;
};

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

console.log("Testing rectangle object:");
console.log(rectangle.calculateArea());

console.log("Testing circle object:");
console.log(circle.calculateArea());