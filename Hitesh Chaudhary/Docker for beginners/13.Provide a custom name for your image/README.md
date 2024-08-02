- [YouTube Video Link](https://youtu.be/37_VuJr0xvQ?si=4Sm8MetZZmzCgKbG)

- To build docker image

    ```sh
    docker build <path-to-docker-file>
    ```

- To run docker image using image id

    ```sh
    docker run <image-id>
    ```

- To get status about docker containers

    ```sh
    docker ps
    ```

- To get into docker container using container id

    ```sh
    docker exec -it <container-id> <command>
    ```

    - Ex- Open shell

        ```sh
        docker exec -it ea9677411e9c sh
        ```

- To set custom name for a docker image

    ```sh
    docker build -t <username>/<image-name>:<tag-name> .
    ```

    - Ex-

        ```sh
        docker build -t satyamseth/mymongo:latest .
        ```

- To run docker image using image name

    ```sh
    docker run <image-name>
    ```

    - Ex-

    ```sh
    docker run satyamseth/mymongo:latest
    ```

    - Note tag name is optional