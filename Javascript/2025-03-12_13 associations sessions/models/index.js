import sequelize from "../setup/setup-sequelize.js";

import User from "../models/User.model.js";
import Profile from "../models/Profile.model.js";
import Book from "../models/Book.model.js";
import Post from "../models/Post.model.js";
import Author from "../models/Author.model.js";
import "../models/assocations.js";

sequelize.models = [User, Profile, Book, Post, Author];
