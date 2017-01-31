/** TODO:
 * 1. Add these new functions: percentage, inverse, factorial, square and square root
 * 2. Bootstrap it to make it pretty!
 * 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
 * 4. Fix divide by 0 errors!
 * 5. Add the ability to clear the current input, but not memory.
 * 6. Challenge: Add trig functions (in radian AND degree mode)
 * 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
 * 8. Super Challenge: Add ( and ) buttons that work!
 * 9. Super Duper Challenge: Add exponents (negatives too!)
 */
//user input
var current_Input = "0";
//the previous input
var memory = "0";
var operator = 0;
/**
 *  Helper function for displaying the current input
 * @author Gemma
 */
function displayCurrentInput()
{
    document.getElementById('screen').value = current_Input;
}
/**
 * Adds a digit to the current input
 * @author Gemma
 * @param {number} dig the value added
 */
function addDigit(dig)
{
    if ((eval(current_Input) == 0) && (current_Input.indexOf(".") == -1))
    {
        current_Input = dig;
    }
    else
    {
        current_Input = current_Input + dig;
    }
    displayCurrentInput();
}
/**
 * Adds a decimal to the current input
 * @author Gemma
 */
function addDecimal()
{
    if (current_Input.length == 0)
    {
        //no leading ".", use "0."
        current_Input = "0.";
    }
    else
    {
        // First make sure one doesn't exist
        if (current_Input.indexOf(".") == -1)
        {
            current_Input = current_Input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears everything.
 * @author Gemma
 */
function allClear()
{
    current_Input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 * @author Gemma
 * @param {number} op the operator that is stored
 */
function storeOperator(op)
{
    if (op.indexOf("*") > -1)
    {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1)
    {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1)
    {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1)
    {
        operator = 4;
    }; // difference
    if (op.indexOf("+/-") > -1)
    {
        operator = 5;
    };
    memory = current_Input; //store value
    current_Input = "0";
    displayCurrentInput();
}
/**
 * Calculate using operator, the memory and what is current
 * @author Gemma
 */
function calculate()
{
    if (operator == 1 && currentInput.length < 18)
    {
        current_Input = eval(memory) * eval(current_Input);
    };
    if (operator == 2 && current_Input != 0)
    {
        current_Input = eval(memory) / eval(current_Input);
    };
    if (operator == 3)
    {
        current_Input = eval(memory) + eval(current_Input);
    };
    if (operator == 4)
    {
        current_Input = eval(memory) - eval(current_Input);
    };
    if (operator == 2 && current_Input == 0)
    {
        alert("divide by zero error");
        current_Input = "0";
        displayCurrentInput();
    }
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 *  Change the sign of the current input
 * @author Gemma
 */
function changeSign()
{
    current_Input = (current_Input * -1);
    displayCurrentInput();
}
/**
 * Clear the current input back to 0
 * @author Gemma
 */
function clearCurrent()
{
    current_Input = "0";
    displayCurrentInput();
}
/**
 * Change the current input to a percentage
 * @author Gemma
 */
function percentage()
{
    current_Input = (current_Input / 100);
    displayCurrentInput();
}
/**
 * Calculate the factorial of the current input
 * @author Alyssa
 */
function factorial()
{
    var result = 1;
    for (i = current_Input; i > 0; i--)
    {
        result = result * i;
        console.log(result);
        current_Input = result;
        displayCurrentInput();
    }
}
/**
 * Calculate the square of the current input
 * @author Gemma
 */
function squareX()
{
    current_Input = (current_Input * current_Input);
    displayCurrentInput();
}
/**
 * Calculate the square root of the current input
 * @author Alyssa
 */
function squareRoot()
{
    current_Input = Math.sqrt(current_Input)
    displayCurrentInput();
}
/**
 * Calculate the inverse of the current input
 * @author Gemma
 */
function inverse()
{
    current_Input = (1 / current_Input);
    displayCurrentInput();
}
//18
