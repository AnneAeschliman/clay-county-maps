### Clay County Maps

## Objectives
Create an application on a website that displays land owner history by category or by utilizing an interactive map.

## Structure
1. Database
2. Back-end
3. Front-end

## Database
The assignment suggested the use of MySQL. However, this isn't optimized for our client's needs as it's very heavy, so we used SQLite as it's light and open-sourced.

## Back-end Server
A server was provided to us via K-State that utilizes php. However, our group doesn't have any php experience, so we used Node.js and Express.js as they are used by beginners and integrate easily with the database and front-end.

## Front-end
A front-end framework was not needed as only HTML, CSS, and Javascript are really necessary. 

## Challenges
An interactive map simply isn't feasible given that the grids aren't in perfect squares, which is necessary when combining the user interface to the database. However, JSON could be used to store data in the front end code or have a certain section in the database.

## Data handling
Theoretically, all data could be stored in the front-end code. However, that would be a mountain of information for an internet browser to sort through, which is why it needs its own database.
