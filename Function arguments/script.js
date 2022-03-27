// No Argument
const paint = function() {
    console.log("The wall has been painted red");
};
paint(); 

// Single argument
const paint2 = function(color) {
    console.log("The wall has been painted " + color);
};
const wall1 = "green";
const wall2 = 'puple'; // Answer no.6
paint2(wall2);

// Answer no.7 Nothing, the will show the first color 

// Multiple arguments
const paint3 = function(location, color) {
    console.log("The " + location + " wall has been painted " + color);
};
const item = "orange";
const item2 = "gray";
const map = "north";
const map2 = "south-east";
paint3(map2, item);

// Answer no.6 Yes
// Answer no.7 The meaning will change 
// Answer no. its possible , and the result will good