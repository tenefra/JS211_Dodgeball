let arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
]

// Arrays containing objects as they're moved from available players to a team. This functionality also allows the app to be quickly converted to a terminal app.

let listOfPlayers = []
let blueTeam = []
let redTeam = []

// Players class object is created when user assigns players from the list of available people. New Player objects are given extra keys using the constructor.

class Player {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id
    this.name = name
    this.age = age
    this.skillSet = skillSet
    this.placeBorn = placeBorn
    this.hasPaid = true
    this.isHealthy = true
    this.canThrowBall = true
    this.canDodgeBall = true
  }
  // This method pushes the new object into the listOfPlayers array and filters the arrOfPeople array to remove the object.
  addToPlayers() {
    if (this.canThrowBall && this.canDodgeBall && this.hasPaid && this.isHealthy && this.name != undefined) {
      listOfPlayers.push(this)
      arrOfPeople = arrOfPeople.filter(item => item.id !== this.id)
      console.log(`${this.name} has been added to the active players list.`)
    }
  }
}

// The BlueTeammate class object is created when a Player has been assigned to the blue team. The new class object inherits id, name, age, skillSet, and placeBorn from the Player constructor, and creates two new key/value pairs that are team specific

class BlueTeammate extends Player {
  constructor(id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn)
    this.teamColor = "Blue"
    this.mascot = "Blue Thing"
  }
  // The addToBlue() method pushes the new object into the blueTeam array, and filters the listOfPlayers array to remove the object.
  addToBlue() {
    blueTeam.push(this)
    listOfPlayers = listOfPlayers.filter(item => item.id !== this.id)
    console.log(this)
  }
}

// The RedTeammate class object is created when a Player has been assigned to the blue team. The new class object inherits id, name, age, skillSet, and placeBorn from the Player constructor, and creates two new key/value pairs that are team specific

class RedTeammate extends Player {
  constructor(id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn)
    this.teamColor = "Red"
    this.mascot = "Red Thing"
  }
  // The addToRed() method pushes the new object into the RedTeam array, and filters the listOfPlayers array to remove the object.
  addToRed() {
    redTeam.push(this)
    listOfPlayers = listOfPlayers.filter(item => item.id !== this.id)
    console.log(this)
  }
}

// The below uses the map method to loop through the arrOfPeople array and creates DOM elements for each object.
// Since the DOM directly reflects each array, the innerHTML is reset before each loop so the DOM is always up to date.
const listPeopleChoices = () => {
  const listElement = document.getElementById("people")
  listElement.innerHTML = ""

  arrOfPeople.map(person => {
    const li = document.createElement("li")
    li.classList.add("people-li")
    const button = document.createElement("button")
    button.classList.add("people-btn")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// The below uses the map method to loop through the listOfPlayers array and creates DOM elements for each object.  Extra buttons are added to choose either Blue or Red.
// Since the DOM directly reflects each array, the innerHTML is reset before each loop so the DOM is always up to date.
const makePlayer = (id, name, age, skillSet, placeBorn) => {
  const newPlayer = new Player(id, name, age, skillSet, placeBorn)
  newPlayer.addToPlayers(id, name, age, skillSet, placeBorn)
  const listElement = document.getElementById("players")
  listElement.innerHTML = ""

  listOfPlayers.map(person => {
    const li = document.createElement("li")
    const buttonBlue = document.createElement("button")
    buttonBlue.innerHTML = "Blue Team"
    buttonBlue.addEventListener("click", function () {
      bluePlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn)
    })
    li.appendChild(buttonBlue)
    const buttonRed = document.createElement("button")
    buttonRed.innerHTML = "Red Team"
    buttonRed.addEventListener("click", function () {
      redPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn)
    })
    li.appendChild(buttonRed)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })

  listPeopleChoices()
}

// The below uses the map method to loop through the listOfPlayers array and creates DOM elements for each object.
// The makePlayer() function is run at the end to remove the chosen player from the available players list

const bluePlayer = (id, name, age, skillSet, placeBorn) => {
  const newBluePlayer = new BlueTeammate(id, name, age, skillSet, placeBorn)
  newBluePlayer.addToBlue(id, name, age, skillSet, placeBorn)
  const listElement = document.getElementById("blue")
  listElement.innerHTML = ""
  blueTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
  makePlayer()
}

const redPlayer = (id, name, age, skillSet, placeBorn) => {
  const newRedPlayer = new RedTeammate(id, name, age, skillSet, placeBorn)
  newRedPlayer.addToRed(id, name, age, skillSet, placeBorn)
  const listElement = document.getElementById("red")
  listElement.innerHTML = ""
  redTeam.map(person => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
  makePlayer()
}

// Unit Tests

if (typeof describe === "function") {
  describe("Player", function () {
    it("Should create a player", function () {
      const player1 = new Player(1, "Scott Tenefrancia")
      assert.equal(player1.name, "Scott Tenefrancia")
      assert.equal(player1.id, 1)
    })
  })
  describe("Teammate", function () {
    it("Should create a blue teammate", function () {
      const teammate1 = new BlueTeammate(1, "Scott Tenefrancia")
      assert.equal(teammate1.name, "Scott Tenefrancia")
      assert.equal(teammate1.id, 1)
      assert.equal(teammate1.color, "Blue")
      assert.equal(teammate1.mascot, "Mascot")
    })
    it("Should create a red teammate", function () {
      const teammate1 = new RedTeammate(1, "Scott Tenefrancia")
      assert.equal(teammate1.name, "Scott Tenefrancia")
      assert.equal(teammate1.id, 1)
      assert.equal(teammate1.color, "Red")
      assert.equal(teammate1.mascot, "Mascot")
    })
  })
}
