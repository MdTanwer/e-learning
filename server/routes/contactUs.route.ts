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
import { createMessage } from '../controllers/contactUs.controller';

const contactUsRouter = express.Router();

contactUsRouter.post('/create-message', createMessage);

contactUsRouter.get('/all-messages');

contactUsRouter.get('/message');

contactUsRouter.put('/update-message');

contactUsRouter.put('/delete-message');

export default contactUsRouter;
