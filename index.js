
const userInfo = {
  user: "user1",
  password: "password1234"
}

function createLoginTracker (user) {

  let attemptCount = 0

  const username = user["user"]
  const userPassword = user["password"]

  return (passwordAttempt) => {

    attemptCount += 1

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts"
    }

    if (passwordAttempt === userPassword){
      return "Login successful"
    } else {
      return `Attempt ${attemptCount}: Login failed`
    }

  }

}

createLoginTracker(userInfo)

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};