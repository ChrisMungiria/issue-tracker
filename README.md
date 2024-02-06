# Setting up prisma

1. `npm i ` to install all the dependencies
2. `npx prisma init` to initialize prisma
3. Set your database connection in the .env file
4. Change the provider in the `schema.prisma` file to your database provider
5. Run `npx prisma generate` to generate the prisma client
6. Run `npx prisma db push` to create the tables in the database
