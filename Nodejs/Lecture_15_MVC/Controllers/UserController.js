import {User } from '../Models/UserModel.js'
export const userRegister = async (req, res) => {
  try {
    // Create new user in MongoDB using User model
    let user = await User.create(req.body);

    // Respond with success JSON
    res.json({
      message: "🎉 User created successfully!",
      // NewUser: user, // uncomment if you want to return user data
      success: true,
    });
  } catch (error) {
    // Handle error gracefully
    res.json({
      message: `⚠️ Error: ${error.message}`
    });
  }
};