var timeblockInser = document.getElementById("timeblock-place");
var timeDisplay = document.getElementById("currentDay");
var hours = 8;
var minutes = 00;
var time = moment().set("hour", hours).set("minute", minutes);
selectionValue = 0;

timeBlock = [
  {
    id: 0,
    hour: ["8:00AM"],
    tasks: []
  },
  {
    id: 1,
    hour: ["9:00AM"],
    tasks: []
  },
  {
    id: 2,
    hour: ["10:00AM"],
    tasks: []
  },
  {
    id: 3,
    hour: ["11:00AM"],
    tasks: []
  },
  {
    id: 4,
    hour: ["12:00PM"],
    tasks: []
  },
  {
    id: 5,
    hour: ["1:00PM"],
    tasks: []
  },
  {
    id: 6,
    hour: ["2:00PM"],
    tasks: []
  },
  {
    id: 7,
    hour: ["3:00PM"],
    tasks: []
  },
  {
    id: 8,
    hour: ["4:00PM"],
    tasks: []
  },
  {
    id: 9,
    hour: ["5:00PM"],
    tasks: []
  },
]

  var setDate = function () {
    timeDisplay.textContent = moment().format("dddd, MMMM Do");
  }

var createTimeblock = function () {
  // testArr = [];
//   // loop the following
  for (var i = 0; i < timeBlock.length; i++){
//   // create container
  var containerEl = $("<div>")
  .addClass("row justify-content-center timeblock-container");
//   // create time listing
  var timeblockTime = $("<div>")
    timeblockTime.addClass("col-2 bg-info text-light text-center p-2")
    timeblockTime.attr("data-number", i)
    timeblockTime.text(timeBlock[i].hour);
//   // create div for future editable text to input obligation
  var timeblockTask = $("<div>")
    timeblockTask.attr("data-number", i)
    .addClass("col-6 bg-dark border-right border-left border-light text-light p-2")
    var taskInput = $("<textarea>");
    taskInput
    .addClass("text-light col-12 border-0")
    .attr("type","text")
    .attr("id", i)
    taskInput.text(timeBlock[i].tasks)
    timeblockTask.append(taskInput);
//   // create div to insert save button. test text to visualize div creation.
  var timeblockSaveEl = $("<div>")
    .addClass("col-2 bg-success p-2 save-div text-center");
    var saveIcon = $("<i>")
    saveIcon.addClass("fas fa-save fa-5x")
    .attr("type", "button")
    .attr("data-number", i)
    .on("click", function (event) {
      event.target;
      var btn = $(this).attr("data-number");
      var btnInput = $(this).parent().siblings().children().val();
      console.log(btn);
      console.log(btnInput);
      console.log(timeBlock[0].tasks);
      if(btn === "0"){
        (timeBlock[0].tasks).push(btnInput);
        timeBlockSave();
      }
      if(btn === "1"){
        (timeBlock[1].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "2"){
        (timeBlock[2].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "3"){
        (timeBlock[3].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "4"){
        (timeBlock[4].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "5"){
        (timeBlock[5].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "6"){
        (timeBlock[6].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "7"){
        (timeBlock[7].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "8"){
        (timeBlock[8].tasks).push(btnInput);
        timeBlockSave();
      }
      else if (btn === "9"){
        (timeBlock[9].tasks).push(btnInput);
        timeBlockSave();
      }
      console.log(timeBlock[0].tasks);
    });
    timeblockSaveEl.append(saveIcon);
//   // start stuffing divs into DOM
//   // container into parent
//   // other three sections into the container
  containerEl.append(timeblockTime, timeblockTask, timeblockSaveEl);
  $("#timeblock-place").append(containerEl);
  selectionValue++;
  }
};

var timeBlockSave = function () {
    localStorage.setItem("savedtasks", JSON.stringify(timeBlock));
};

var timeBlockLoad = function () {
    var loadTasks = localStorage.getItem("savedtasks");
    if (!loadTasks) {
      return false;
    }
    timeBlock = JSON.parse(loadTasks);
};

timeBlockLoad();
setDate();
createTimeblock();