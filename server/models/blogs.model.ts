require('dotenv').config();
import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IBlog extends Document {
  authorName: string;
  designation: string;
  blogTitle: string;
  category: string;
  shortDescription: string;
  avatar: {
    public_id: string;
    url: string;
  };
  thumbnail: {
    public_id: string;
    url: string;
  };
  fullBlogContent: string;
  // role: string;
  // isVerified: boolean;
  // courses: Array<{ courseId: string }>;
  // comparePassword: (password: string) => Promise<boolean>;
  // SignAccessToken: () => string;
  // SignRefreshToken: () => string;
}

const blogSchema: Schema<IBlog> = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Please enter writer's name"],
    },
    designation: {
      type: String,
      required: [true, "Please enter writer's designation"],
    },
    blogTitle: {
      type: String,
      required: [true, 'Please enter blog title'],
    },
    category: {
      type: String,
      required: [true, 'Please enter blog category'],
    },
    shortDescription: {
      type: String,
      required: [true, 'Please enter short description'],
    },
    thumbnail: {
      type: String,
      required: [true, 'Please upload thumbnail'],
    },
    // thumbnail: {
    //   public_id: String,
    //   url: String,
    // },
    fullBlogContent: {
      type: String,
      required: [true, 'Please enter short description'],
    },

    // email: {
    //   type: String,
    //   required: [true, "Please enter your email"],
    //   validate: {
    //     validator: function (value: string) {
    //       return emailRegexPattern.test(value);
    //     },
    //     message: "please enter a valid email",
    //   },
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   minlength: [6, 'Password must be at least 6 characters'],
    //   select: false,
    // },

    // role: {
    //   type: String,
    //   default: 'user',
    // },
    // isVerified: {
    //   type: Boolean,
    //   default: false,
    // },
    // courses: [
    //   {
    //     courseId: String,
    //   },
    // ],
  },
  { timestamps: true }
);

// // Hash Password before saving
// userSchema.pre<IUser>("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // sign access token
// userSchema.methods.SignAccessToken = function () {
//   return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || "", {
//     expiresIn: "5m",
//   });
// };

// // sign refresh token
// userSchema.methods.SignRefreshToken = function () {
//   return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN || "", {
//     expiresIn: "3d",
//   });
// };

// // compare password
// userSchema.methods.comparePassword = async function (
//   enteredPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const blogsModel: Model<IBlog> = mongoose.model('Blog', blogSchema);

export default blogsModel;
