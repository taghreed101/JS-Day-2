# JS Exercise 13: Recode Racer

## Background & Objectives

Let's create a JavaScript game: the Recode Racer 🏎. This is Ruby Racer - but in JS, with some extra controls. It's a simple game where you use your keyboard to make a Kart move forward. Unlike Ruby Racer, the outcome of the game won't be pure chance. Each player will advance their "car" by smashing some key. For example, each player will move their Kart by tapping a key (e.g. `Q` for player one, `P` for player two)


The goal here is to learn more about JavaScript, the DOM, and asynchronous event handling.

![](https://raw.githubusercontent.com/MedetaiAkaru/fullstack-images/master/frontend/recode_racer.gif)

## Instructions
Launch your local webserver with:

```bash
rake webpack
```
and go to http://localhost:8080

### Release 1

#### HTML

You will start by building a simple two-player board in HTML. There are a few different ways of doing it, but here's one example:

```html
<table class="racer_table">
  <tr id="player1_race">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    etc.
  </tr>
  <tr id="player2_race">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    etc.
  </tr>
</table>
```

#### CSS

Once your HTML is finished, switch to CSS and design your race track! Example:

```css
.racer_table td {
  height: 40px;
  width: 40px;
}
.racer_table td.active {
  background-repeat: no-repeat;
  background-size: 100%;
}
#player1_race td.active {
  background-image: url("images/player_1.png");
}
#player2_race td.active {
  background-image: url("images/player_2.png");
}
```

You will update a player's position by moving the `active` class from one `td` to the next one. Of course, there are other solutions to implement this game. Using a table and a CSS class is one option. Just make sure you're able to "manually" produce all the board views you might need. Whatever way you choose, it should be easy for JavaScript to manipulate, so keep that in mind.

It's always a good idea to do as much work as possible using smart HTML markup and CSS classes before jumping into JavaScript. Bad front-end developers spend time writing long javascript code that changes CSS values, instead of short scripts that play nicely with existing CSS classes.

#### Release 1: Javascript

Write all your code in `lib/recode_racer.js`. We need a way for JavaScript to update the board state. Create simple JavaScript functions that update a player's position. You give the function a player position as input and they should update the underlying HTML to reflect the new position. Again, there are several ways to do the same thing. One example below:

```javascript
updatePlayerPosition('player1', 10);
```

- Remove the `active` class on the current player's `td` and add that class to the next `td`.
- Keep track of the "index" of each player in the table and increase it.


#### Release 2: Binding to Keyboard

Now we'll make the game interactive! Clicking a button is not fast enough. And you can't play with someone else! 

You should bind to the keyup event to detect when a player has "pressed" a key. 

Here is an example of how the `keyup` event can be used:

```js
document.addEventListener("keyup", event => console.log(event));
```

_Do you understand why we use `keyup` and not `keydown`?_

We don't bind to the keydown or keypress events because those events fire when the keyboard repeats the key, whereas the keyup event doesn't. It'd be a boring game if you could just hold the key and go.

##### Release 3: Starting and Winning 🏁

The last two things is to have starting and winning states, so we can restart the game and declare a winner when the game is over. Make it so:

- You can start the game
- You can play the game
- You can win the game (Or lose)
- You can restart the game