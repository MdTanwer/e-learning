require('dotenv').config();
import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IContactUs extends Document {
  name: string;
  email: string;
  phoneNo: number;
  subject: string;
  message: string;
  status: string;
  updateId: string;
  updatedAt: Date;
  description: string;
  // password: string;
  // avatar: {
  //   public_id: string;
  //   url: string;
  // };
  // role: string;
  // isVerified: boolean;
  // courses: Array<{ courseId: string }>;
  // comparePassword: (password: string) => Promise<boolean>;
  // SignAccessToken: () => string;
  // SignRefreshToken: () => string;
}

const contactUsSchema: Schema<IContactUs> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      validate: {
        validator: function (value: string) {
          return emailRegexPattern.test(value);
        },
        message: 'please enter a valid email',
      },
      // unique: true,
    },
    phoneNo: {
      type: Number,
      minlength: 10,
      maxlength: 10,
    },
    subject: {
      type: String,
      required: [true, 'Please enter subject'],
    },
    message: {
      type: String,
      required: [true, 'Please enter your message'],
    },
    status: {
      type: String,
      // required: [true, 'Please enter your name'],
    },
    updateId: {
      type: String,
      // required: [true, 'Please enter your name'],
    },
    updatedAt: {
      type: Date,
      // required: [true, 'Please enter your name'],
    },
    description: {
      type: String,
      // required: [true, 'Please enter your name'],
    },
    // password: {
    //   type: String,
    //   minlength: [6, 'Password must be at least 6 characters'],
    //   select: false,
    // },
    // avatar: {
    //   public_id: String,
    //   url: String,
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

// Hash Password before saving
// contactUsSchema.pre<IContactUs>('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// sign access token
// contactUsSchema.methods.SignAccessToken = function () {
//   return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || '', {
//     expiresIn: '5m',
//   });
// };

// sign refresh token
// contactUsSchema.methods.SignRefreshToken = function () {
//   return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN || '', {
//     expiresIn: '3d',
//   });
// };

// compare password
// contactUsSchema.methods.comparePassword = async function (
//   enteredPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const contactUsModel: Model<IContactUs> = mongoose.model(
  'ContactUs',
  contactUsSchema
);

export default contactUsModel;
