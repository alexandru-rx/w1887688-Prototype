const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

function safeUser(u) {
  return {
    id: u._id,
    fullName: u.fullName,
    email: u.email,
    role: u.role,
    phone: u.phone || ''
  };
}

router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        ok: false,
        message: 'fullName, email and password are required.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        ok: false,
        message: 'Password must be at least 6 characters.'
      });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({
        ok: false,
        message: 'Email already registered.'
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email: email.toLowerCase(),
      passwordHash,
      role: role === 'promoter' ? 'promoter' : 'customer'
    });

    req.session.user = safeUser(user);

    return res.json({ ok: true, user: req.session.user });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err.message
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        message: 'email and password are required.'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        ok: false,
        message: 'Invalid email or password.'
      });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({
        ok: false,
        message: 'Invalid email or password.'
      });
    }

    req.session.user = safeUser(user);

    return res.json({ ok: true, user: req.session.user });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err.message
    });
  }
});

router.get('/me', (req, res) => {
  const user = req.session.user || null;
  return res.json({ ok: true, user });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

module.exports = router;
