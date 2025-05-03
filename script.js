// Append values to the input field
function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  // Clear the input field
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Calculate the result
  function calculate() {
    try {
      let result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid calculation");
    }
  }