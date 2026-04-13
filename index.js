
const readline = require("readline")

const readlinecl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userInfo = {
  user: "user1",
  password: "password1234"
}


function createLoginTracker (password) {

  let attemptCount = 0

  const loginAttempt = (passwordAttempt) => {
    
    attemptCount += 1

    if (attemptCount > 3) {

      return "Locked"

    }

    if (password === passwordAttempt) {
      
      return "Login successful"
    
    } else {

      "Login Failed"

    }

    return loginAttempt

  }

}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};