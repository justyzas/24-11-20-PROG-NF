import User from "./User.model.js";
import Profile from "./Profile.model.js";
import Post from "./Post.model.js";
import Author from "./Author.model.js";
import Book from "./Book.model.js";

// 1 TO 1 (User->Profile)

User.hasOne(Profile, {
	foreignKey: {
		name: "userId",
		allowNull: false,
		unique: true,
	},
	onDelete: "CASCADE",
});
Profile.belongsTo(User, {
	foreignKey: "userId",
});

// 1 TO MANY (User->Posts)

User.hasMany(Post, {
	foreignKey: {
		name: "userId",
	},
	onDelete: "SET NULL",
});
Post.belongsTo(User, {
	foreignKey: "userId",
});

// MANY TO MANY

Author.belongsToMany(Book, { through: "AuthorBooks" });
Book.belongsToMany(Author, { through: "AuthorBooks" });
