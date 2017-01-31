// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    clearCurrent();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
QUnit.test("Change sign test", function( assert ){
    clearCurrent();
    addDigit('3');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-3", "Passed - Expected -3");
});
QUnit.test("Percentage test", function( assert ){
    clearCurrent();
    addDigit('42');
    percentage();
    percentage();
    assert.equal(document.getElementById("screen").value, "0.0042", "Passed - Expected 0.0042");
});
QUnit.test("Inverse test", function( assert ){
    clearCurrent();
    addDigit('5');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
QUnit.test("Square test", function( assert ){
    clearCurrent();
    addDigit('4');
    squareX();
    assert.equal(document.getElementById("screen").value, "16", "Passed - Expected 16");
});
