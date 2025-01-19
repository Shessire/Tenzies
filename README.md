# Tenzies 🎮

This project is a **Tenzies** built using **React**, showcasing my growing knowledge of React fundamentals. While it might not be the most impressive project, it's a meaningful step in my learning journey. 🌱



## Demo
Link: https://tenzies-sepia-three.vercel.app/

## ✨ Features
- Roll 10 dice with random numbers between 1 and 6.
- Freeze (hold) dice to lock their values for the next roll.
- Win by making all dice display the same number while holding them.
- Dynamic state updates for the dice and game logic.




## 🛠️ Built With
- **React**: A powerful JavaScript library for building user interfaces.
- **NanoId**: For generating unique IDs for each die.



## 📚 React Knowledge Demonstrated
1. **`useState`**: Managing the state of the dice, including their values and whether they are held.
2. **`useEffect`**: Used to trigger side effects like checking if the player has won the game.
3. **`useRef`**: Used to create a reference to the "Roll" or "New Game" button, allowing it to automatically gain focus when the game is won, making the experience more accessible and seamless.
4. **Conditional Rendering**: Updating UI elements dynamically based on the game state (e.g., dice color, win message).



## 🚀 How It Works
1. **Game Initialization**:
The app generates an array of 10 dice, each with a random number and a unique ID.
2. **Rolling the Dice**:
Clicking the "Roll" button re-generates the dice that are not held.
3. **Holding Dice**:
Clicking on a die freezes its value for subsequent rolls.
4. **Winning the Game**:
Players win when all dice show the same number, and all are held.

## 🌟 Future Improvements
- Add a timer and roll counter to track performance.
- Introduce themes or different dice styles for customization.
- Save high scores locally or in the cloud.
---
