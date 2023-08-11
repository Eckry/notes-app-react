import { Schema, model } from "mongoose";

const KeywordSchema = new Schema(
  {
    keyword: { type: String, required: true },
  },
);

export default model("Keyword" , KeywordSchema);