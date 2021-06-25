var rightNow= moment().format("MMMM Do, YYYY");
//console.log(rightNow);

var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
  
    var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskDate);
  
    var taskP = $("<p>").addClass("m-1").text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);
  
    // check due date
    auditTask(taskLi);
  
    // append to ul list on the page
    $("#list-" + taskList).append(taskLi);
  };
  var auditTask = function(taskEL){//get date from task element
    var date = $(taskEl).find("span"). text().trim();
    //ensure it worked
    console.log(date);
    //convert to mement object at 5:00pm
  
    var time = moment(date, "L"). set ("hour", 17);
    //remove any old classes from element
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  //apply new class if task is near/over due date
  if(moment().isAfter(time)) {$(taskEL).addClass("list-group-item-danger");
}
};
