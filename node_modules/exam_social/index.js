var users = [{
  id: 0,
  name: "Filiberto",
  surname: "Mastrangelo",
  friends: [3],
  posts: ["hello world","byebye"],
  requestSen: [],
  requestRec: []
},
{
  id: 1,
  name: "Adalberto",
  surname: "Castro",
  friends: [0],
  posts: ["Forza Milan","W Milan"],
  requestSen: [],
  requestRec: []
},
{
  id: 2,
  name: "Bjorn",
  surname: "Lodbrock",
  friends: [3],
  posts: ["Forza","Abbasso Inter"],
  requestSen: [],
  requestRec: []

},
{
  id: 3,
  name: "Gino",
  surname: "Pino",
  friends: [2],
  posts: ["Hello","Gino"],
  requestSen: [],
  requestRec: []

}];


exports.allUsers = function(){
  return users;
}



exports.allId = function(){
  var token = [];
  for (var i = 0; i < users.length; i++) {
    token.push(users[i].id);
  }
  return token;
};



exports.newUser = function(name,surname){
  users.push({name: name, surname: surname, id: users.length});
  return users;
};




exports.newPost = function(id,post){
  var notValid = {mess:'id not valid'}
  for (var i = 0; i < users.length; i++) {
    if(users[i].id == id){
      users[i].posts.push(post)
      notValid = users;
    }
  }
  return notValid;
}




exports.postFriend = function(id,idFriend){
  if(users[id].friends.includes(idFriend)){
  return users[idFriend].posts
  }
return 'Not friend'
}




exports.requestFriend = function(idSend,idReceved){
users[idSend].requestSen.push(idReceved);
users[idReceved].requestRec.push(idSend);
return users;
}





exports.acceptFriend = function (idReceved,idSend) {
  if(users[idReceved].requestRec.includes(idSend)) {
    users[idSend].requestSen.pop(idReceved);
    users[idReceved].requestRec.pop(idSend);
    users[idSend].friends.push(idReceved);
    users[idReceved].friends.push(idSend);
    return users
  }
}



exports.delPost = function(id){
  for (var i = 0; i < users.length; i++) {
    if (id == users[i].id) {
      users[i].posts.splice(i,1)
    }
  }
  return users
}
