# helpeat
A web application allowing to compose the menus of the week and the weekend while respecting the WHO recommendations.

> A Vue.js project with personnal css framework 

## Build Setup and start application
1- install dependencies
```
npm install
```
2- build for production with minification
```
npm run build
```

3- serve with hot reload at localhost:8080
```
npm run dev
```
## How the application works
#Step 1: Home page
  -We have navigation which allows you to see the OMS recommendations and saved menus.
  -The start button allows you to enter a new menu for the week.
#Step 2: Form
  You have two options:
    -Check the "Activate meal generation" box to generate menus based on OMS recommendations
    - Unfold a day of the week and select a category according to the meals of the day.
  Validate to generate the schedule for the week.
#Step3: Result page
  You can see the menus of the different meals of the day for each day.
  You have printed the schedule with the print button.
  
Enjoy it!!!

>For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
