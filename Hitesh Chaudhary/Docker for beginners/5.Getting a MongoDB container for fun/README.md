- [YouTube Video Link](https://youtu.be/Xqbj2o3wckI?si=kWNTw9Zfav1DCFvZ)

- [mongo Docker Image Link](https://hub.docker.com/_/mongo)

- Run `mongo` docker image

    ```sh
    docker run mongo
    ```

- List Docker Containers on Your Machine

    ```sh
    docker ps --all
    ```

- Start Docker Container

    ```sh
    docker start <container-id>
    ```

- Stop Docker Container

    ```sh
    docker stop <container-id>
    ```

- Kill Docker Container

    ```sh
    docker kill <container-id>
    ```

- Execute Command on Docker Container bash shell

    ```sh
    docker exec -it <container-id> bash
    ```

- To exit from container shell press `ctrl+d` or type `exit` on shell

    ```sh
    exit
    ```
