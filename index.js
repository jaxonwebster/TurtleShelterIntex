let express = require("express");

let app = express();

let path = require("path");

const port = 5000; 

let security = false;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));


// connect to postgres

// external landing page

// internal landing page

// user maintenance page

// add user

// edit user

// delete user

// event maintenace page 

// add event

// edit event

// delete event

// change event status

// volunteer maintence page

// add volunteer

// edit volunteer 

// delete volunteer





// ideas for other pages if time:
// announcments section on internal homepage
// newsletter
// FAQ








app.listen(port, () => console.log("Express App has started and server is listening!"));