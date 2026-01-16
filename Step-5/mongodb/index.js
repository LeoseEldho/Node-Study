const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://leoseeldho:leoseeldho2026@cluster0.nq1zbz3.mongodb.net/"
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  isActive: Boolean,
  tag: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    // const newUser = await User.create({
    //   name: "loi1",
    //   email: "loi1eldho@gmail.com",
    //   password: "loi1eldho2026",
    //   age:"15",
    //   isActive: true,
    //   tag: ["developer",],
    // });

    // const newUser = new User({
    //   name: "biju",
    //   email: "bijueldho@gmail.com",
    //   password: "bijueldho2026",
    //   age: "21",
    //   isActive: true,
    //   tag: ["developer", "manager"],
    // });
      //   await newUser.save()
      //   const allUser =await User.find({})
      
      //   console.log(newUser)
  } catch (e) {
    console.log(e);
  } finally {
    await mongoose.connection.close()
  }
}
runQueryExample();
