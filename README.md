# SafariBooks Downloader & ePub Generator
SafariBooks-Downloader is a project created and maintained by [Brian Fopiano] With libraries from [Nico Haenggi](http://www.nicohaenggi.com/).


# Installation Guide

## How To Install

Install Node.js. We recommend the **LTS release**. The SafariBooks-Downloader has been tested on most node versions between **v4.4.5 and v.6.9.5** and should therefore cause no problems running on one of these versions. For more information about how to install it on your environment, see [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/). To verify your installation, run:

```bash
node -v
```

If a version is returned, you did successfully install Node.js. Next up, make sure npm is properly installed. To verify, run:

```bash
npm -v
```

If the command returns a version number, you're all set. Next, we'll clone the repository.

```bash
git clone https://github.com/NextdoorPsycho/Snatching-Safari-B.Fopiano.git
cd SafariBooks-Downloader
```

Install all the dependencies with npm.

```bash
npm install
```
Congratulations! You've successfully installed SafariBooks-Downloader.
If you desire to do so, you can install the tool globally on your machine. To do so, run:

```bash
npm install -g
```

To verify the installation, please run:

```bash
safaribooks-downloader --version
```

If the command returns a version number, you have successfully installed the tool globally. The current release is `v1.0.0`.

## How To Update
1. Stop the downloader if it's running. (use control + c to stop it)
2. Run `git pull`  
    This will update the generator to the latest master branch
3. Reinstall dependencies with `npm install` or `npm install -g`  
    using `npm install -g` will install the generator globally
4. Run `safaribooks-downloader --version`  
    After you are done following it this will print out the current version of the generator.

## How To Run

The tool provides the following six options. The options **--bookid, --username, --password and --output** are required. However, if the username and password options are provided once, **they will be cached** and are no longer required to run the CLI.

#### Options

* **-h, --help**
    * displays usage information
* **-V, --version**
    * displays version number
* **-b, --bookid <bookid>**
    * the book id of the SafariBooksOnline ePub to be generated
    you can find the book id by having a look at the URL while reading the book
    e.g. `https://www.safaribooksonline.com/library/view/building-apis-with/9781484224427/A435096_1_En_7_Chapter.html` whereas the id will be `9781484224427`
* **-u, --username <username>**
    * username of the SafariBooksOnline user - must have a **paid/trial membership**, otherwise will not be able to access the books
* **-p, --password <password>**
    * password of the SafariBooksOnline user
* **-o, --output <output>**
    * output path the epub file should be saved to. *On some systems, the path may require to contains no whitespaces*.
* **-d, --debug**
    * enable debug mode for *request* package.

#### Example

An example showing how a SafariBooksOnline with id **9781484224427** is downloaded and converted into a ePub file **testbook.epub**.
```bash
safaribooks-downloader -b 9781484224427 -u UserName -p MySuperSecurePassword -o /Users/nicohanggi/Desktop/testbook.epub
```

An example showing how a SafariBooksOnline with id **9892595335538** is downloaded and converted into a ePub file **testdebugbook.epub**.
```bash
safaribooks-downloader -d -b 9781484224427 -u UserName -p MySuperSecurePassword -o /Users/nicohanggi/Desktop/testbook.epub
```
# Features
- [x] generating ePub with cover image, authors and publisher
- [x] custom stylesheets will be imported (only one currently)
- [ ] support for several different stylesheets in one book
- [ ] directly generating .mobi files

# Credits
    [Libraries]
- [NextdoorPsycho] (me) development & reworking
- [Nico Haenggi](http://www.nicohaenggi.com): conception & libraries
- [cyrilis](https://github.com/cyrilis): a big thanks to cyrillis for his epub-gen package which I relied upon heavily while integrating my own epub generator

# Copyright & License

Copyright (c) 2017 Brian Fopiano - Released under the [MIT License]