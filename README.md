# nodeExpressReactMongoVite_photoSharing
A basic demo on how to combine react with node-express using vite and express generator but with es6 modules


## Installation


Clone the repository and then do:

```
npm install
npm start
```
Which will start the backend server, running on http://localhost:3000. 


## Database

This application assumes that you have a Mongo server running on localhost:27017, or configured in the `MONGOMONGODB_URI` environment variable. For initializing the database you can run the command `npm run initDB` which will run `mongoimport` on the [./db/initialPhotoSharingData.json](./db/initialPhotoSharingData.json) data, and will create a `photoSharing` database with a `photos` collection


## Frontend

The express application will serve the compiled react application hosted on [./front](./front) folder. If you want to recompile it just run 

```npm install
npm run build``` 

on the font folder. You can also start a secondary development server for the front end using `npm run dev` on the [./front](./front)  folder courtesy of vite, which will serve the front via http://localhost:5173


