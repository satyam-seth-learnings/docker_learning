# Docker Networking

- [YouTube Video Link](https://youtu.be/2bn5_FJJu8w?si=tqPHdjqBCnpMAG7H)

1. Bridge Network

2. Host Network

3. Overlay Network

- [Docker Network Official Docs](https://docs.docker.com/engine/network/)

- List all network

    ```sh
    docker network ls
    ```

- Inspect all network

    ```sh
    docker network inspect <network-name>
    ```

- Create network

    ```sh
    docker network create --driver <driver-name> <network-name>
    ```

- Run container with a user define network

    ```sh
    docker run --name <container-name> -itd --network <network-name> <image-name> <command-name>
    ```

- Use host network for container

    ```sh
    docker run --rm -d --network host --name <container-name> <image-name>
    ```

- Exit from container terminal without stopping container -> `ctrl+p` and then `ctrl+q`
