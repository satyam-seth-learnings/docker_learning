- [YouTube Playlist Link](https://www.youtube.com/playlist?list=PLbGui_ZYuhihMb5pqut64GhW-WhxKpygY)

- [Docker Hub](https://hub.docker.com/search)

- [Docker VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

- [YAML VS Code Extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

- To check docker version 

    ```sh
    docker -v
    ```

- Check docker info

    ```sh
    docker info 
    ```

- Pull docker image

    ```sh
    docker pull <image-name>
    ```

- Check images

    ```sh
    docker images
    ```

- Search image using docker cli

    ```sh
    docker search <image-name>
    ```

- To see all running containers
    
    ```sh
    docker ps
    ```

- To see all containers (running + stopped)

    ```sh
    docker ps -a
    ```

- Create and run container from image

    ```sh
    docker run <image-name>
    ```

    - Note: If the image is not available locally, it will be fetched first and then run.

- Give container name

    ```sh
    docker run --name <container-name> <image-name>
    ```

    - Note: Container name must be unique

- Run container in background

    ```sh
    docker run --name <container-name> -d <image-name>
    ```

- Run container in interactive mode

    ```sh
    docker run --name <container-name> -it -d <image-name>
    ```

- Auto remove container once stopped

    ```sh
    docker run --name <container-name> -it --rm <image-name>
    ````

- Inspect docker container

    ```sh
    docker inspect <container-id>
    ```

- Execute command in running container

    ```sh
    docker exec -it <container-name> <command>
    ```

- Start stopped container

    ```sh
    docker start <container-name>
    ```

- Stop running container

    ```sh
    docker stop <container-name>
    ```

- Restart container

    ```sh
    docker restart <container-name>
    ```

- Remove container

    ```sh
    docker rm <container-name>
    ```

- Remove docker image

    ```sh
    docker rmi <image-name>
    ```

    - Note: we have to remove all container which are using image

- Remove all non-running containers

    ```sh
    docker container prune
    ```

- Remove
    - all stopped containers
    - all networks not used by at least one container
    - all dangling images
    - unused build cache

    ```sh
    docker system prune
    ```

- Check container logs

    ```sh
    docker logs <container-name>
    ```

- Set environment variable for container

    ```sh
    docker run -e ENV_VAR_NAME=<env-var-value> -d <image-name>
    ```

- Expose port

    ```sh
    docker run -p <host-machine-port>:<docker-container-port> <image-name>
    ```

- Note: We can use the container or image id instead of the container or image name, and vice versa.

- Build docker image from Dockerfile

    ```sh
    docker build -t <image-name>:<tag-name> <dockerfile-path>
    ```

    - Note: Tag name is optional