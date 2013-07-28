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

var lTrain = new Train('L', lStations);
var nTrain = new Train('N', nStations);
var sixTrain = new Train('Six', sixStations);
var gTrain = new Train('G', gStations);

var startTrain, endTrain, startStation, endStation;
var trains = [lTrain, nTrain, sixTrain, gTrain];
var numTrips = 0;
var keepRiding = "y";


function displayLines() {
  var trainNames = "";
  _.each(trains, function(train) {
    trainNames += train.name + "\n";
  });
  return trainNames.trim();
}

function displayStations(whatTrain) {
  var train = _.findWhere(trains, {name: whatTrain});
  var stationNames = "";
  _.each(train.stations, function(station) {
    stationNames += station + "\n";
  });
  return stationNames.trim();
}

function switchStation() {
  var train1 = _.findWhere(trains, {name: startTrain});
  var train2 = _.findWhere(trains, {name: endTrain});
  // return _.intersection(train1.stations, train2.stations);
  arr = _.intersection(train1.stations, train2.stations);
  return arr;
}


function displayStops() {
  var train1 = _.findWhere(trains, {name: startTrain});
  var train2 = _.findWhere(trains, {name: endTrain});
  if (train1 === train2) {
    var numStops = (train1.distance(startStation, endStation));
    console.log(numStops + " stops");
    return numStops;
  }
  else {
    // var start = indexOf(train1.startStation);
    var intersections = switchStation();
    if (intersections.length === 0) {
      console.log("No intersection; you'll have to walk.");
      return 0;
    } else {
      var numStops = train1.stations.length + train2.stations.length;
      _.each(intersections, function(midStation) {
        var totalStops = train1.distance(startStation, midStation) + train2.distance(midStation, endStation);
        if (totalStops < numStops) {
          numStops = totalStops;
        }
      });
      console.log(numStops + " stops");
      return numStops;
    }
  }
}

function catchARide() {
  var msg = "Which train would you like to get on?\n" + displayLines();
  startTrain = prompt(msg);

  var msg = "Which train would you like to get off?\n" + displayLines();
  endTrain = prompt(msg);

  var msg2 = "Which station would you like to get on?\n" + displayStations(startTrain);
  startStation = prompt(msg2);

  var msg2 = "Which station would you like to get off?\n" + displayStations(endTrain);
  endStation = prompt(msg2);

  var thisRide = displayStops();
  if (thisRide > 0) {
    numTrips++;
  }

  keepRiding = prompt("You have paid $" + numTrips * 2.5 + " in subway fares.\nWould you like to ride again? y/n");

}

while (keepRiding == "y") {
  catchARide();
}
