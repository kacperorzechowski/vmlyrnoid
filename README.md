# VMLYRN'OID, the game
### A simple, arkanoid styled game made with ❤️ using TS and Canvas.

___
### Description
The game is created using TypeScript and Canvas with OOP paradigm.
Why? I used to make games with Unity and I miss this approach in my daily routine as a Front-End developer (Vue, React).

Whole concept is super simple. You move with ⬅️➡️ trying to bounce the ball with paddle.

Blocks on the board represent company logo I work for. This is because the idea of creating such game born on our meeting, on ☕️ break during workshops we were having.

### Play tests
You can play the game ~~here~~ (soon 🙃) or simply set it up yourself, check below 👇.
### Installation & usage
Make sure you are using same node and npm:
```bash
npm -v && node -v
8.3.1
v16.14.0
```
I used Parcel as a bundler, so you probably want to install it if you haven't already. Getting started: https://parceljs.org/getting-started/webapp/
```bash
parcel -V
1.12.4
```
Install dependencies, as always:
```bash
npm i
```
And run the project:
```bash
npm run serve
```
Or build it with:
```bash
npm run build
```
### Building your own board
Well, this feature is an "experimental" thing. If you want to use it, you have to hack it. The `div` with `configuration` class has `display: none` and this is the place where you want to start. Next you can check `src/configuration/form.ts` and find out what is going on there.

### My links
* [Medium](https://medium.com/@kacper.orzechowski)
* [LinkedIn](https://www.linkedin.com/in/kacperorzechowski/)
