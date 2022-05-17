const users = [
  {name: 'HARRY'},
  {name: 'ADMIN'},
  {name: 'MANSU'},
]

const foundUser = users.find(function(user){
  return user.name == 'ADMIN'
})

console.log(foundUser)