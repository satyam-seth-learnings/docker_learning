- [Setup ReactJS Development Docker Environment with Hot Reloading](https://youtu.be/UVKhteWHzp4?si=BK2X-C8jpfpW4CfS)

- [Docker Node Image](https://hub.docker.com/_/node)

- Create ReactJS Project Using Vite

    ```sh
    npm create vite@latest
    ```

- Up project

    ```sh
    docker compose -f react-project/docker-compose.dev.yml up -d
    ```

- Down Project

    ```sh
    docker compose -f react-project/docker-compose.dev.yml down
    ```