export const errorHandler = (err, req, res, next) => {
    
    // The issue is not with your error handling, but rather with the 
    // behavior of Mongoose when it receives an invalid ObjectId (like a random string instead
    //  of a valid 24-character hex ID).
    // If you pass a non - valid MongoDB ObjectId(e.g.abc123), 
    // Mongoose doesn’t return null, it throws a CastError, and your code jumps directly to the catch block:
    
    if (err.name === 'CastError' || err.kind === 'ObjectId') {
        res.status(400).json({ message: "Invalid user ID format" });
    }
    else if (err.status) {
        res.status(err.status).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: "server error" });
    }
}
