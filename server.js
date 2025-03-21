const mongoose = require("mongoose");
const Blog = require("./schema");

mongoose.connect("mongodb://127.0.0.1:27017/blogApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Create a new blog post
const newBlog = new Blog({
  title: "Introduction to MongoDB",
  content: "This is a beginner-friendly introduction to MongoDB and its features...",
  author: "JohnDoe",
  tags: ["MongoDB", "Database", "NoSQL"]
});

newBlog.save()
  .then(() => console.log("Blog post saved!"))
  .catch(err => console.log(err));
