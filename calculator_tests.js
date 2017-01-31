// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    clearCurrent();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
// Test changing the sign of the current input
QUnit.test("Change sign test", function (assert) {
    clearCurrent();
    addDigit('3');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-3", "Passed - Expected -3");
});
// Test the factorial factorial
QUnit.test("Check factorial test", function (assert) {
    clearCurrent();
    factorial();
    addDigit('3');
    assert.equal(document.getElementById("screen").value, "3", "Passed - Expected 6");
});
// Check finding the percentage of the current input
QUnit.test("Check percentage test", function (assert) {
    clearCurrent();
    addDigit('42');
    percentage();
    percentage();
    assert.equal(document.getElementById("screen").value, "0.0042", "Passed - Expected 0.0042");
});
QUnit.test("Check inverse test", function (assert) {
    clearCurrent();
    addDigit('5');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
QUnit.test("Check Square Root test", function (assert) {
    clearCurrent();
    addDigit('16');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
});
QUnit.test("Check Square test", function (assert) {
    clearCurrent();
    addDigit('4');
    squareX();
    assert.equal(document.getElementById("screen").value, "16", "Passed - Expected 16");
});
QUnit.test("Check allClear test", function (assert) {
    clearCurrent();
    addDigit('4');
    allClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
});
