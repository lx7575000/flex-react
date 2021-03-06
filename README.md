Download the starter kit for the `buyshoes` project:

```
git clone git@github.com:lx7575000/flex-react.git
```
#提示：
主要内容目前都在`flux-start`分支当中，`clone`后需要切换分支

```
git checkout flux-start
```

After you've cloned the project, run `npm install` to download the project dependencies:

```
npm install
```

This project uses the same flexbox settings as the `ilovereact` project:

```css
/* Add your favourite HTML tags if you'd like */
body, div, span, a, img, h1, h2, h3, h4, h5 {
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  align-content: flex-start;

  border: 0 solid black;
  margin: 0;
  padding: 0;
}

* {
  position: relative;
}
```

If you like, you can add your favourite html5 tags (e.g. section, article, nav, etc.) to the flexbox default list.

To start development, open two separate terminals, and run:

```
# terminal 1
make server

# terminal 2
make css
```