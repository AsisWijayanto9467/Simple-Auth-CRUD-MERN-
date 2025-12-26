const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const connectDB = require("../config/db");

const seedUsers = async () => {
  try {
    await connectDB();

    await User.deleteMany();

    const salt = await bcrypt.genSalt(10);

    const users = [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: await bcrypt.hash("admin123", salt),
      },
      {
        name: "User Test",
        email: "user@gmail.com",
        password: await bcrypt.hash("user123", salt),
      },
    ];

    await User.insertMany(users);

    console.log("Seeder user berhasil dijalankan ✅");
    process.exit();
  } catch (error) {
    console.error("Seeder gagal ❌", error);
    process.exit(1);
  }
};

seedUsers();
