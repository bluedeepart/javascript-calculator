# JavaScript Calculator

## Overview

This project is a JavaScript calculator built with React. It is functionally similar to the [FreeCodeCamp Calculator](https://javascript-calculator.freecodecamp.rocks/). The goal of this project is to create a fully functional calculator that meets specific user stories and can handle a variety of mathematical operations.

**Note:** There are known compatibility issues with React 18 and the tests for this project. For more details, see the [issue here](https://github.com/facebook/react/issues/23382).

## User Stories

The calculator should fulfill the following user stories:

1. **Contains an equal sign button (`=`) with `id="equals"`.**
2. **Contains 10 number buttons (0-9) with corresponding IDs:**
   - `id="zero"`
   - `id="one"`
   - `id="two"`
   - `id="three"`
   - `id="four"`
   - `id="five"`
   - `id="six"`
   - `id="seven"`
   - `id="eight"`
   - `id="nine"`
3. **Contains 4 operator buttons with corresponding IDs:**
   - `id="add"` (addition `+`)
   - `id="subtract"` (subtraction `-`)
   - `id="multiply"` (multiplication `*`)
   - `id="divide"` (division `/`)
4. **Contains a decimal point button (`.`) with `id="decimal"`.**
5. **Contains a clear button with `id="clear"`.**
6. **Contains a display element with `id="display"`.**
7. **Pressing the clear button (`C`) resets the display to `0` and clears any current input or output.**
8. **Displays the input dynamically as numbers and operators are pressed.**
9. **Performs calculations correctly for sequences of numbers and operators, showing the result when `=` is pressed.**
10. **Prevents numbers from beginning with multiple zeros (e.g., `0001` should be displayed as `1`).**
11. **Appends a decimal point (`.`) if clicked, ensuring no more than one decimal point per number.**
12. **Handles operations with decimal numbers accurately.**
13. **Processes multiple consecutive operators by using only the last operator (excluding the negative sign).**
14. **Starts a new calculation if an operator is pressed immediately after `=`.**
15. **Rounds results to a reasonable precision, ideally to at least 4 decimal places.**

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For implementing the calculator logic.
- **Tailwind CSS**: For modern and responsive styling.
- **HTML**: For the structure of the calculator.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bluedeepart/javascript-calculator.git
2. **Navigate to the Project Directory**
    ```bash
    cd javascript-calculator
3. **Install Dependencies**
    ```bash
    npm install
2. **Start the Development Server**
    ```bash
    npm start

