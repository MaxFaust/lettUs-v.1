req.isAuthenticated() - true if user is logged in, else false
req.user -- gives you the logged in user information
rejectUnauthenticated -- middleware to protect routes from access by the public or people not logged in.