// Write your code here
function getClassroom(classroom){
  let {teachingAssistance, classList} = classroom;//destructuring 
  let teacher,assistant,students;

  if(teachingAssistance){
    [teacher,assistant,...students] = classList;
  }
  else{
    [teacher,...students] = classList;
  }
  return students;
}

// curly braces for destucturing any json object and square brackets for stucturing an array
console.log(getClassroom(
  {
    teachingAssistance:false,
    classList:["AYush","Sachin","Sonali","Sai","Ganesh"]
  }
))