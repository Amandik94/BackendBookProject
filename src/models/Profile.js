import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: { type: String },
    avatar: { type: String }, // URL на изображение
    bio: { type: String, maxlength: 500 },
    favoriteBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", profileSchema);
