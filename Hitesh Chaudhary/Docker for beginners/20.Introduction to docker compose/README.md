- [YouTube Video Link](https://youtu.be/vQmk9moF8vw?si=770NYkGHnPAjI0Up)

- [Docker Compose Official Doc Link](https://docs.docker.com/compose/)

- Initialize npm package 
    
    ```sh
    npm init -y
    ```

- Build docker image

    ```sh
    docker build -t <username>/<image-name>:<tag-name> <path-to-docker-file>
    ```

    - Ex-

        ```sh
        docker build -t nodes .
        ```


- To run docker image and expose port

    ```sh
    docker run -p <host-port>:<container-port> <image-name> 
    ```

    - Ex-

        ```sh
        docker run nodes
        ```
