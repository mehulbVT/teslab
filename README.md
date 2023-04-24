Steps to Start: <br />

1. npm install <br />
2. npm start <br />

Steps to Deploy:<br />
<br />

1. git init<br />
2. git remote add origin (Github repo URL)<br />
3. git add .<br />
4. git commit -m "Message"<br />
5. git push origin main<br />
6. npm run build<br />
7. npm run deploy<br />
   Note: for npm run deploy to work add following lines of code to scripts in package.json<br />
   "predeploy": "npm run build",<br />
   "deploy": "gh-pages -d build",
