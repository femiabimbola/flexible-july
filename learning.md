# Learning from the Video

Create react app with

```bash
npx create-next-app@latest ./
```

In the app folder, the important page is `page.ts` .
It is the starting point of the application. I create the home

### The links

GitHub Code (give it a star ⭐): https://github.com/adrianhajdin/project_nextjs13_flexibble
Public folder (assets): https://drive.google.com/file/d/1l3_LHBjWOXokxlTIUJAyMp4gBoUHP_H4/view
GitHub Gist Code: https://gist.github.com/adrianhajdin/a453d745c2361ae4183b421f577a0715
Create Secret - https://www.cryptool.org/en/cto/openssl

### Create Component folder

The component folder are files you are going to use within the project

What is common.types.js means

### Importing in Typescript

`@/components/TheComponet` will work

### Constant

The constant contains the files that hardly change <br/>
E.g The menu items

### Working with Map

Anytime you are working with map, the return must a prop called key

### How to use grafbase

- Installing grafbase using tailwind is done by
  grafbase init --config-format typescript
  How did you get the graphbase key or so

### Using Hooks

You cannot render hooks on the server. It is indiviual choice

### Git Problem

`What does rebase means `
We shouldn’t do this if someone has rebased on the remote. The history is different and a merge could have a nasty effect on the history. There will be a weird history with equivalent commits in 2 places plus a merge commit.

### How to see all files in .git

`ls -a`

- Switch to cmd by `cmd`
  The change to folder .git by `.git`
  Then do `tree .` to list all the files

### How I got my git to work

I removed the git in the folder first
`rm -rf .git`

The I initialize the git again and did git push
git -init

Then I did force push
`git push -f origin develop`

### To spinoff a graphbase environment

First install `npm install grafbase`

Then get the graphql of what you set in the model

- npx grafbase@0.24 dev

### How to use a Modal

This project has how to use a modal

> Check the modal component & Profile Menu
