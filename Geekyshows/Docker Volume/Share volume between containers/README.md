
- Share volume between containers

    1. Create volume then mount to container

        - Create volume

            ```sh
            docker volume cerate <volume-name>
            ```

        - Mount created volume to containers

            ```sh
            docker run --name <container-name> -itd -v <volume-path>:<container-folder-path> <image-name>
            ```

    OR

    2. Create container with volume and then share with other containers

        - Create container with volume

            ```sh
            docker run --name <container-name> -itd -v <container-folder-path-for-volume> <image-name>
            ```

        - Share with other containers

            ```sh
            docker run --name <container-name> -itd --volumes-from <volume-container-name> <image-name>
            ```