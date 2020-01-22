The LSx Action Planner
===

[![Build Status](https://travis-ci.com/FAC-Sixteen/LSx.svg?branch=master)](https://travis-ci.com/FAC-Sixteen/LSx)

Client project for Weeks 14-16 of Founders and Coders

Heroku App: http://fac16-lsx-action-planner.herokuapp.com/

## The Team

![](https://i.imgur.com/UmqNrFI.png)



## About London Sustainability Exchange 


London Sustainability Exchange (LSx) have been working with schools and communities helping them better understand, monitor and take action on air pollution for over 10 years. 
They support people to design projects, campaigns and talk to policy makers and planners raising the importance of the issue locally. 
Their aim is to use citizen science to help make the invisible, visible.


## Why


This would be a great tool for LSx's projects, the schools and communities we work with. We'd like to update our tools and our toolkits in this way to appeal to wider and new audiences, bringing together past, present and future projects. Potentially, we could grow the organization as the demand for citizen science tools is global.

### Problem statement

Our user needs a way to be remotely supported when conducting air quality experiments and drawing conclusions so they can mobilise and feel confident in creating effective action plans.

### Key user journeys

- I do not have data yet, and would like some help
- I have data and would like to understand more


### The solution

A mobile based app to help users create an action plan, to organise and facilitate change. This was designed with kids in mind as the main group that LSx is engaging with currently are school children


---
 
 
## Tech stack

![](https://i.imgur.com/zMG5scx.png)



### Airtable
  - We created 3 tables to manage content for the client.
  - One table for experiments, each row generated an individual experiment page
  - Another table is for success stories, again each row created an individual page  
  - A final table is the Dive deep into the data page, This has a single row, where each column represents different content on the page. 
 
 
 
## Setup

#### Installation

 1. use `git clone https://github.com/FAC-Sixteen/LSx.git` to clone the project
 2. Create a `.env` file, get in contact for Environment variables
 3. use `npm i` to install all dependencies in the express server
 4. use `npm run nodemon` to start express server 
 5. use `cd client/ && npm i` to install all dependencies in the client folder
 6. use `npm start` to launch the project on [localhost:3000](http://localhost:3000)
 7. you can use `npm build` to create a local version of how the project will build on the live production version
 8. you can run `npm test` to run tests locally. 

#### Deployment
  - The project was forked for the client 
  - Environment variables were changed
  - It is currently deployed on Heroku
  
#### Maintenance
 - The site will be maintained by the clients team
 - Their aim is to use it with schools
 - There is potential to apply for future grants using and building from this project
 

## Ideas for the next sprint.

- More animations (page transitions, background effects)
- PDF attachment to email
- Email address verification
- Collect email addresses in Airtable
- More user testing (with kids!)

---


## Project Timeline

## Week 1: Design Week


#### Inspiration / Examples:


Mapping for Change http://mappingforchange.org.uk/ runs a similar citizen science project, and Plume Lab's Flow https://plumelabs.com/en/flow/ monitors personal exposure to pollution. We'd like to explore new ways of how data is collected and presented. There are bioindicators of pollution everywhere in nature, from the ways trees and plants behave to the presence and type of lichens (http://www.nhm.ac.uk/take-part/identify-nature/lichen-id-guide/index.dsml).

Imagine Pokémon Go for pollution.

#### prototyping on figma
-  building on the "crazy 8s" that we drew, we ear-marked our favourite frames from all of them respectively
  -  To inform our figma proto we made an "inspiration" page which acted as a mood board. This culminated in the including the following general themes,
        -  cartoons
        -  comics
        -  test-tubes
        -  LSx assets
        -  newspapers
        -  letters
        -  balloons
        
   - Brain-storming ideas was made easier by making large mind-map as a group. From this we came up with a fair number of the above themes 
    - A big realisation which massively informed the design process was the concept of "action planning" as part of the specification given by the product owner. 
    - The proto was also built gradually through a discriminative process. A frame would be designed, copied and improved upon, rinse repeat until all members of the group were satisfied. Frequently we would pair on a frame and source inspiration from one another's design = a nice, unforced synthesis 

#### Product Owner Feedback
With a mobile app we can include 'lite' versions of our toolkits within the app. Full PDF toolkits and further resources can be sent to a designated user email address for a small donation (say £3). (his bosses are a bit tired of giving away our intellectual property for free)


![](https://camo.githubusercontent.com/d54631601ea7cf0b7201335144d5c1a778f4a663/68747470733a2f2f692e696d6775722e636f6d2f723757304944342e706e67
)


### User Research Survey


### Accurate assumptions:

The majority of respondents were interested with an app to support the air quality citizen science process, especially if it can help them draw conclusions and create an action plan. Most respondents had strong existing knowledge of air quality issues (through LSx projects or their own research). These people were interested in how to better draw conclusions/create an action plan/ disseminate their findings.

### Inaccurate assumptions:

At the moment it would seem that not everyone conducting the experiments is engaged with the process: For the members of the public we supply testing kit to this is not the same learning exercise it is for participants of our projects. They feel they have already learnt about air quality issues and want to get data to support their agendas.

Perhaps this strengthens the need to provide comparable AQ data/ a wiki resource and highlights the work that needs done to turn this into a tool to promote engagement for users who are not currently interested in AQ issues.

#### Things our user is trying to do:

Our users are trying to generate (first-hand) data evidence of pollution in their locales. Some are more engaged with the process of conducting citizen science than others: Some just want to collect some data to confirm their suspicions about air pollution.

#### Ways our user wants to feel:

Reassured/ that their suspicions were correct. By extension they want to feel empowered with hard data.

### Summary statement:

Our user needs a way to be remotely supported when conducting AQ experiments and drawing conclusions so they can mobilise and feel confident in creating effective action plans.


---



## Week 2: Sprint 001

We used the creat react App as a base for our client side rendering and a express server to handle interaction with nodemailer and airtable. 

### Key Learning points 

- React.Fragment
  - How and when to use React.Fragment


- Making a Modal
  - Modal-root div
  - React.createPortal()
  - Testing it

- React client to Express server requests
  - Proxy


- SVGs in React
  - Many ways to do it
  - Some tags not compatible
  - SVG to JSX converter


- styled components
  - SVGs
  - Naming conventions
  - Keyframes


---

## Week 3: Sprint 002

### Key Learning points 

 - CMS
   -  Using Airtable as a content management system

- CSS/JS animations
   - keyframes
   - svg css animation
   
-  Nodemailer
   - Backend validation modules
   - Excaping content ie html excaping when handling users input
   - Google vs Outlook with nodemailer   



---


## Preview

![](https://i.imgur.com/lLJpxng.png)


