import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
}


async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    // If user doesn't exist or password is incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h', // Token expiration time
    });

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
}

export { registerUser, loginUser };
