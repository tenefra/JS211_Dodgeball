const arrOfPeople = [
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

const listOfPlayers = []
const blueTeam = []
const redTeam = []

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
  console() {
    console.log(this.name)
    console.log("new player created")
  }
  addToPlayers() {
    if (this.canThrowBall && this.canDodgeBall && this.hasPaid && this.isHealthy) {
      listOfPlayers.push(this.name)
      console.log(`${this.name} has been added to the active players list.`)
    }
  }
}

class BlueTeammate extends Player {
  constructor(name) {
    super(name)
    this.teamColor = "Blue"
    this.mascot = "Blue Thing"
  }
  addToBlue() {
    blueTeam.push(this.name)
    bluePlayer()
  }
}

class RedTeammate extends Player {
  constructor(name) {
    super(name)
    this.teamColor = "Red"
    this.mascot = "Red Thing"
  }
  addToRed() {
    redTeam.push(this.name)
    redPlayer()
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people")
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id, person.name)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id, name) => {
  const newPlayer = new Player(id, name)
  newPlayer.addToPlayers(id, name)

  const listElement = document.getElementById("players")

  const li = document.createElement("li")
  const buttonBlue = document.createElement("button")
  buttonBlue.innerHTML = "Blue Team"
  buttonBlue.addEventListener("click", function () {
    addToBlue(newPlayer.id, newPlayer.name)
  })
  li.appendChild(buttonBlue)
  const buttonRed = document.createElement("button")
  buttonRed.innerHTML = "Red Team"
  buttonRed.addEventListener("click", function () {
    addToRed(newPlayer.id, newPlayer.name)
  })
  li.appendChild(buttonRed)
  li.appendChild(document.createTextNode(newPlayer.name + " - " + newPlayer.skillSet))
  listElement.append(li)

  console.log(`li ${id} was clicked!`)
}

const bluePlayer = () => {

}

const redPlayer = () => {

}