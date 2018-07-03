# Mobile Web Specialist Certification Course
---
#### Part three of the 3 stage course

## Project Overview: Stage 3

The project aim of the **Restaurant Reviews** project in **Stage One** was to make a site responsive. In stage **Stage two**, the aim was to make the site offline usable. **Stage three** is different, as there is a different api server and you have to prepare the site, that users can leave a review, even offline.

### Specification

This project at stage 3 consists of 2 folders, you have to download, the first one is this folder with the html code of the website. The second folder, you have to download, is the enriched api server, you can find here:  `https://github.com/richlip/mws-restaurant-stage-3-master`.

### What do I do from here?
1. Change to the other folder with the server:
Let's start with running commands in your terminal, known as command line interface (CLI)

Install project dependancies

**# npm i**

Install Sails.js globally

**# npm i sails -g**

Start the server

**# node server**

You should now have access to your API server environment

debug: Environment : development debug: Port : 1337

2. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

4. On the Restaurant Detail page, you can leave a review for the Restaurant.


### Note from the coder

Some notes from myself, i used an older laptop to work with, screen was too small for programming... If you find and error, keep it;-).

The layout of the Restaurant detailsite is not finnished, as i wanted to implement a button to open the review container. will be done soon.

Another note from me, there is a audit to make (lighthouse), in the optionssection, uncheck the clear storage checkbox, as one statement from lighthouse is, to cache the pictures, so with a cleared storage, the page have to load the pics from the server.

Last note, In one section of lighthouse (responsive), i do not reach 90 (points), as my localhost have not https, what lighthouse recommends.

Very last note! I am so happy, that you read until here, as i am happy, to mostly finnish the project;-)
