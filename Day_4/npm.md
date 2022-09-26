# what is npm?

NPM stands for Node Package Manager
It comes prebuilt with Node
It allows us to share, use, and reuse code from and with other developer

on npmjs.com, all of the source code and packages are stored. If we neeed a package, we grab it form there



# NPM Commands

## npm -v
Displays the version of npm installed 

## npm init
create a package.json and initales a Node project

## npm install <package-name>
## npm i <package-name>
to install desired package to the folder
it will install all packages automatically

## npm uninstall <package-name>
it will uninstall packages if we dont need them

## npm update <package-name>
updates the package to the latest version

## npx <package-name>
instead of installing the dependency, it will just execute and be done

## npm flags

### -y (npm init -y)
skips the npm init steps and just uses defaults for everything

### -D (npm i -D jest)
### --save-dev (npm i --save-dev jest)
install the depedency as a 'devDependency'
dev dependency do not appear in the production build
in the development enviroment - it will be with me
in the production enviroment - it will not be there

### --production
it runs the project in production mode
Dev Dependecies are omitted

### -g (npm i -g typescript)
Globally iinstalls the package so that you can use it in any project


## package.json
file that describes the project meta data and defines what depemdecies it requires
NPM will look at this file when running commads such `npm install` or `npm update <package-name>`

## package-lock.json
it locks down the depedency tree to ensure all of the peer dependecies are the version we expect them to be 
if a depndecy of a dependecy updates, we don't want that potentially our project, so we lock its version

## node_module
It is a huge folder containing all of the source code required to run the project
I also obtain any dependencies that depedency needs to run

### version
Major Release - 1.x.x
- for major updates - like ios 16 to ios 17
Minor Release - x.0.x
- for minor updates for current ios 16 
Patch Release - x.x.3
- for fixing some bugs inside a minor release
1.0.3


^ - indicates that the package maybe updated to the latest minor version (ex. 18.0.0 --> 18.2.0)
~ - indicates that the package maybe updated to the latest pacth version (ex. 18.0.0 --> 18.0.17)
No symbol indicates that the package may be updated to the latest version