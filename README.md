# CoronaStatistics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

It is a small web application developed using Angular which shows COVID-19 cases of Germany. You can also see cases accourding to region and for time period.


## File Structure
```
corona-statistics
├── src
|   ├── assets
|   ├──  index.html
|   ├──  main.js
|   └──  app
│        ├── components
|        |   ├── graph-data
|        |   |   ├── graph-data.component.ts
|        |   |   ├── graph-data.component.html
|        |   |   └── graph-data.scss
|        |   ├── table-data
|        |   |   ├── table-data.component.ts
|        |   |   ├── table-data.component.html
|        |   |   └── table-data.scss
|        |   └── table
|        |        ├── table.component.ts
|        |        ├── table.component.html
|        |        └── table.scss
|        |
|        ├── services
| 		 |	 ├── country
|        |   |   └── country.service.ts
| 		 |	 └── region
|        |       └── region.service.ts
|        |
|        ├── store
|        |   ├── country
|        |   |   ├── country.actions.ts
| 		 |	 |   ├── country.effects.ts
|        |   |   └── country.reducer.ts
|		 |	 ├── region
|        |   |   ├── region.actions.ts
| 		 |	 |   ├── region.effects.ts
|        |   |   └── region.reducer.ts
|		 |	 └── app.reducer.ts
|        |
|        ├── app.component.ts
|        ├── app.component.html
|        ├── app.component.scss
|        ├── app.module
|        └── helper.ts
|
├── package-lock.json
└── package.json
```

## Components Details

1. **Table-Data**,  It has main data logic for country and region
2. **Graph-Data**, Graphical representation of table-data
3. **Table**, Reusable table

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Corona Statistics Application.

```
git clone https://github.com/galanishubham/Covid-19-Germany-Statistics.git
cd corona-statistics
npm install
npm run serve
```
Now, you can view the project on your local device.

Thank You !!
