<a name="readme-top"></a>

<div align="center">
  <h3><b>Study-247</b></h3>
</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 About ](#-about-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

# 📖 About <a name="about-project"></a>

**Study**  This React on Rails application is an online school with students, lecturers, Heads of Departments, and Deans as the four categories of users, each with different dashboards and levels of access, enabling them to perform specific responsibilities associated with their roles.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- React
- Redux
- Rails
- CSS
- Chrome Dev Tools
- Git
- GitHub
- Bootstrap
- PostgreSQL


### Key Features <a name="key-features"></a>

- **Authentication(1) - Sign up:** The app has a Sign up form for new users. Of all the fields to complete in this form, the ROLE is the most important, as it determines the type of user profile that will be required of you, the user role attached to your account and the contents of your dashboard.
- **Authentication(b) - Log in:** The app has a log in page for returning users. Logging in can only be possible if done with the correct credentials i.e the email and pasword used during registration.
- **Demo User** If the user wants a quick tour of the app without going through the hassle of registering or creating a student. lecturer, HOD or Dean profile, There are links to demo user accounts for each category of users on the login page. They can click one of the links, depending on the role they want to assume and click the log in button **without** providing the email and password. They'll be logged in successfully
- **Creating and updating user profiles** Unless specified as optional, all fields in profile forms are mandatory. The most important for lecturers, HODs and Dean users, however, is the department field and for a student user, the level and department fields. These fields determine the courses that'll be recommended for you, the lecturers accessible to you and the ease of chatting them privately, your ability to perform academic tasks, and view your grades. For a lecturer, it determines your access to courses you've been assigned to handle, students offering such courses, your ability to precisely grade each student on each course and the ease of receiving submissions from these students. For an HOD, selecting the right department impacts on your ability to create new courses, read all existing courses in the department and assign courses of your choosing to lecturers of your choosing. As a Dean, choosing the write school/faculty impacts on the departments your can manage, the list of HODs on your dashboard, your ease of creating and deleting departments for your school.
- **Global user profiles** This feature allows for user all user profiles to be view from anywhere in the app. If it the current user that decides to view their own profiles, there is pen on the top right corner to edit the profile, however, this pen is not available if the current user is viewing another user's profile, which keeps them from updating another user's profile.
- **Student Grading Sytem** In the list of assigned courses for each lecturer by his/her Head of Department, There is a button to see the list of students offering the particular course. When this is clicked and the student's displayed, there are links to their grade and chats concerning that course. The lecturer can create a grade for the student if not exist and can update it if grade already exists.
- **Grade Point Calculator** Whenever student grades are updated by whichever lecturer, the grade point average which is the symbol of the student's overall performance recalculates itself
- **Lesson area** The lesson area contains a submissions page that will be available in the next release and a private chat room for student and the lecturer on matters regarding the specific course in question. If a student offers five courses to be handled by the same lecturer, they will have five different chat rooms regardless. This is to ensure consistency and organization in conversations for respective courses.
- **Mobile version** All pages in the app are designed to display properly across all screen sizes



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

[Live-demo](https://study-247.netlify.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- a browser
- git
- nodejs

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:forLoop94/college_dashboard.git
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  run - npm run dev - in your VScode terminal, hold down your control key and click on http://localhost:5173
  or
  run - npm run dev - in your VScode terminal and visit http://localhost:5173 in your browser
```

### Run tests

To run tests, run the following commands:

```sh
  npx stylelint "**/*.{css,scss}"
  npx npx eslint "**/*.{js,jsx}"
  npm test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

👤 **Charles Andrews**

- GitHub: [@githubhandle](https://github.com/forLoop94)
- Twitter: [@twitterhandle](https://twitter.com/_AndrewsCharles)
- LinkedIn: [LinkedIn](https://linkedin.com/in/andrewscharles94)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Dean's List**
- **General classroom spaces for each course**
- **Private chat with colleagues**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/forLoop94/college_dashboard/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project give me a follow and/or a star

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Microverse inc.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>