# Code Plan

### 1

The app must include full functionality to view people, add them to the list of active players, and then assign them to a team accordingly. These groupings will be split into 4 different arrays, and the objects/people will switch in between depending on their status.

### 2

The app will use JavaScript classes to assign new key-value pairs and methods to objects based on their assignment between active players and teams. The Player class object will be created for all people chosen as active players, classes for each team will be created based on team assignment, and the team classes will inherit from Player.

### 3

The app will create DOM elements for each person. Upon player or team assignments, DOM elements will be created or deleted accordingly, to show status of the object. Each array will be looped through using map(), so each list on the DOM is up to date.

### 4

Unit tests will be written to confirm that they application works on the terminal without user input. These will confirm functionality and a consistent experience.
