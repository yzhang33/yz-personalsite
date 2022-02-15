# React Personal Website

## Source

I adaped this react website from [here](https://github.com/mldangelo/personal-site). If you want the original source check out his github.

## Installation 

Download this git report and run, I think the original source has some installtion issues so I changed the setup completely.
 
```bash
git clone https://github.com/yzhang33/yz-personalsite.git
npm install
```

## Running

The same as run any other react apps:
```bash
npm start
``` 

## Deploying

If you want to use github pages as server, modify home page in packages.json point to you own github page url. You can find more inforamtion about github pages in settings of your repo.

If you want to use customerized url like I did. First, buy a domain name from [google domain](https://domains.google/).
Then follow [this page](https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58) to point your domain to githubpages. Then change the CNAME file in public folder to your domain name. Make sure you also changed homepage in package.json. 

To deploy:
```bash
npm run deploy
```
If everything correctly setup, you should be able to see the website running. All you have to do is changing the contents. You will be editing the data and public/images folder mostly. 

