
var name = 'Qingdong';
var name = 'Mike'; // you can redefine a var without any problems.
//console.log("Qingdong is working.", name);
const getFirstName = (fullname) => fullname.split(' ')[0];

console.log(getFirstName("Qingdong Cheng One"));

const multiplier = {
    numers: [2,3,4],
    multiplyBy: 4,
    multiply() {
        return this.numers.map( (number) => number * this.multiplyBy);
    }

};

console.log(multiplier.multiply());