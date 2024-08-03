- [YouTube Video Link](https://youtu.be/vTmXJsrV6Nc?si=9JHVFx0vCihsbOzT)

- [`node` Docker Image](https://hub.docker.com/_/node)

- Build docker image

    ```sh
    docker build -t <username>/<image-name>:<tag-name> <path-to-docker-file>
    ```

    - Ex-

        ```sh
        docker build -t satyamseth/nodeapp .
        ```


- To run docker image and expose port

    ```sh
    docker run -p <host-port>:<container-port> <image-name> 
    ```

    - Ex-

        ```sh
        docker run -p 8000:8000 satyamseth/nodeapp
        ```
