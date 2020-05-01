req.isAuthenticated() - true if user is logged in, else false
req.user -- gives you the logged in user information
rejectUnauthenticated -- middleware to protect routes from access by the public or people not logged in.

User types of Groups
Add a property to your user table
    -admin property as a boolean true-false
    -user_property as String with a set of known values like 'admin," 'group_1', 'group_2'
    