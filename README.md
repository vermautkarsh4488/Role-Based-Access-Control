# Role-Based-Access-Control
This project is about understanding and implementation skills regarding Authentication, Authorization, and Role-Based Access Control (RBAC)

# Technologies Used
 Node.js,Express.js,MongoDB,JWT(JSON Web Tokens),Bcrypt.js

# Features
# User Authentication:

## Secure registration and login system.
## Passwords stored securely using bcrypt hashing.
## Tokens issued using JWT for session management.
## Role-Based Access Control (RBAC):

## User roles (admin, moderator, user) dictate access to endpoints.
## Middleware ensures secure role-based route protection.
## Secure Design:

## Token expiration for session security.
## Modular structure for easy scalability and maintenance.

# 1. Authentication
# Method	 Endpoint	  Description	             Access
# POST	 /api/register	 Register a new user     Public
# POST	 /api/login	  Login and get JWT token    Public


# 2. Role-Based Routes
# Method   	Endpoint	    Description  	                   Role Required
# GET   	/api/admin	    Access admin resources	         Admin
# GET  	 /api/moderator 	Access moderator resources	    Moderator
# GET 	/api/user       	Access user resources          	User


# Security:
# Proper password hashing and token management.
# Robust role-based access control.

# Modularity:
# Clean and maintainable code

# Scalability:
# Flexible structure for adding more roles or features.



