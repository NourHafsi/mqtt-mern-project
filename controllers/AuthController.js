const bcrypt = require("bcryptjs");

const {
  MissingPrameter,
  UnknownError,
  ElementNotFound,
  UnAuthorized,
} = require("../errors/general");
const User = require("../models/User");

exports.create = (username, email, password) =>
  new Promise((resolve, reject) => {
    if (nom === undefined) {
      return reject(
        new MissingPrameter("Le nom est un champ obligatoire", "nom")
      );
    }
    if (prenom === undefined) {
      return reject(
        new MissingPrameter("Le prenom est un champ obligatoire", "prenom")
      );
    }
    if (email === undefined) {
      return reject(
        new MissingPrameter("Le email est un champ obligatoire", "email")
      );
    }
    if (password === undefined) {
      return reject(
        new MissingPrameter("Le password est un champ obligatoire", "password")
      );
    }

    const user = new User();
    user.username = username;
    user.email = email.toLowerCase();
    user.password = password;
    return user
      .save()
      .then((c) => resolve(c))
      .catch((e) => reject(new UnknownError(e.message)));
  });

// exports.getById = (id) =>
//   new Promise((resolve, reject) => {
//     try {
//       return Coach.findById(id)
//         .then((coach) =>
//           coach
//             ? resolve(coach)
//             : reject(
//                 new ElementNotFound(
//                   "There is no Coach registered with the provided id."
//                 )
//               )
//         )
//         .catch((error) =>
//           reject(
//             new UnknownError(
//               `Unexpected error server side using code ${error.code}`
//             )
//           )
//         );
//     } catch (err) {
//       return reject(
//         new UnknownError(`Unexpected error server side using code ${err.code}`)
//       );
//     }
//   });

// exports.update = (
//   id,
//   nom,
//   prenom,
//   email,
//   password,
//   telephone,
//   gsm,
//   photoProfil
// ) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const coach = await this.getById(id);
//       if (nom !== undefined) {
//         coach.nom = nom;
//       }
//       if (prenom !== undefined) {
//         coach.prenom = prenom;
//       }
//       if (email !== undefined) {
//         coach.email = emaill.toLowerCase();
//       }
//       if (password !== undefined) {
//         coach.password = password;
//       }
//       if (telephone !== undefined) {
//         coach.telephone = telephone;
//       }
//       if (gsm !== undefined) {
//         coach.gsm = gsm;
//       }
//       if (photoProfil !== undefined) {
//         coach.photoProfil = photoProfil;
//       }
//       return coach
//         .save()
//         .then((updatedCoach) => resolve(updatedCoach))
//         .catch((e) => reject(new UnknownError(e.message)));
//     } catch (e) {
//       return reject(new UnknownError(e.message));
//     }
//   });

exports.login = (email, password) =>
  new Promise((resolve, reject) => {
    if (email === undefined || email.length === 0) {
      return reject(new MissingPrameter("email is required", "email"));
    }
    if (password === undefined || password.length === 0) {
      return reject(new MissingPrameter("password is required", "password"));
    }
    return User.findOne({
      email: email.toLowerCase(),
      password,
    })
      .then((user) => {
        if (user && bcrypt.compare(password, user.password)) {
          return resolve(user);
        }
        return reject(new UnAuthorized("Wrong username/password combinations"));
      })
      .catch((error) => reject(new UnknownError(error.message)));
  });
