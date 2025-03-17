function loggerMid(req, res, next){
    console.log("Incoming request method: ", req.method)
    res.json({
        message: 'GET Request is received and handled.',
      });

      next()
}

module.exports = loggerMid;

