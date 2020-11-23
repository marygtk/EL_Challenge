# cypress-ecommerse

Once the repository is cloned, you need to install the dependencies, which will be installed in a folder that will be created called node_modules
You need to previously have nodejs installed on your pc, if you don't have it installed you can download it here: https://nodejs.org/es/
You need to run the command

npm install

Once the installation of the dependencies of our e2e test is finished, you need to run the command 

npm run cy: open. 

This will open a window where the different tests appear.

Project structure:

Our code as such is in the cypress folder, which within this are the following folders:

1-Fixture : In fixture we put the variables to use in the tests, in our case in the interface.json file, we describe an object with our interface.

2-Integration : In the intration folder we have the modularized tests per web page, each module has its login test, add items and delete Items from 
the cart and the function of searching for a product.

3-Plugins: Usually in plugins you have an index.js file and you have some heppers or auxiliary functions that we need in our tests.

4-Support:In the support folder we have the commands, which are an important part of our test code, since here we write the code that will be reused, for someone who comes from object-oriented languages,
it would be something like the classes that will be reused by instantiating them in other classes,such as login, login. we divide the commands into 3:
        a-loginCommands
        b-itemsCommands
        c-assertionCommands
        
