// understanding common js

// exports.area = function (r) {
//     // console.log('I am from circle file');
//     return Math.PI * r * r;
// }

// exports.circumference = function(r) {
//     return 2 * Math.PI * r;
// }

// to not repeat the export thing...

class Circle {

    area(r) {
        return Math.PI * r * r;
    }

    circumference(r) {
        return 2 * Math.PI * r;
    }
}

module.exports = Circle;