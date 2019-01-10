import './index.css';

import webRequest from './util/web-request';

console.log("starting");
webRequest("GET", "blah.txt", function(text){
    console.log("=======================");
    console.log("text");
    console.log("-----------------------");
    console.log(text);
    console.log("=======================");
});
console.log("ending");

