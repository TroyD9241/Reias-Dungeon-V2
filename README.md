# Reias Dungeon
> Created by Troy Dawson 
-----------------
## Quick Look
------------------
> Reias Dungeon is a full stack application designed to mimic the funtionality of deviantart. This app was built using React, Redux, Flask, SQLAlchemy, and Postgresql.
> Any user on the application can create a post. A post can then be liked, followed, or commented on by any logged in users. While the owner of the post has the ability to edit or delete the post.  
> To access this functionality you must be logged in however you can still see posts without being logged in. 

## Application Architecture
----------------------------
### Frontend
> I used React to create components that allow for modualr development. The applications state was managed using the Redux library. Which makes request to the backend API and updated the store as necessary. Allowing me to forgo prop threading throughout my components and only update when needed. 

### Backend 
> I used an SQL database with Postgresql as the RDBMS, Flask acted as the backend server, SQLAlchemy as the Python SQL toolkit and ORM.

## Next Steps 
-------------------------
