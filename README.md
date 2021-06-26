# Work Day Scheduler Starter Code
created columns and titles for each column.  Set the color, weight, and alignment for the text.
created row placement holders
added a for loop to create wireframe.
utilize an image of a floppy disk to represent save. Image retrieve from https://fontawesome.com/v5.15/icons/save?style=regular.
Changed background color to beige
set header(h1) color to teal
added the radius (left, top and bottom) to the .hour class. Changed the border to solid.
adjusted the button to fit the .savebtn area. 
adjusted the wireframe from sm-2 to 2m-1; sm-8 to sm-10.
added date to the document work Scheduler.

 var currentDay = document.querySelector("#currentDay");
      var currentTime = moment();{
      currentDay.textContent = currentTime.format("dddd, MMMM Do YYYY");
      return currentDay
      }
       //const moment = require('moment');
    // const d= new Date ('2021/06/23');
    // moment(d).format('MMMM d, YYYY'); //June 23, 2021

       }
    var currentDay = document.querySelector("#currentDay");
      var currentTime = moment();{
      currentDay.textContent = currentTime.format("dddd, MMMM Do YYYY");
      return currentDay 
         <div class ="time-block" id="task-form-control" tabindex="1" role="dialog" aria-labelledby ="task-form-control" area-hidden="true">
      <div class ="time-block-dialog modal-dialog-centered" role="document">
      <div class = "time-block-content">
        <div class ="time-block-header">
          <h2 class="time-block-title" id="task-form-modal">Add New task</h2>
          <button type="button" class="close" data dismiss="time-block" aria-label = "Close">
           <span aria-hidden="true">&times;</span> 
          </button>
        </div>
      </div>
      </div>  
      </div>