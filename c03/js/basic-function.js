var msg = '10% 할인을 받으시려면 지금 회원으로 가입하세요!';

function updateMessage(){
  var el = document.getElementById('message');
  el.textContent = msg;
}

updateMessage();
/*
function calculateArea(width, height){
  var area = width * height;
  return area;
}
var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);

console.log(wallOne);

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

console.log(areaOne);
console.log(volumeOne);
*/
/*
function area(width, height) {
  return width * height;
};
var size = area(3, 4);
console.log(size);

var area2 = function(width, height) {
  return width * height;
};
var size2 = area2(3, 4);
console.log(size2 + '개');
*/

/*
var hotel = {
  name: 'Query',
  rooms: 40, 
  booked: 25,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
}
var hotelName = hotel.name;
var roomsFree = hotel.checkAvailability();
*/
var hotel2 = {
  name: 'Query',
  rooms: 40, 
  booked: 25,
  checkAvailability: function(){
    var free = this.rooms - this.booked;
    return free;
  }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textcontent = hotel.checkAvailability();