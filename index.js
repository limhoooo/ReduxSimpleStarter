"use strict";

function a() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arguments);
    Array.prototype.forEach.call(arguments, function (el) { console.log(el); });
}








a(21, 1, 2, 3, 3, 5, 6, 6, 7, 8, 98, 6, 3)