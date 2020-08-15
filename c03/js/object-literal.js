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
/*
var hotel = {
  name: 'Query111',
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
elRooms.textContent = hotel.checkAvailability();
*/
var hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability : function() {
    // var free = this.rooms - this.booked;
    // return free;
    return this.rooms - this.booked;
  }
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();