console.log("RUNNING SERVER FILE:", __filename);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");

const app = express();

app.set("trust proxy", 1);

if (process.env.NODE_ENV !== "production") {
  const FRONTEND_ORIGINS = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.0.1:5173",
    "http://localhost:5173",
  ];

  app.use(
    cors({
      origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        if (FRONTEND_ORIGINS.includes(origin)) return cb(null, true);
        return cb(new Error("Not allowed by CORS: " + origin));
      },
      credentials: true,
    })
  );
}

},
    credentials: true,
  })
);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json());

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "ticketwizard.sid",
    secret: process.env.SESSION_SECRET || "ticketwizard_dev_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
  })
);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/api/ping", (req, res) => res.json({ ok: true, msg: "pong" }));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB connection error:", err.message));

const TestSchema = new mongoose.Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Test = mongoose.model("Test", TestSchema);

app.get("/api/test-create", async (req, res) => {
  try {
    const doc = await Test.create({ message: "MongoDB is working ✅" });
    res.json({ ok: true, created: doc });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get("/api/test-read", async (req, res) => {
  try {
    const docs = await Test.find().sort({ createdAt: -1 }).limit(10);
    res.json({ ok: true, data: docs });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
