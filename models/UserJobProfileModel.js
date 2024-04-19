import mongoose from "mongoose";

const User_KnowledgeSkillsAbilities_ProfileSchema = new mongoose.Schema({

// id: {id:mongoose._id,reference:"User"},
// username:{username,reference:"User"},
// email:{id:email,reference:"User"},

// resume_headline:{},
// resume:{},
// project:{},
// github_account:{},
// specialisation:{},
// key_skills:{},
// profile_summary:{},
// category:{},//student/worker...etc
degree:{type: String, required: true, trim: true},
branch:{type: String, required: true, trim: true},
course:{type: String, required: true, trim: true},
college:{type: String, required: true, trim: true},

});

// const UserCareerProfileSchema = new mongoose.Schema({
// CurrentWork:{},
// JobField:{},
// DesiredJobType:{},
// PreferredShift:{},
// Department:{},
// ExpectedSalary:{},
// PreferredWorkLocation:{}
// });

// const UserPersonalDetailsSchema = new mongoose.Schema({
// user_photo:{},
// aadhar_card_photo:{},
// DOB:{},
// DifferentlyAbled:{},
// CareerBreak:{},
// WorkPermit:{},
// Languages:{},
// About_Personality:{},
// PersonalInterests:{},
// Aim:{}
// });

// const UserAccomplishmentsSchema = new mongoose.Schema({
// OnlineProfileLink:{},
// WorkSampleLink:{},
// ResearchPublicationLink:{},
// PresentationLink:{},
// Patent:{},
// Certificates_pdf:{}
// });

// const UserEducationSchema = new mongoose.Schema({
// class_X_per:{type: Number, required: true, trim: true},
// class_Xii_per:{type: Number, required: true, trim: true},
// graduation_or_diploma_CGPA:{type: Number, required: true, trim: true},
// post_graduation_CGPA:{type:Number, required: true, trim: true},
// class_X_marksheet_photo:{required: true},
// class_Xii_marksheet_photo:{required: true},
// graduation_or_diploma_marksheet_photo:{required: true},
// post_graduation_marksheet_photo:{required: false},
// Phd_result_photo:{required:false}
// });

const UserMain_KSA_JobProfileModel = mongoose.model("Main_KSA_JobProfile_of_User",User_KnowledgeSkillsAbilities_ProfileSchema);
//const UserCareerProfileModel = mongoose.model("CareerProfile_of_User",UserCareerProfileSchema);
//const UserPersonalDetailsModel = mongoose.model("PersonalDetails_of_User",UserPersonalDetailsSchema);
//const UserAccomplishmentsModel = mongoose.model("Accomplishments_of_User", UserAccomplishmentsSchema);
//const UserEducationModel = mongoose.model("Education_of_User", UserEducationSchema);

//export default {UserAccomplishmentsModel,UserCareerProfileModel,UserMain_KSA_JobProfileModel,UserPersonalDetailsModel,UserEducationModel};
export default UserMain_KSA_JobProfileModel;
//id of all tables must be in first main table(KSA) ans main table id must available in each and every table.