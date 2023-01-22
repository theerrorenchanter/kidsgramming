
# Kidsgramming

Educational platform that hosts video-courses for ages between eight and thirteen

## Technology used

- React
- React router
- Redux toolkit
- ESLint
- Vite
- Formik
- Firebase
- YUP
- Axios
- SweetAlert
- PropTypes
- Material UI
- Laravel

## Requirements

- NodeJS
- NPM or YARN
- Docker Compose

## Installation

First, you will need to download the files of this repository, ```kidsgramming-be``` contains the files for the backend and  ```kidsgramming-be``` for the frontend.

Once you have installed the backend and folder project, first go to the backend file and up the project with docker compose

```bash
  cd kidsgramming-be
  docker compose -f docker-compose.yml up
```

You can see the container name by performing this command
```bash
  docker ps
```

Then, you will need to install the dependencies from inside the container.
Note that ```kidsgramming-be-laravel.test-1``` is the name of the container
```bash
  cd kidsgramming-be
  docker exec -it kidsgramming-be-laravel.test-1 composer install
```

Then you will have sail installed, which allow us to perform docker actions in an easier way.
Let's first stop our running container and up it again using sail
```bash
  ./vendor/bin/sail up
```

Finally, we will have to serve our project using artisan and sail
```bash
  ./vendor/vin/sail artisan serve
```

For our frontend, first we will need to go to the frontend folder and install the dependencies
```bash
  cd kidsgramming-fe
  npm install or yarn install
```

Then, we will have to run our frontend project, this will give us an URL that we could use
to open the frontend on our browser
```bash
  npm run dev or yarn dev
```
