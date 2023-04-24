
# Steps to setup the website
1. git init<br />
2. git remote add origin (Github repo URL)<br />
3. git add .<br />
4. git commit -m "Message"<br />
5. git push origin main<br />
6. change the package.json file githubURL

# Steps to Start the application on local system: <br />
1. npm install (only needed first time or when installing new dependencies)<br />
2. npm start <br />
runs on port number 3000

# Steps to Deploy the application on the github pages:<br />
1. npm run build<br />
2. npm run deploy<br />


# Change website <br />

1. Social Media: copypaste 'li' tag e.g. line 38-47 <br />
   make changes in these 2 files
   1. Footer.js
   2. Contact.js
   
2. People page <br />
   people1.js - Faculty page <br /><br />
   people2.js Current student section
      change url to their linkedin or webiste page by changing href tag line 23 replace * with URL<br /><br />
   people3.js Past student section<br />
      changes similar to the people2.js
   
   Adding new Student: <br/>
   1. add new students photo to the src/Assets folder.
   2. add import statement like e.g. line 4 of people2.js and change the name
   3. copypaste <row> tag whereever you want to add e.g. line 14 - 58<br />
   4. change all the students details
   5. change the name in the <img src={Importname} tag based on your import e.g. line 44
                                  
3. Research Page <br />
   Adding new project: 
   1. add new project photo to the src/Assets folder.
   2. add import statement like e.g. line 7 of research.js and change the name
   3. copypaste <row> tag for project heading whereever you want to add e.g. line 48 - 66<br />
   4. copypaste <Container> tag for project description and image whereever you want to add e.g. line 68 - 100<br />
   5. change all the project details
   6. change the name in the <img src={Importprojectname} tag based on your import e.g. line 97

4. News Section - News.js file 
   add a new news:
   1. copy paste the 'li' tag within the 'ul' tag based on the priority or sequence of the news
   2. make the necessary changes.
   3. <a> tag is used for hyperlink to the news URL
   4. change the href to desired URL for hyperlink
   
5. Add image to the the PhotoGallery on Homepage: - photoGallery.js 
   1. add new photo to the src/Assets folder.
   2. copypaste the import statement like e.g. line 6 photoGallery.js
   3. change the name of the new image
   4. copypaste line in the images const variable e.g. line 15-20 including curly brackets, src, width height, caption, commas
   5. change the src name to the importName
      
