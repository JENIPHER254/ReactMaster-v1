# react-master

learning react full course

## Introduction

### React Components

- JSX (JS + HTML)
- Virtual DOM(Data Object Model): Takes a snapshot of the figures then uses the snap to update specifically altered parts instead of the whole figure increasing response time.
- Extensions e.g. React Native(for mobile)
- Debugging tool (redux etc)

### React Installation Requirements

- Node JS
- Text Editor
- Browser/ Search Engine

### Create react App

Commands include

- npm install -g create-react-app
- npx create-react-app [name of app] / create-react-app [name of app]

# Components

Can be:

- Functional Components
- Class Components

## nested components

Achieved by using the export (default and named) import key words

- Default Components only export one component and can be renamed.
- Named components can export multiple but cannot be renamed
- Pure component is one that always renders the same output once hence significantly increasing response time.

## states

A state is an object that stores the values of properties belonging to a component that could change over a period of time.

## ReactMaster-v1 Commit Types

1. init: initialization

   - Example: init: initializing app

2. feat: A new feature for the user.

   - Example: feat: add social media login option

3. fix: A bug fix or correction.

   - Example: fix: correct faulty function logic for login

4. docs: Documentation updates.

   - Example: docs: update API endpoint details in README

5. style: Code style changes (formatting, missing semicolons, etc.) that do not affect functionality.

   - Example: style: apply consistent indentation across files

6. refactor: Code changes that neither fix a bug nor add a feature, such as code restructuring.

   - Example: refactor: improve readability of authentication module

7. test: Adding or modifying tests.

   - Example: test: add unit tests for user authentication

8. chore: Routine tasks such as dependency updates, build tasks, or maintenance tasks.

   - Example: chore: update dependency packages

9. perf: Code changes that improve performance.

   - Example: perf: optimize database queries in user service

10. build: Changes that affect the build system or external dependencies (e.g., Maven, Gradle, npm).

    - Example: build: configure webpack for production environment

11. ci: Changes to CI configuration files and scripts (e.g., GitLab CI, Jenkins, Travis).

    - Example: ci: update pipeline to include linting step

12. revert: Revert a previous commit.

    - Example: revert: revert "feat: add social media login option"

13. merge: Merging branches.

    - Example: merge: merge branch feature/authentication into main

14. DOC: Adding Document (.jpg, .png, .pdf ec).

    - Example: docs: adding documents.

15. static: UI pages
    - Example: adding pages to improve the app UI

# NB

- xs={12} md={6} lg={4}: where xs is small md is medium and lg is large screen space.
