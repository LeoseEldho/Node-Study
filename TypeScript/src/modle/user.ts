import mongoose, { Document, Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    createdAt: Date
});

type IUser = InferSchemaType<typeof userSchema>

const user = mongoose.model<IUser>("user", userSchema)

export { user };
export type {IUser}