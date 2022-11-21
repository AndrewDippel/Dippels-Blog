# Dippel's Blog

this is a full stack webpage where you can add a blog post or choose to comment on others
![Alt text](Assets/Screenshot%202022-11-21%20at%206.54.42%20pm.png)
## User Stories

* As a user, I want to see a list of current post from like minded people.

* As a user, I want to be able to create an account.

* As a registered user, I want to add my own post and comments to others posts.

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of all post from the database.

* It's done when the `/post/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.
![Alt text](Assets/Screenshot%202022-11-21%20at%206.29.25%20pm.png)
* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/dashboard` route renders the logged-in user's post and a form to create a new project.
![Alt text](Assets/Screenshot%202022-11-21%20at%206.56.53%20pm.png)
* It's done when only a logged in user can visit the `/dashboard` route.

* It's done when a logged in user is redirected to `/dashboard` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new post in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their post from the database.

* It's done when a user on the profile page can select add comment button to add a comment to any post while logged-in.
![Alt text](Assets/Screenshot%202022-11-21%20at%206.45.26%20pm.png)
* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Instilation

follow this link: https://nameless-crag-26300.herokuapp.com/

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `post`

    * `id`: primary key

    * `title`

    * `content`

    * `date_created`

    * `user_id`: foreign key that references `User.id`

  * `comment`

    * `id`: primary key

    * `comment`

    * `date_created`

    * `user_id`: foreign key that references `User.id`

    * `post_id`: foreign key that references `Post.id`

  * Users have many post, and post belong to a user, post can have many comments, comment belongs to one post.


## test

no test at this time

## how to contribute

if you would like to contribute please contact me @a.t.dippel@gmail.com
---