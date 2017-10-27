const mongoose = require("mongoose");

const User = require("../models/user");
const Master = require("../models/master");
const Artist = require("../models/artist");
const Publisher = require("../models/publisher");
const Release = require("../models/release");
const Serie = require("../models/serie");

function getIdFromName(array, name) {
  return array.find(el => el.name === name)._id;
}

function connect(uri) {
  return mongoose.connect(uri, {
    useMongoClient: true
  });
}

function cleanup() {
  return Release.remove({})
    .then(() => Master.remove({}))
    .then(() => Serie.remove({}))
    .then(() => Artist.remove({}))
    .then(() => Publisher.remove({}))
    .then(() => User.remove({}));
}

function seedUsers() {
  const users = [
    {
      name: "Barbara Dupont",
      username: "barbara",
      email: "barbara.dupont@hotmail.fr"
    },
    {
      name: "Jean Rousseau",
      username: "jrousseau",
      email: "jean.rousseau@gmail.com"
    },
    {
      name: "Marc Henri",
      username: "mhenri",
      email: "marc.henri@gmail.com"
    }
  ];
  return User.create(users).then(createdUsers => {
    return {
      users: createdUsers
    };
  });
}

function seedArtists(data) {
  const { users } = data;
  const artists = [
    {
      name: "Albert Uderzo",
      addedBy: getIdFromName(users, "Barbara Dupont")
    },
    {
      name: "Hergé",
      addedBy: getIdFromName(users, "Marc Henri")
    },
    {
      name: "Yves Chaland",
      addedBy: getIdFromName(users, "Barbara Dupont")
    }
  ];
  return Artist.create(artists).then(createdArtists => {
    return Object.assign(
      {
        artists: createdArtists
      },
      data
    );
  });
}

function seedPublishers(data) {
  const { users } = data;

  // Add the addedBy's
  const publishers = [
    {
      name: "Dupuis",
      addedBy: getIdFromName(users, "Barbara Dupont")
    },
    {
      name: "Hachette",
      addedBy: getIdFromName(users, "Marc Henri")
    },
    {
      name: "Pilote",
      addedBy: getIdFromName(users, "Jean Rousseau")
    }
  ];

  return Publisher.create(publishers).then(createdPublishers => {
    return Object.assign(
      {
        publishers: createdPublishers
      },
      data
    );
  });
}

function seedSeries(data) {
  const { users } = data;
  // same fixes
  const series = [
    {
      name: "Asterix",
      addedBy: getIdFromName(users, "Barbara Dupont")
    },
    {
      name: "Gaston",
      addedBy: getIdFromName(users, "Marc Henri")
    },
    {
      name: "Pilote",
      addedBy: getIdFromName(users, "Jean Rousseau")
    },
    {
      name: "Les Aventures de Tintin",
      addedBy: getIdFromName(users, "Jean Rousseau")
    }
  ];
  return Serie.create(series).then(createdSeries => {
    return Object.assign(
      {
        series: createdSeries
      },
      data
    );
  });
}

function seedMasters(data) {
  const { users, artists, publishers, series } = data;
  const masters = [
    {
      title: "Adolphus Claar",
      yearFirstPublished: 1983,
      country: "Belgium",
      genre: "Science Fiction",
      credits: [
        {
          artist: getIdFromName(artists, "Yves Chaland"),
          role: "author"
        }
      ],
      image: "../client/src/assets/adolphusclaarcouv.jpg",
      publisher: [getIdFromName(publishers, "Dupuis")],
      addedBy: getIdFromName(users, "Barbara Dupont")
    },
    {
      title: "Tintin au pays des Soviets",
      yearFirstPublished: 1961,
      country: "France",
      genre: "Comedy",
      credits: [
        {
          artist: getIdFromName(artists, "Hergé"),
          role: "author"
        }
      ],
      image: "../client/src/assets/848456829.jpg",
      publisher: [getIdFromName(publishers, "Pilote")],
      series: getIdFromName(series, "Les Aventures de Tintin"),
      numInTheSeries: "1",
      addedBy: getIdFromName(users, "Jean Rousseau")
    },
    {
      title: "La Serpe d'or",
      yearFirstPublished: 1957,
      country: "France",
      genre: "Comedy",
      credits: [
        {
          artist: getIdFromName(artists, "Albert Uderzo"),
          role: "author"
        }
      ],
      image: "../client/src/assets/asterix02eo_22942.jpg",
      publisher: [getIdFromName(publishers, "Pilote")],
      series: getIdFromName(series, "Asterix"),
      numInTheSeries: "1",
      addedBy: getIdFromName(users, "Marc Henri")
    }
  ];
  return Master.create(masters).then(createdMasters => {
    return Object.assign(
      {
        masters: createdMasters
      },
      data
    );
  });
}

function seedReleases(data) {
  const { masters, artists, users, publishers } = data;
  const releases = [
    {
      master: getIdFromName(masters, "Adolphus Claar"),
      releaseCountry: "France",
      releasePublisher: "Pilote",
      addedBy: getIdFromName(users, "Marc Henri")
    },
    {
      master: getIdFromName(masters, "La Serpe d'or"),
      releaseCountry: "France",
      releasePublisher: "Pilote",
      isFirstIssue: true,
      coverType: "Rigide",
      releaseYear: 1957,
      addedBy: getIdFromName(users, "Jean Rousseau")
    },
    {
      master: getIdFromName(masters, "La Serpe d'or"),
      releaseCountry: "France",
      releasePublisher: "Dupuis",
      coverType: "Souple",
      releaseYear: 1978,
      addedBy: getIdFromName(users, "Barbara Dupont")
    }
  ];
  return Release.create(releases).then(createdReleases => {
    return Object.assign(
      {
        releases: createdReleases
      },
      data
    );
  });
}

function disconnect() {
  return mongoose.connection.close();
}

connect("mongodb://localhost/blog-lab")
  .then(cleanup)
  .then(seedUsers)
  .then(seedArtists)
  .then(seedPublishers)
  .then(seedSeries)
  .then(seedMasters)
  .then(seedReleases)
  .catch(err => console.error(err))
  .then(disconnect);
