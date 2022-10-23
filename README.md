# In order to run the projects, you should follow the next steps:

# kidsgramming-fe

Requirements:

- NodeJS
- NPM
- Optional: Yarn (First you need npm installed before activating yarn)


Steps:

1. To install projects dependencies run `yarn install` inside kidsgramming-fe folder
2. Then you must run the project using `yarn dev`
- If you dont have Yarn activated just run `npm run dev`

- Ensure you are running the project on http://localhost:5173

# kidsgramming-be

Requirements:

- Docker Compose

Steps:

1. First you will need to run the docker compose file of the project by using `docker compose -f docker-compose.yml up` (This must be perform in kidsgramming-be folder)
2. Then you will be able to see the containers running by using `docker ps`

After that, we will need to install backend dependencies, but since we do not have php, composer, etc. installed we need to run a command in the container via an interative bash

3. Run `docker exec -it kidsgramming-be-laravel.test-1 composer install` where `kidsgramming-be-laravel.test-1` is the project container name showed by using `docker ps`
   Then we will have installed a tool called sail which allow us to interact with the project without performing docker commands
4. Stop docker `CTRL + C` on the terminal
5. Run the project using `./vendor/bin/sail up` inside backend folder
6. Serve the project as an api using `./vendor/vin/sail artisan serve` (Ensure the project is running on localhost:8080)
