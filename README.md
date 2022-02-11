## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the `.replit` file.

### Juan comments
Styles are on App.css, I usually use styled components but in this case because of the time and because I did not wanted to start adding packages I just add styles in there.

Main files are: 
- src/components/postItem.jsx which contains the post item, image, title and link
- src/components/itemsLists.jsx containes main logic to pull info and display the list of posts.
