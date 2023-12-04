import mongoose, {Schema} from "mongoose";
import { PostT } from "../types/PostT";

const PostSchema = new Schema<PostT>({
  title : {
    type: String,
    unique : true,
    required : [true, "Title is required"],
    minlength: [4, "Must be at least 6"],
    maxlength: [30, "Must be at less than 30"],
    trim : true
  },
  message : {
    type: String,
    required : [true, "Message is required"]
  },
  creator : {
    type: String,
    required: [true, "Creator is required"],
    trim : true
  },
  picture  : {
    type: String,
    required: [true, "Picture is required"]
  },
  tags : {
    type : [String],
    validate: {
      validator: function(arr: string[]) {
        return arr.length > 0;
      },
      message: "Tags must have at least 1 tag!!"
    }
  }
})

export const PostModel = mongoose.model<PostT>("Post", PostSchema)




