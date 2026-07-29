exports.pageNotFound=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404-page.html"));
};