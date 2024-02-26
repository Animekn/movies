last update 
21/6/23
list component
44:40

date->22/6/2023
we created a two components list and list item to show the movies in continue to watch

->we have given a container width in list.scss for overflowing the content or div containers

->in list.css inside slidearrow we did top:0,bottom:0,margin:auto and arrows are comes at center


23/06/2023
-> firstly we have created a watch page and hover effect on pages

->in registraation.jsx line no:30 
isme hmne ek query likhi hai ki ager user ne email fill kara hai aur get started pe click kra to use password ka input tag dikhega aur start membership ka button 
aur ager user ne email fill kre bina getstarted click kra to pehle use email fill krne ko bola jayega

->24-6-2023
1>create server folder
2>run command npm inti -y
3>npm i express mongoose nodemon dontenv jsonwebtoken
4>then create main js file >index.js
5>change a {test} modue to a start module in package.json so the file will automaticaly restarted when ever we save it
6>setup a mongodb file 
7>create  a .env file 

path=>resigter->login->home

8>we create a folder name modle
9>we create a files list.js user.js movies.js insie a modle folder
10>creating a api for register in auth.js
11> connecting the register page with mongodb database->netflix,table name->user

date=>25-6-23
1->we will install a crypto-js library for password incription
2->at time of login api testing it is also sending the encrypted password so we dont want it to send as an response
3->now we gona crea json webtokan by jwt which contain user id and its admin property inside user 
4->then we create a verify token.js and verify the user by secret key and cridintioals that we have gave which is id and admin

5->In user.js we well add a functionality of undating deleting DELETE
// GET
// GET ALL
// GET USER STATS funtionality by using user id and access token

6->now we were creating a movies.js in routs in which our first method is to creat a movies
//CREATE USES POST METHOD
//UPDATE WILL USES A PUT METHOD
//GET WILL SHOW THE SEARCHED MOVIE
//GET RANDOM WILL SHOW THE MOVIES WHT WE SELECTED AS A SERIES AUR MOVIE DEPENDS ON OUR CHOICES
//GET ALL


7->NOW WE CREATING A LIST.JS IN WOUTS IN WHICH OUR FIRST METHOD IS TO 
//CREATE
//DELETE
//GET=comlex part timimg 1:40:16
options hai pehlle ya to type chunega bnda ya genre 
ager wo dono nahi chunta matlb wo home page pe hi hai to use random 10 vedios show ho jayenge 

26-05-23
1->IN EVERI VERIFIED API U HAVE TO GIVE AN ACCESS TOKEN ON LOGIN ADMIN INSIDE THE HEADER OF POSTMAN..
2-> now we will work on frontend side and connect all pages with react-router-dom
HOME PAGE JB TYPE MOVIES HOGA TO MOVIES PAGE PE 
AND JB TYPE SERIES HOGA TO SERIES PAGE OPEN HOGA
3->now we create a usestate for list inside home.jsx
//now we will use use state for list we will fwthing the list from our created api
//now we added a "proxy":"http:localhost:8800/api/"  in package .json of fronted so we dont have to write complete usrl many time we can just use proxu insted of whole url

I HAVE TO UPDATE THE DATABASE BECAUSE THE TITLE TRAILER DESC ALL I HAVE TO CHANGE 

Date 30-6-23
//LIST ME CONTENT KE ANDER ME JITI BHI IDES DUNGA MOVIES KI WAHI DATA SHOW HOGA MERE FRONTEND ME 
//TRAILER PEHLE MUJHE FIREBASE STORAGE ME STORE KRNA PAD RAHA HAI FIR MUJHE WAHA SE ADDRESS LINK COPY KRKE MONGO DB ME MOVIES ME STORE KR RAHA HU TB WO SHOW HO RAHA HAI 
//NOW I WILL UPDATE MY ALL MOVIES DESCRIPTION AND THERE TRAILERS.


<!-- DATE:4/7/23 -->

<!-- in listitem we get an data of movies from backend  -->

//we use link in list item to open a watch page on click with same movie
//use location is a react hook which shows the describe location and contnet of that perticular component(we used this iside an watch component)

//Now we will create a dashboard for admin panell

{widget sm}
Now we fetch are new users data aagain and diplay thm on screen on home dashboard

chnges component of product to movies in dashboard

Now created a Context api {created 3 folders AuthContext,AuthReducer, AuthAction} inside a Admin dashbord 

3 stages in AuthAction
AuthReducer will check the state to user in 3 stages if its user the in success state it show action.payload if its not then it send failure error

=>now we will create a login page for a Admin dashboard

dispatch is used in apiall.js for calling an api acording to its stage

then we used dispatch inside login page by context hook


21-7-23
today we will add a logout functionality also
 
 firstly add in auth action
 then in authReducer user will be null
 then in authcontext