Initial Setup
===
- Install ruby gems: `bundle install`
- Install node modules: `npm install`
- Install postgres
- Setup .env file, db users, database itself
- Migrate the database `be rake db:migrate`

Development
===
- Run webpack: `webpack -d --display-reasons --display-chunks --progress --watch`
- Run the rails server: `be rails server`
- Run tests: `npm run test`
- Visit localhost:3000
