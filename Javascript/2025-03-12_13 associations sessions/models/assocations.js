import User from "./User.model.js";
import Profile from "./Profile.model.js";
import Post from "./Post.model.js";
import Author from "./Author.model.js";
import Book from "./Book.model.js";
import sequelize from "../setup/setup-sequelize.js";

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

export const AuthorBooks = sequelize.define(
	"AuthorBooks",
	{
		AuthorId: {
			type: Number,
			allowNull: false,
			references: {
				model: Author,
				key: "id",
			},
		},
		BookId: {
			type: Number,
			allowNull: false,
			references: {
				model: Book,
				key: "id",
			},
		},
	},
	{ timestamps: false }
);

Author.belongsToMany(Book, { through: AuthorBooks });
Book.belongsToMany(Author, { through: AuthorBooks });
