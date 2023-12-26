require('dotenv').config();
import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../utils/ErrorHandler';
import { CatchAsyncError } from '../middleware/catchAsyncErrors';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import ejs from 'ejs';
import path from 'path';
import sendMail from '../utils/sendMail';
import {
  accessTokenOptions,
  refreshTokenOptions,
  sendToken,
} from '../utils/jwt';
import { redis } from '../utils/redis';
import {
  getAllUsersService,
  getUserById,
  updateUserRoleService,
} from '../services/user.service';
import cloudinary from 'cloudinary';
import blogsModel from '../models/blogs.model';

export const createBlog = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const blogsFormData = req.body;
      const blog = await blogsModel.create(blogsFormData);

      res.status(201).json({
        success: true,
        blog,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }
);

// get all blogs
export const getAllBlogs = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const blogs = await blogsModel.find();

      res.status(200).json({
        success: true,
        blogs,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
