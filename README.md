# Setting up prisma

1. `npm i ` to install all the dependencies
2. Delete the prisma folder.
3. `npx prisma init` to initialize prisma
4. Set your database connection in the .env file
5. Copy the prisma folder from the repo.
7. Run `npx prisma generate` to generate the prisma client
8. Run `npx prisma db push` to create the tables in the database
9. Lastly, to run the project, run `npm run dev`

- To reset the entire database, run `npx prisma migrate reset` then run `npx prisma db push` to create the tables again
