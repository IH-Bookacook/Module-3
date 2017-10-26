const mongoose = require("mongoose");

/*how to handle passwords???*/
const User = require("../models/user");
const Master = require("../models/master");
const Artist = require("../models/artist");
const Publisher = require("../models/publisher");
const Release = require("../models/release");
const Series = require("../models/series");

mongoose.connect(mongodbUri, {
  useMongoClient: true
});

var users = [];

User.remove({})
  .then(() => {
    users = [
      {
        name: "Barbara Dupont",
        email: "barbara.dupont@hotmail.fr"
      },
      {
        name: "Jean Rousseau",
        email: "jean.rousseau@gmail.com"
      },
      {
        name: "Marc Henri",
        email: "marc.henri@gmail.com"
      },
      {
        name: "Philippe Moreau",
        email: "philppe.moreau@laposte.fr"
      },
      {
        name: "Sylvette Florentin",
        email: "sylvette.florentin@gmail.com"
      },
      {
        name: "Baptiste Crozat",
        email: "baptiste.crozat@hotmail.fr"
      },
      {
        name: "Dev Gupta",
        email: "christelle.voisin@hotmail.fr"
      },
      {
        name: "Mario Liugiano",
        email: "mario.luigiano@gmail.com"
      },
      {
        name: "Lu Chen",
        email: "lu.chen@gmail.com"
      },
      {
        name: "Wassim Adbou",
        email: "wassim.abdou@gmail.com"
      },
      {
        name: "Paquito Hernandez",
        email: "paquito.hernandez@gmail.com"
      }
    ];
  })
  .then(() => User.create(users))
  .then(value => console.log("Number of new users created: ", value.length))
  .then(() => mongoose.connection.close());

mongoose.connect(mongodbUri, {
  useMongoClient: true
});

var master = [];

Master.remove({})
  .then(() => {
    masters = [{
        title:"Les archives de La Gaffe",
        YearFirstPublished: 1957,
        country:"Belgium",
        genre:"Comedy",
        credits:[
            {
                artistId: "Franquin",
                role: "author"
            }
        ],
        awards:[
        ],
        image:"Gaston.jpg",
        publisher:
        [
            {
              publisherId: "DUPUIS",
                }
          ],
        series:[
           Schema.Types.ObjectId: "GASTON"
        ],
        numInTheSeries:"1",
        addedBy: Schema.Types.ObjectId,
        notes: ,

    },
    {
        
    },{},{},{},{},{},{},{},{}];
  })
  .then(() => User.create(users))
  .then(value => console.log("Number of new users created: ", value.length))
  .then(() => mongoose.connection.close());
