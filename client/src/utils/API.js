import axios from "axios";

export default {
  //Listing Routes
  // Gets all books
  getListing: function () {
    return axios.get("/api/listing");
  },
  // Gets the book with the given id
  getListingbyUser: function (id) {
    return axios.get("/api/listing/user");
  },
  // Saves a book to the database
  saveGoal: function (listingData) {
    return axios.post("/api/listing", listingData);
  },
  deleteGoal: function (id) {
    console.log("API/utils Goal id: ", id)
    return axios.delete("/api/listing/" + id);
  },
  // Saves a book to the database
  saveTask: function (id, listingData) {
    console.log("ID from utils/api", listingData)
    return axios.put("/api/listing/" + id, listingData);
  },
  // logs in user
  login: function (loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function (signupInfo) {
    console.log("at signup point ", signupInfo);
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function () {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  // isAdmin: function() {
  //   return axios.get("/api/users/logout")
  // },

  // logs out the user
  logout: function () {
    return axios.get("/api/users/logout")
  },

  // api that gets a random Chuck Norris Joke
  ChuckNorris: function () {
    return axios.get("https://api.icndb.com/jokes/random");
  }

};