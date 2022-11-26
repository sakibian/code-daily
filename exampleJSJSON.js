var sakib = {
    "first_name": "Bakibillah",
    "last_name": "Sakib",
    "online": true
}

// JavaScript Object sample.
var user = {
    first_name: "Bakibillah",
    last_name: "Sakib",
    online: true,
    full_name: function() {
        return this.first_name + " " + this.last_name;
    }
}

console.log(user.first_name);
console.log(user.last_name);
console.log(user.online);
console.log(user.full_name(), "Online:", user.online);

//* Accessing JSON Data

// JSON Object 
var sakib = {
    "first_name" : "Bakibillah",
    "last_name" : "Sakib",
    "online" : true,
}

console.log(sakib.first_name);
console.log(sakib.last_name);
console.log(sakib.online);

const objBinding = sakib.first_name + " " + sakib.last_name + " " + sakib.online;

console.log('Showing result from Object Binding -',objBinding);

console.log('Accessed using square bracket -',sakib['online']);

var user_profile = {
    "username": "sakibian",
    "social_media": [
        {
            "description": "github",
            "link": "https://github.com/sakibian"
        },
        {
            "description": "facebook",
            "link": "https://www.facebook.com/bakibillahsakib"
        },
        {
            "description": "twitter",
            "link": "https://twitter.com/sakib192"
        }
    ]
}

console.log(user_profile.social_media[0].description + ": " + user_profile.social_media[0].link);
console.log(user_profile.social_media[1].description + ": " + user_profile.social_media[1].link);
console.log(user_profile.social_media[2].description + ": " + user_profile.social_media[2].link);

//* Functions for working with JSON

// JSON.stringify()
var objN = {"firstName": "Hadibillah", "lastName": "Nubair", "location": "Home"}
console.log(objN);

var objS = JSON.stringify(objN);
console.log("Converted objects to strings: ", objS);

// JSON.parse()
var JParse = JSON.parse(objS);
console.log("Converted to JSON Object: ",JParse);


var objNusair = '{"firstName": "Radibillah", "lastName": "Nusair", "location": "Home"}';

// issue needs to check later

var NParse = JSON.parse(objNusair);

document.getElementById("user").innerHTML =
"Name: " + objNusair.first_name + " " + objNusair.last_name + "<br>" +
"Location: " + objNusair.location;
