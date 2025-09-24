//simulasi untuk komputasi berat
function getGreeting(){
   var x = 0
   for(i=0; i<1000000000; i++){
     x +=i
   }
   return "selamat pagi"

}

function say(callback, name) {
    var greeting= callback()
    console.log(greeting, name)
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']

users.map(function(user) {
  return say(getGreeting, user)
})


//simulasi untuk komputer berat
function getGreeting(){
 var x = 0
   for(i=0; i<1000000000; i++){
    x +=i
   }
   return "selamat pagi"
}
   


function say(callback) {
    var greeting= callback()
    return function(name){
      console.log(greeting, name)
    }
    
}

var users = ['Fuad', 'Hasan', 'Ismi', 'Budi', 'Azhar']
var sayGreeting = say(getGreeting)

users.map(function(user) {
  return sayGreeting(user)
})