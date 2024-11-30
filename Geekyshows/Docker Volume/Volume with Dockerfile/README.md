- Volume with Dockerfile

    - Build image

        ```sh
        docker build -t <image-name> <dockerfile-path>
        ```

    - Create container with volume

        ```sh
        docker run --name <container-name> -itd -v <volume-name>:/data <image-name>
        ```

            - Now we can share same volume with other containers

                ```sh
                docker run --name <container-name> -itd --volumes-from <volume-name>:/data <image-name>
                ```

            OR

            - Create other containers with same volume name

                ```sh
                docker run --name <container-name> -itd -v <volume-name>:/data <image-name>
                ```