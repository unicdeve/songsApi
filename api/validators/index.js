exports.userCreateValidator = (req, res, next) => {
    // first_name
    req.check("first_name", "First name is required").notEmpty();
    req.check("first_name", "First name must be between 3 to 20 characters").isLength({
        min: 4,
        max: 20
    });

    // last_name
    req.check("last_name", "Last name is required").notEmpty();
    req.check("last_name", "Last name must be between 3 to 20 characters").isLength({
        min: 4,
        max: 20
    });
    
    const errors = req.validationErrors();
    // show the first error
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // proceed to the next middleware
    next();
}


exports.artistCreateValidator = (req, res, next) => {
    // first_name
    req.check("first_name", "Artist's first name is required").notEmpty();
    req.check("first_name", "Artist's first can not be less than 3 characters").isLength({
        min: 3,
        max: 20
    });

    // last_name
    req.check("last_name", "Artist's last name is required").notEmpty();
    req.check("last_name", "Artist's last name must be between 3 to 20 characters").isLength({
        min: 3,
        max: 20
    });
    
    const errors = req.validationErrors();
    // show the first error
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // proceed to the next middleware
    next();
}



exports.addCommentValidator = (req, res, next) => {
    // title
    req.check("user", "auth is not implemtent, pls copy any user _id!").notEmpty();
    // title
    req.check("body", "Comment body is required").notEmpty();
    req.check("body", "Comment body must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
    // check for errors
    const errors = req.validationErrors();
    // show the first error
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // proceed to the next middleware
    next();
}


exports.songCreateValidator = (req, res, next) => {
    // title
    req.check("title", "please enter song title!").notEmpty();
    req.check("title", "title can not be less than 3 characters").isLength({
        min: 3,
        max: 100
    });
    
    // artist
    req.check("artist", "please copy any artist _id!").notEmpty();
    req.check("artist", "artist name can not be less than 3 characters").isLength({
        min: 3,
        max: 100
    });

    // genre
    req.check("genre", "please album is required!!").notEmpty();
    req.check("genre", "genre can not be less than 3 characters").isLength({
        min: 3,
        max: 100
    });
    
    const errors = req.validationErrors();
    // show the first error
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // proceed to the next middleware
    next();
}