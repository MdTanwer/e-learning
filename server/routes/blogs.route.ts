import express from 'express';
// import {
//   activateUser,
//   deleteUser,
//   getAllUsers,
//   getUserInfo,
//   loginUser,
//   logoutUser,
//   registrationUser,
//   socialAuth,
//   updatePassword,
//   updateProfilePicture,
//   updateUserInfo,
//   updateUserRole,
// } from '../controllers/user.controller';
// import { authorizeRoles, isAutheticated } from '../middleware/auth';
import { createBlog, getAllBlogs } from '../controllers/blogs.controller';

const blogsRouter = express.Router();

blogsRouter.post('/create-blog', createBlog);

blogsRouter.get('/all-blogs', getAllBlogs);

blogsRouter.get('/message');

blogsRouter.put('/update-message');

blogsRouter.put('/delete-message');

export default blogsRouter;
