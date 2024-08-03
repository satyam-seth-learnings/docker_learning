- [YouTube Video Link](https://youtu.be/u_QKrIKKnSc?si=L_b-Pft75kV8aZyI)

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

- Build and run your app with Compose

    ```sh
    docker-compose up --build
    ```
