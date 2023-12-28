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
  thumbnail: string;
  // thumbnail: {
  //   public_id: string;
  //   url: string;
  // };
  thumbnailCaption: string;
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
    thumbnailCaption: {
      type: String,
      required: [true, 'Please enter thumbnail caption'],
    },
    // thumbnail: {
    //   public_id: String,
    //   url: String,
    // },
    fullBlogContent: {
      type: String,
      required: [true, 'Please enter full description'],
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

const blogsModel: Model<IBlog> = mongoose.model('Blog', blogSchema);

export default blogsModel;
