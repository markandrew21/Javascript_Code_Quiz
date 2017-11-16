//Write a function in javascript that takes a start_date, end_date, x - returns an array of x equally spaced dates in between them. For example, given 2016-01-01 00:00:00, 2016-01-02 00:00:00, 24 - you'd return an array of each hour between the 2 dates. Here are your variables: start_date = 2016-01-01 00:00:00; end_date = 2016-01-08 00:00:00; x = 42;

function getDateArray()
{
  //Start with these
  var start_date = new Date("2016-01-01 00:00:00"); 
  var end_date = new Date("2016-01-08 00:00:00"); 
  var x = 42;

  //Convert the difference in the 2 dates to milliseconds
  var differenceInMilliseconds = Math.abs(start_date - end_date)
  
  //Divide the diffence by the interval x, where x = 42 
  var intervalInMilliseconds = Math.ceil(differenceInMilliseconds / x)
  
  //Convert the Milliseconds back to a date
  var start_dateInMilliseconds = start_date.getTime();
  
 //Make an array
  var dateArray = [];
  
  // Loop x times, where x = 42
  for(var i=0; i < x; i++)
    {
      //Take the start_date and add the interval in milliseconds
      var newTime = Math.abs(start_dateInMilliseconds += intervalInMilliseconds);
      
      //Convert to a string so it is readable
      var dateString = (new Date(newTime)).toString(); 
      
      //Add the output to the array
      dateArray.push(dateString);   
    }
    return dateArray;
};

//Display the results
console.log(getDateArray().join("\n"));
