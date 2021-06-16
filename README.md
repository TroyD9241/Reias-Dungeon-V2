# Reias Dungeon
-------------------
*By Troy Dawson - [Visit the Dungeon](https://deviantart-aa.herokuapp.com/)*


## Reias Dungeon Overview
--------------------------
Reias Dungeon is a fullstack application built using Flask, React, & Redux that mimics the functionality of [Deviantart](https://www.deviantart.com/).

Users can interact with posts, allowing them to Post their own artwork or memes if they prefer that 🤦‍♂️. Users have the ability to follow, favorite, and comment on posts.

## Application Architecture
---------------------
RD is a fullstack application built with Python and Javascript libraries while integrating Postgresql as the database of choice. All of the frontend and backend logic was built around my own custom API. Below is the full list of technologies used.

## Backend Overview
---------------------
RD is relatively light on the backend. With that being said it still features quite a few Python libraries, see below for more details 🦆.

### **Backend Technologies Used**
**Flask**

This project is overall balanced between backend and frontend features in my estimations. The backend was built upon the Flask framework, and this choice mostly came down to my desire to continue to improve my familiarity with Python.

**SQLAlchemy**

SQLAlchemy is a powerful ORM that allowed me to make queries that could potentially be difficult into something that was quite simple.

**Postgres**

Postgres utilizes a relational database, which allows for increased data accuracy making the chances of duplicated data zero. The Flexibility of Postgres was also a key selling point, it allows for easy scaling up or down and makes future features easy to implement.

## Frontend Overview
----------------------
Bazaar also features a robust front end powered by React and Redux. Below are the Technologies and Libraries used.

### **Frontend Technologies Used**

**React**

The core of the frontend is the popular framework React. RD Forgoes many of the react-libraries available in favor of raw design and engineering. Which helped me continue to cement my understanding of react and the logic involved in many of these popular libraries available to us. Bazaar includes a lot of different components that were designed for modularity, reusability, and testability.

**Redux**

All of the data received from the backend is stored in the store creating a slightly longer initial load time, but allowing for an extremely quick user experience after that load is completed.


## Final Thoughts
-------
RD originally was a different project, but due to a multitude of personal reasons I struggled to find the desire to work on a site from scratch. So to compensate I attempted to find a site that was feature heavy and really gave me the spark of motivation I needed. Deviant features a truly interesting UI that I enjoyed emulating. The core of this app was developed in a few days, and polished over the last two weeks. I'd like to continue to work on this project in the future and continue to play with the interesting features that Deviantart boasts. Thanks for reading! I hope you enjoyed looking at this project, and I hope you wouldnt mind connecting with me on [Linkedin](https://www.linkedin.com/in/troyd41/).😁
