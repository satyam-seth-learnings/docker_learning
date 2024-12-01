# Docker Compose

- [YouTube Video Link](https://youtu.be/S8f5B8-BtzU?si=E4EkrIBHmfFB_zz-)

- [Docker Compose Official Doc](https://docs.docker.com/compose/)

### What is Docker Compose

- Compose is a tool for defining and running multi-container Docker applications.

- With Compose, you use a YAML file to configure your application's services.

- Then, with a single command, you create and start all the services from your configuration.

- Compose works in all environments: production, staging, development, testing, as well as CI workflows.

- Docker Desktop includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

- Following are use Cases of Docker Compose:-
    
    - Development environments
    
    - Automated testing environments

### Docker Compose Key Features

- Have multiple isolated environments on a single host

- Preserves volume data when containers are created

- Only recreate containers that have changed

- Supports variables and moving a composition between environments


- Docker compose help 

    ```sh
    docker compose --help
    ```

    - Note: This command is used to see other available commands.

- Run containers
    
    ```sh
    docker compose up
    ```

    - Note: This command will take the docker-compose.yml file and start building container. This command will download/pull required images and create/start required containers. If we modify docker-compose.yml file and again run docker compose up then it will only recreate modified containers.

### Commands

- Check docker compose version

    ```sh
    docker compose version
    ```

- Run containers in background

    ```sh
    docker compose up —d
    ```

    - Note: It is same as docker compose up but it will run in the background which means it won't occupy terminal.

- Check running services

    ```sh
    docker compose ps
    ```

    - Note: This command is used to list currently running service.

- Get container terminal access

    ```sh
    docker compose exec service name <service-name> <command>
    ```

    - Note: This command is used to get access the terminal of container.

- Stop container

    ```sh
    docker compose stop
    ```

    - Note: This command is used to stop compose started using `docker compose up -d`

- Stop and remove containers

    ```sh
    docker compose down
    ``` 
    - Note: This command is used to remove containers entirely. It will not remove volumes. If you want to remove volumes then use `--volumes` flag.

- Check docker compose config

    ```sh
    docker compose config --profile <profile-name>
    ```

    - Note: --profile is optional

- Note: We can pass custom file name for docker compose commands using `-f` flag.

- List all containers

    ```sh
    docker container ls
    ```