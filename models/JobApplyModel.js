import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
id: { type: String, required: true, trim: true},
});

const JobModel = mongoose.model("Job", JobSchema);
export default JobModel;