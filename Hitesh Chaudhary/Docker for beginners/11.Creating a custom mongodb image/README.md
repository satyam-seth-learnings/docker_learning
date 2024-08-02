- [YouTube Video Link](https://youtu.be/tW1M6G_9NZA?si=xO5hpnsujk4JElW4)

- To build docker image

    ```sh
    docker build <path-to-docker-file>
    ```

- To run docker image

    ```sh
    docker run <image-id>
    ```

- To get status about docker containers

    ```sh
    docker ps
    ```

- To get into docker container

    ```sh
    docker exec -it <container-id> <command>
    ```

    - Ex- Open shell

        ```sh
        docker exec -it ea9677411e9c sh
        ```