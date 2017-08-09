var users = {
 'students': [
     {first_name:  'Michael', last_name : 'Jordan', number : 13},
     {first_name : 'John', last_name : 'Rosales',number : 11},
     {first_name : 'Mark', last_name : 'Guillen',number : 11},
     {first_name : 'KB', last_name : 'Tonel', number : 7}
  ],
 'instructors': [
     {first_name : 'Michael', last_name : 'Choi', number : 11},
     {first_name : 'Martin', last_name : 'Puryear', number: 13}
  ]
 }

function SI(){
console.log("Students");
for(var i = 0; i<users.students.length; i++){
console.log(users.students[i].first_name+" - "+users.students[i].last_name+" - "+users.students[i].number);
}

console.log("Instructors");
for(var i = 0; i<users.instructors.length; i++){
console.log(users.instructors[i].first_name+" - "+users.instructors[i].last_name+" - "+users.instructors[i].number);
}
}
SI();
