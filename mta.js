// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th Ave", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th and Broadway", "23rd and Broadway", "Union Square", "8th St" ];
var sixStations = [ "Grand Central", "33rd", "28th and Park", "23rd and Park", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('N', lStations);
var nTrain = new Train('L', nStations);
var sixTrain = new Train('Six', sixStations);
var gTrain = new Train('G', gStations);

var trains = [lTrain, nTrain, sixTrain, gTrain];



function displayLines() {
  var trainNames = "";
  _.each(trains, function(train) {
    trainNames += train.name + "\n";
  });
  return trainNames.trim();
}

function displayStations(whatTrain) {
  var train = _.findWhere(trains, {name: whatTrain});
  // for (var j = 0; j < trains.length; j++) {
  //   if (trains[j].name === whatTrain) {
  //     train = trains[j];
  //   }
  // }
  var stationNames = "";
  _.each(train.stations, function(station) {
    stationNames += station + "\n";
  });
  return stationNames.trim();
}

var msg = "Which train would you like to get on?\n" + displayLines();
var startTrain = prompt(msg);

var msg = "Which train would you like to get off?\n" + displayLines();
var endTrain = prompt(msg);

var msg2 = "Which station would you \nlike to get on?\n" + displayStations(startTrain);
var startStation = prompt(msg2);

var msg2 = "Which station would you \nlike to get off?\n" + displayStations(endTrain);
var endStation = prompt(msg2);
