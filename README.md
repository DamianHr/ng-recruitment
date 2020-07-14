# igus® Recruiment Entry Project

Welcome to the _**i**gus **R**ecruitment **E**ntry **P**roject_, the iREP is a small project which will help us evaluate your skills and abilities.

#### Before we start

##### Setup

First let's make sure that we are working in good conditions. You can work fork this project from its Github [repository](https://github.com/DamianHr/github-phvsk3-grpbff/)
or work on the online IDE [StackBlitz ⚡️](https://stackblitz.com/edit/github-phvsk3-grpbff).

###### Working with an external IDE

1. Clone the iREP using:
   `git clone https://github.com/DamianHr/github-phvsk3-grpbff.git`
2. Then install the project using:
   `npm install`
3. Run the application using:
   `ng serve`
4. Explore the app

#### Challenge #1 - We want flags!

Using the different info inside the project, modify the app to display a new column containing the flag of each country.

##### Acceptance criteria:

- The new column will be at the very left of the table
- The flag will have the following styles:
  - a width of 25px
  - a solid black border of 1px
- No additional queries will be used to achieve this task
- Additional information about the current API response can be found [here](https://restcountries.eu/#api-endpoints-response-example)

#### Challenge #2 - We want filters!

Inside the file `src/app/countries/countries.component.ts`, finish to implement the function `filter()`, then use this function to organise the data in the country table.

##### Acceptance criteria:

- Do not change the signature of the `filter()` function
- The `filter()` function will only allow data matching the following rules
  - The population of the country is higher or equal to 20M people
  - The name of the country starts with one of the letters ['b', 'g', 'l']
- The `filter()` function passes the tests present in `src/app/countries/countries.component.spec.ts`
- The `filter()` function is applied to `getData()` to see the filtered data in the app

#### Challenge #3 - We want order!

Inside the file `src/app/countries/countries.component.ts`, finish to implement the functions `sort()` using the TDD approach, then use this function to organise the data in the country table.

##### Acceptance criteria:

- Do not change the signature of the `sort()` function
- The `sort()` function is writing using the TDD approach and
- The `sort()` function passes the tests present in `src/app/countries/countries.component.spec.ts`
- The tests of the `sort()` function cover all the branches of the function
- The `sort()` function is applied to `getData()` to see the sorted data in the app

Good luck ! :)
