const auth = (req, res, next) => {
    // console.log('hey wazzuup this is the middlware');
    // next();
    res.status(401).json({error: "unauthorized"});
}

module.exports = auth;