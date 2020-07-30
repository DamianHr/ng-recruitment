# iREP

Welcome to the _**i**gus **R**ecruitment **E**ntry **P**roject_, the iREP is a small project which will help us evaluate your skills and abilities.

#### Before we start

##### Setup

First let's make sure that we are working in good conditions. You can work fork this project from its Github [repository](https://github.com/DamianHr/github-phvsk3-grpbff/)
or work on the online IDE [StackBlitz ⚡️](https://stackblitz.com/edit/github-phvsk3-grpbff).

###### Working with an external IDE

1. Clone the iREP repo :
   `https://github.com/DamianHr/github-phvsk3-grpbff.git`
2. Install the project
3. Run the application
4. Explore the app

#### Challenge #1 - We want flags!

Using the different info inside the project, modify the app to display a new column containing the flag of each country.
Make sure that all the acceptance criteria are met.

##### Acceptance criteria:

- The new column is at the very left of the table (`mat-table` in `countries/countries.component.ts`)
- The header of the new column is labeled `Flag`
- The flag has the following styles:
  - a width of 25px
  - a solid black border of 1px
- No additional queries are used to achieve this task
- Examples about the current API response can be found [here](https://restcountries.eu/#api-endpoints-response-example)

#### Challenge #2 - We want filters!

Inside the file `src/app/countries/countries.component.ts`, finish to implement the function `filter()`, then use this function to organize the data in the country table.
Make sure that all the acceptance criteria are met.

##### Acceptance criteria:

- Do not change the signature of the `filter()` function
- The `filter()` function is only allowing data matching the following rules:
  - The population of the country is higher or equal to 20M people
  - The name of the country starts with one of the letters ['b', 'g', 'l']
- The `filter()` function passes the tests present in `src/app/countries/countries.component.spec.ts`
- The `filter()` function is applied to `getData()` to see the filtered data in the app
- You are allowed to use [Mozilla's Javascipt doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

#### Challenge #3 - We want order!

Inside the file `src/app/countries/countries.component.ts`, finish to implement the functions `sort()` using the TDD approach,
then use this function to organize the data in the country table. Make sure that all the acceptance criteria are met.

##### Acceptance criteria:

- Do not change the signature of the `sort()` function
- The `sort()` function is writing using the TDD approach
- The `sort()` function passes the tests present in `src/app/countries/countries.component.spec.ts`
- The tests of the `sort()` function cover all the branches of the function
- The `sort()` function is applied to `getData()` to see the sorted data in the app
- You are allowed to use [Mozilla's Javascipt doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

Good luck ! :)
