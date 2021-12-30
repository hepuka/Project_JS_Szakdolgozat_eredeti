module.exports = (req,res,next) => {
    if (req.user.role !== 'Admin'){
        return res.redirect('/warning');
    }
    next();
}