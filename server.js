// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// // Register route
// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;
//   console.log("Received registration:", req.body);
//   res.json({ success: true, message: "Registered successfully" });
// });

// // Login route (dummy example)
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   if (email === "test@example.com" && password === "123456") {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false, message: "Invalid credentials" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.json({ success: false, message: "User already exists" });
  }
  users.push({ email, password });
  res.json({ success: true });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
