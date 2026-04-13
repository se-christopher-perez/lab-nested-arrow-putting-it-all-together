
const userInfo = {
  user: "user1",
  password: "password1234"
}

function createLoginTracker (user) {

  let attemptTracker = 0

  const username = user["user"]
  const userPassword = user["password"]

  return (passwordAttempt) => {

    attemptTracker += 1

    if (attemptTracker > 3) {
      return "Account locked due to too many failed login attempts"
    }

    if (passwordAttempt = userPassword){
      return "Login successful"
    } else {
      return "Login failed"
    }

  }

}

console.log(createLoginTracker(userInfo))

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};