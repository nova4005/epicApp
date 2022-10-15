## Getting Started

For any Project Management app there are certain basic features that all apps need in order to be successful. I will start a list of the features that I think are most important to start with to make the app usable.

## Basics

- Create, Manage, and Archive Companies, Projects, Tasks, Time Logs, Users, Files.
- Manage profile
- Manage subscription, billing information
- Ability to search across different parts of the app. A unified search would be the best.
-

## Feature List

- Build out the Projects model and page
- Build out the Tasks model and page
- Build out the Users model and page
- Build out the dashboard page for users (customizable? maybe future feature)
- Templates: Projects, Tasks.


## Basic Functions
There are some basic functions that will be used my many different models and I need to think of a generic way of building those components.
This includes having them hit different API endpoints based on dynamic urls

- Deletes on any item need to all be soft deletes.
- Favoriting different items such as companies, projects, tasks, messages
- Ability to add user definable tags to objects such as Projects, Tasks, Time Logs, Files, Messages.
- An area in a project to safely store secure information such as credentials, login information, SSH keys.
- File storage will be handled with S3 but we can implement lifecycle polices to move to different storage tiers to save on cost. This can be useful when a project is archived we can move all project files to Glacier for reduced costs.


## Future Goals

For now there are some things that are not needed for a proof of concept MVP so I will hold of on building these in order to focus on the main features of the app.

- Chime Meetings, phone, messaging, Chat
  - Build out the Messaging system
    - Build in the ability to send email notifications and reply directly from the email
- Reports (These are definitely needed but reports are a big feature and I need to get PM/User feedback on reporting metrics that will benefit the most.)
- Calendar (I think this is part of task scheduling and a different way of viewing tasks, etc.)
- Workload Planner (We don't have this feature currently in Teamwork so probably not important for now)
- Events (Teamwork has this but not sure if we use it)
- Automation tools that integrate with different systems such as Keap, ActiveCampaign, Zapier, etc.
- Build in a file viewer so that users can take a quick look at a file without having to download it. This is only for certain files such as images and different text files (txt, doc, docx).
