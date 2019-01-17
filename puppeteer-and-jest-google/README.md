# Chrome, Puppeteer and Jest Docker image

Docker image that contains Google Chrome, puppeteer library and jest testing framework.

The setting up of the Chrome and puppeteer is copied from puppeteer official website.

The folder contains 5 files and 1 folder:
* `README.md` this file.
* `package.json` contains the information for jest installation.
* `index.test.js` is test file.
* `.dockerignore` contains files and directories that are not uploaded to the image.
* `Dockerfile` contains the setting up of the docker image for chrome and puppeteer, loading package.json and copy test files.
* Folder `screenshots` is used to save files that are copied from docker image.

## How to build a docker image

Build the image by executing the command:

```
docker build -t yousafazabi/puppeteer-goo .
```

## How to run the docker image

Execute the command below to create a container that runs the tests.

```
docker run -v "`pwd`/screenshots:/home/pptruser/screenshots" yousafazabi/puppeteer-goo
```

The command mounts the localhost folder "*currentDirectory*/screenshots" to the container working directory "/home/pptruser/screenshots"
