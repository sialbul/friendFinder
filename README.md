# Friend Finder Application

This full-stack site will take in results from users' surveys, then compare your answers with those from other users.
The app will then display the name and picture of the user with the best overall match.

The application is implemented using a **Node.js** and **Express** server on the back end and the **CSS** framework on the front end.

## Demo
*Friend Finder* is deployed to Heroku. Please check it out [here.](https://boiling-lake-37451.herokuapp.com/)

## Technologies Used

* JavaScript
* jQuery
* Node.js
* Express.js
* HTML
* Bootstrap

## Code Explanation

* Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
* There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
* Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
A modal is then toggled, displaying the the best match to the person who just took the survey
* Friends are stored as such:
```
    {   "name":"Efe",
"image": "https://www.askideas.com/media/21/3-Year-Old-Japanese-Bobtail-Kitten-Sitting.jpg",
"scores":[5,1,4,4,4,5,1,2,4,5 ]
    }

    {   "name":"Emir",
"image": "https://www.askideas.com/media/21/Adorable-White-Japanese-Bobtail.jpg",
"scores":[2,1,4,3,4,5,1,3,4,5 ]
    }

 
```

* Created by Sibel Baslamisli [https://github.com/sialbul](https://github.com/sialbul)