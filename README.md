**I Am Bham - Final Exam**
1 December 2017
9AM - 1PM

*To view this file in Markdown: use ⇧⌘P Markdown: Open Preview*

*Parameters*

 - You can use the internet for the duration of the final (with the exception of Github and the lectures).
 - You cannot Slack or receive help from anyone (except me, however any help I give, as well as whether I will help or not, will be based on the content of the question you are asking). 
 - You can use your previous projects/lectures/Github as a reference for the last 30 minutes of your exam.
 - These projects do NOT need to be on Github.

*Seed*

 - Server: You have been given the `package.json`, `tsconfig.json`, and `db.ts`.
 - You have not been given the `formatArguments()` function in `db.ts` you must create this function yourself.
 - You will execute `npm run dev` to run the api. 
 - Angular: You have also been given the `proxy.config.json`. 
	 - You will need to add this flag to your `npm start` script: `--proxy-config proxy.config.json`.

*Requirements*

 - Database
	 - One table named Movies with columns for title, director, and poster.
	 - Three stored procedures `spGetMovies`, `spInsertMovie`, and `spGetMovie`. 
	 - Insert your own data (use bitly if the poster uri length is too long for your specified `varchar` length).
	 - You are not required to modularize your api into separate routers nor are you required to use the `controllers` and `procedures` model we have been using, however it is recommended.
 - API
	 - A `get` route, which serves all movies.
	 - A `post` route, which creates one movie.
	 - A `get` route, which serves one movie based on its `id`
 - Angular 
	 - Show a list of all movies.
	 - Create a movie.
	 - Show one movie.
	 - You MUST style your project (*n.b.* if you want to use `scss` remember to include the `--style=scss` flag when you generate your project).
	 - You are not required to break your project into multiple components nor are you required to create a `MovieService`, however doing these are recommended (although this will depend on your user interface).
	 - (Hint: it may be easier to use `toPromise()` on your `http` observables.) 

**Hint**: Remember to turn your SQL server on.

**Good Luck!**