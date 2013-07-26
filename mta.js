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

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

var trains = [lTrain, nTrain, sixTrain, gTrain];

var msg = "Which train would you like to get on?\n" + displayLines();
var startTrain = prompt(msg);


var msg = "Which train would you like to get off?\n" + displayLines();
var endTrain = prompt(msg);

function displayLines() {
  var trainNames = "";
  _.each(trains, function(train){
    trainNames += train.name + "\n";
  });
  return trainNames.trim();
}


function forEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(array, func) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

function displayStations(whatTrain) {
  var train = null;
  for (var j = 0; j < trains.length; j++) {
    if (trains[j].name === whatTrain) {
      train = trains[j];
    }
  }
  var trainStations = "";
  for (var k = 0; k < train.stations.length; k++) {
    trainStations += train.stations[k] + "\n";
  }
  return trainStations.trim();
}

var msg2 = "Which station would you \nlike to get on?\n" + displayStations(startTrain);
var startStation = prompt(msg2);

var msg2 = "Which station would you \nlike to get off?\n" + displayStations(endTrain);
var endStation = prompt(msg2);
