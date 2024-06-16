import Feedback from "../models/feedback.js";

export const getAllFeedbacks = async (req, res) => {
  const data = await Feedback.find();
  return res.json(data);
};
