"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
// declar parameter types, and then return type
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = 'default value'; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
var format = function (title, param) { return "".concat(title, ": ").concat(param); };
exports.format = format;
// void function
var printFormat = function (title, param) {
    console.log("".concat(title, ": ").concat(param));
};
exports.printFormat = printFormat;
// returning a promise
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); };
exports.fetchData = fetchData;
// rest parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, ", ").concat(names.join(', '));
}
function getName(user) {
    var _a, _b;
    // optional chaining with null coalescing to allow for more agile JavaScript compilation
    // null coalescing provides a default value in the case of null or undefined
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
