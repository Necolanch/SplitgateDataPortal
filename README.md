
# 💻 Project & Portfolio II

# Halo Fakepoint

### Nicholas Cruz

🆔 &nbsp; 0005015360

📪 &nbsp; NICruz@student.fullsail.edu


![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>
![Class Name](https://img.shields.io/badge/Class-Project%20and%20Portfolio%20II-orange?logo=react)



<br>

## 📢 &nbsp; Milestone Check-Ins

Each week I will summarize my milestone activity and progress by writing a stand-up. A stand-up is meant to be a succinct update on how things are going. Use these prompts as a guide on what to write about:

⚙️ Overview - What I worked on this past week
<br>
🌵 Challenges - What problems did I have & how I'm addressing them
<br>
🏆 Accomplishments - What is something I "leveled up" on this week
<br>
🔮 Next Steps - What I plan to prioritize and do next

<br>

### Milestone 1

For this milestone you will have created a wireframe prototype in Figma.  Post your link here, so you have easy access to it.

https://www.figma.com/file/7jh8izUVfbBSwvBP93E7c7/Halo-Fakepoint?node-id=18%3A1071
### Milestone 2

This week I worked on translating my Figma design to code. Not only did I get my navigation working, I got the majority of my styling done. I also got my backend server setup and fetching from the Halo API.

A challenge I had was getting elements above my background image using z-index. When creating a new page and getting my initial navigation and background image placed, new elements I put down I forgot to elevate using z-index. So that is something I had to continuously remind myself of to get my layout working as expected.

I accomplished querying a single API in one call to multiple endpoints.

Next I plan to prioritize setting up utilizing my database and GETting/POSTing from that and getting the search page to transition from the initial layout to a full statistics layout after searching for a player.

### Milestone 3

I had tons of fun getting into the actual development of functionalities. This week I worked on making my search page fully functional. I got my ahead on week 2 and got my API connected all the way for a couple of pages. I just had to get the search functionality and database connected how I wanted. I also set up the tour on the home page with the [react-shephered React wrapper](https://github.com/shipshapecode/react-shepherd) for the [ShepherdJS library](https://shepherdjs.dev/). The search page can perform a search on a player based on their gamertag and the season pulls up their stats based on the selected season of the game. After searching from the main search page, there is a smaller version of the main search bar at the top of the search result that can be used to perform another search following the initial without having to navigate back to the main search page. On the main search page in the bottom right corner is a section that a user can add some favorite players or friends of theirs based on their gamertag and is stored in a databased. Clicking on a friend that is in the list performs a traditional but finds their stats based on the current season of the game. A user can also delete a friend from the list and it is reflected in the database. Lastly, the Settings page for the account can be updated with different information and is reflected in a different collection but in the same database.

I had a problem with a conflicting route and I am addressing that now by keeping a routes folder for the different pieces I have to prevent that from happening again. I had a smaller problem of not remembering to turn my initial response to JSON when performing a database command. Looking at other pieces I have done to see what is missing always helps.

This week I accomplished becoming more comfortable and confident in my work with back-end technologies such as NodeJS, Express, and Mongoose. I especially enjoy how smooth Mongoose makes it working with a server side language to communicate everything with a MongoDB database.

Next I plan to prioritize refactoring my code to make it as dynamic as possible. I have to work with my calls to the API I am utilizing and really make the way I am utilizing the responses scaleable. After that I will be polishing my styling to make it a bit more responsive or at least friendly to some reduced sizes.

[Halo API](https://autocode.com/halo/)
[Mongoose Docs](https://mongoosejs.com/)
[React-icons](https://react-icons.github.io/react-icons)

### Milestone 4

My final stand up...

<br>
<br>
<hr/>

# Project Overview

### Your project will use the MERN Tech Stack and must include the following:

-   A Git Repo, with a master, dev, and milestone branches
-   Readme File that explains your project and tracks your milestones
-   A React Front End
-   React Routing with  _at least_  4 different views/pages
    -   Dashboard/Main
    -   User/Settings
    -   Search
    -   Detail Page
-   Node/Express Backend
-   A Mongo DB Element OR Local Storage for persistent data
-   Connect to at least 1 free API
-   The project must use at least 2 different libraries, not including React itself
    -   One of these libraries you will create a tutorial for in Exercise 01
-   It should look visually appealing and must be easy for the end-user to use and understand. You may use Tailwind or any other front-end library/framework.

**Milestone #1 (Due: Monday of Week 2)**

-   Decide on your topic and theme for your project.
    -   Check out the Free API sites for some ideas of an API that you can utilize
        -   [Apipheny](https://apipheny.io/free-api/)  
            
        -   [Mixed Analytics](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)  
            
        -   [I Am Sajan](https://iamsajan.com/free-api-without-an-api-key/)  
            
-   Functional Spec that explains the scope of the work and the deadlines that must be met.  
    
-   Create a Wireframe Prototype in Figma that will help non-tech people understand your idea.
    -   Keep in mind that a lot of your bosses will need only high-level concepts and will not be concerned with the actual code. The code is your job.

**Milestone #2 **(Due: Monday of Week 3)****

-   Create your Git Repo using the provided link, which will clone over a blank repo.
-   Start to code your project.
    -   I will not give you a step-by-step guide for this.
    -   At this point, you must use your skills and build it out yourself.
-   Along the way, if you get stuck, you may reach out to the lab assistants, but remember this is YOUR portfolio project, and troubleshooting your own code is a part of this process.
-   By Milestone #2, I am going to be checking that you have a React app that can compile without error and that you have your navigation up and running.

**Milestone #3 **(Due: Monday of Week 4)****

-   By this point, you should have a functional prototype of your project. It might not look pretty yet, but that is what the final week is for.
-   Your Git Repo should have a number of significant commits pushed to it.

**Milestone #4 **(Due: Sunday of Week 4)****

-   Your completed project will be due.
-   You must create a (3 to 10) minute long video that goes through your project, what you did this month, and the technologies that you used to get it working.
    -   Remember it is your job to sell your work and really show it off.
