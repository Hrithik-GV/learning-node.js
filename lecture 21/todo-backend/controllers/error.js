const path = require("path");
const rootDir = require("../utils/pathUtils");
exports.pageNotFound=(req,res,next)=>{
    res.status(404).json({message:"page not found"});
};