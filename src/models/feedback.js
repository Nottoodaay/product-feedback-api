import mongoose from "mongoose";

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  descritpion: {
    type: Schema.Types.String,
    required: true,
  },
  upvotes: {
    type: Schema.Types.Number,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
