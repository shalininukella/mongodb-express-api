import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },

  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (value) => value % 2 === 0,
      message: (props) => `${props.value} is not and even number`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10,
  },
  hobbies: [String],
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  address: addressSchema,

  bestfriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User", 
  },
});

userSchema.methods.sayHi = function () {
  console.log(`hi ${this.name}`); 
};

userSchema.statics.findByName = function (name1) { 
  return this.find({ name: new RegExp(name1, "i") });
};

userSchema.query.byName = function (name1) {
  return this.where({ name: new RegExp(name1, "i") });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} ${this.email}`;
});

//middlewares
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  // throw new Error('failed save');
  next();
});

userSchema.post("save", function (doc, next) {
  doc.sayHi();
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
