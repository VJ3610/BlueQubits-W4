// Function to update the LaTeX code
function updateLatex(latexCode) {
  const latexCodeOutput = document.getElementById("latexOutput");
  const latexDisplayOutput = document.getElementById("codeOutput");

  // Add a backslash (\) before appending the new LaTeX code
  latexCodeOutput.value += latexCode;

  // Render LaTeX code in the output div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the display div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the display div
  katex.render(latexCodeOutput.value, latexDisplayOutput, {
    throwOnError: false,
  });
}

// Add an input event listener to the latexOutput textarea
document.getElementById("latexOutput").addEventListener("input", function () {
  const latexCodeOutput = document.getElementById("latexOutput");
  const latexDisplayOutput = document.getElementById("codeOutput");

  // Render LaTeX code in the latexOutput div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the codeOutput div
  katex.render(latexCodeOutput.value, latexDisplayOutput, {
    throwOnError: false,
  });
});

// // Add an input event listener to the latexOutput textarea for manual typing
// document.getElementById('latexOutput').addEventListener('input', function () {
//   const latexCodeOutput = document.getElementById('latexOutput');
//   const latexDisplayOutput = document.getElementById('codeOutput');

//   // Render LaTeX code in the latexOutput div
//   katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

//   // Display the entered LaTeX code in the codeOutput div
//   latexDisplayOutput.textContent = latexCodeOutput.value;

//   // Render LaTeX code in the codeOutput div
//   katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
// });

function downloadImage() {
  var codeOutput = document.getElementById("codeOutput");

  // Use html2canvas to capture the content of the textarea
  html2canvas(codeOutput).then(function (canvas) {
    // Convert the canvas to data URL
    var dataURL = canvas.toDataURL("image/png");

    // Create a temporary link element
    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "images.png";

    // Trigger a click event to download the image
    link.click();
  });
}

// latex icon visibllity
function display() {
  var latexEqDisplay = document.querySelector(".latex_eq_display");
  latexEqDisplay.style.display =
    latexEqDisplay.style.display === "none" ? "block" : "none";

  if (latexEqDisplay.style.display === "block") {
    // If the display is set to block, add the images dynamically
    addImagesToContainer();
  }
}

function binaryDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  // Create the HTML content for the images
  var BinaryHTML = `
  <img src="images/Binary ops/+.png" alt="plus" class="icon" onclick="updateLatex('+')">
  <img src="images/Binary ops/-.png" alt="minus" class="icon" onclick="updateLatex('-')">
  <img src="images/Binary ops/amalg.png" alt="amalg" class="icon" onclick="updateLatex('\\\\amalg')">
  <img src="images/Binary ops/ast.png" alt="ast" class="icon" onclick="updateLatex('\\\\ast')">
  <img src="images/Binary ops/backslash.png" alt="backslash" class="icon" onclick="updateLatex('\\\\backslash')">
  <img src="images/Binary ops/bigcirc.png" alt="bigcirc" class="icon" onclick="updateLatex('\\\\bigcirc')">
  <img src="images/Binary ops/bigtriangledown.png" alt="bigtriangledown" class="icon" onclick="updateLatex('\\\\bigtriangledown')">
  <img src="images/Binary ops/bigtriangleup.png" alt="bigtriangleup" class="icon" onclick="updateLatex('\\\\bigtriangleup')">
  <img src="images/Binary ops/cap.png" alt="cap" class="icon" onclick="updateLatex('\\\\cap')">
  <img src="images/Binary ops/cup.png" alt="cup" class="icon" onclick="updateLatex('\\\\cup')">
  <img src="images/Binary ops/div.png" alt="divide" class="icon" onclick="updateLatex('\\\\div')">
  <img src="images/Binary ops/lhd.png" alt="lhd" class="icon" onclick="updateLatex('\\\\lhd')">
  <img src="images/Binary ops/mp.png" alt="mp" class="icon" onclick="updateLatex('\\\\mp')">
  <img src="images/Binary ops/odot.png" alt="odot" class="icon" onclick="updateLatex('\\\\odot')">
  <img src="images/Binary ops/ominus.png" alt="ominus" class="icon" onclick="updateLatex('\\\\ominus')">
  <img src="images/Binary ops/oplus.png" alt="oplus" class="icon" onclick="updateLatex('\\\\oplus')">
  <img src="images/Binary ops/oslash.png" alt="oslash" class="icon" onclick="updateLatex('\\\\oslash')">
  <img src="images/Binary ops/otimes.png" alt="otimes" class="icon" onclick="updateLatex('\\\\otimes')">
  <img src="images/Binary ops/pm.png" alt="pm" class="icon" onclick="updateLatex('\\\\pm')">
  <img src="images/Binary ops/rhd.png" alt="rhd" class="icon" onclick="updateLatex('\\\\rhd')">
  <img src="images/Binary ops/sitminus.png" alt="setminus" class="icon" onclick="updateLatex('\\\\setminus')">
  <img src="images/Binary ops/slash.png" alt="slash" class="icon" onclick="updateLatex('/')">
  <img src="images/Binary ops/sqcap.png" alt="sqcap" class="icon" onclick="updateLatex('\\\\sqcap')">
  <img src="images/Binary ops/sqcup.png" alt="sqcup" class="icon" onclick="updateLatex('\\\\sqcup')">
  <img src="images/Binary ops/star.png" alt="star" class="icon" onclick="updateLatex('\\\\star')">
  <img src="images/Binary ops/times.png" alt="times" class="icon" onclick="updateLatex('\\\\times')">
  <img src="images/Binary ops/triangleleft.png" alt="triangleleft" class="icon" onclick="updateLatex('\\\\triangleleft')">
  <img src="images/Binary ops/triangleright.png" alt="triangleright" class="icon" onclick="updateLatex('\\\\triangleright')">
  <img src="images/Binary ops/unlhd.png" alt="unlhd" class="icon" onclick="updateLatex('\\\\unlhd')">
  <img src="images/Binary ops/unrhd.png" alt="unrhd" class="icon" onclick="updateLatex('\\\\unrhd')">
  <img src="images/Binary ops/uplus.png" alt="uplus" class="icon" onclick="updateLatex('\\\\uplus')">
  <img src="images/Binary ops/vee.png" alt="vee" class="icon" onclick="updateLatex('\\\\vee')">
  <img src="images/Binary ops/wedge.png" alt="wedge" class="icon" onclick="updateLatex('\\\\wedge')">
  <img src="images/Binary ops/wr.png" alt="wr" class="icon" onclick="updateLatex('\\\\wr')">
  `;
  iconsContainer.innerHTML = BinaryHTML;
}

function caseDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var caseHtml = `
    <img src="images/Cases/x=abc.png" alt="" class="icon" onclick="updateLatex('x =\\\\begin{cases}a, & x = 0\\\\b, & x > 0\\\\end{cases}')">
  `;
  iconsContainer.innerHTML = caseHtml;
}

function fractionDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var fraction = `
  <img src="images/Fractions/d2f(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\partial^2 f(x)}{\\\\partial x^2}')">
  <img src="images/Fractions/ddf(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\mathrm{d}f(x)}{\\\\mathrm{d}x}')">
  <img src="images/Fractions/df(x).png" alt="" class="icon" onclick="updateLatex('\\\\frac{\\\\partial f(x)}{\\\\partial x} ') ">
  <img src="images/Fractions/x_y.png" alt="" class="icon" onclick="updateLatex('\\\\frac{x}{y}')">
 
  `;
  iconsContainer.innerHTML = fraction;
}

function greekLettersDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var greek = `
    <img src="images/greek letters/alpha.png" alt="" class="icon" onclick="updateLatex('\\\\alpha')">
    <img src="images/greek letters/beta.png" alt="" class="icon" onclick="updateLatex('\\\\beta')">
    <img src="images/greek letters/gamma.png" alt="" class="icon" onclick="updateLatex('\\\\gamma')">
    <img src="images/greek letters/delta.png" alt="" class="icon" onclick="updateLatex('\\\\delta')">
    <img src="images/greek letters/chi.png" alt="" class="icon" onclick="updateLatex('\\\\chi')">
    <img src="images/greek letters/epsilon.png" alt="" class="icon" onclick="updateLatex('\\\\epsilon')">
    <img src="images/greek letters/eta.png" alt="" class="icon" onclick="updateLatex('\\\\eta')">
    <img src="images/greek letters/iota.png" alt="" class="icon" onclick="updateLatex('\\\\iota')">
    <img src="images/greek letters/kappa.png" alt="" class="icon" onclick="updateLatex('\\\\kappa')">
    <img src="images/greek letters/lambda.png" alt="" class="icon" onclick="updateLatex('\\\\lambda')">
    <img src="images/greek letters/mu.png" alt="" class="icon" onclick="updateLatex('\\\\mu')">
    <img src="images/greek letters/nu.png" alt="" class="icon" onclick="updateLatex('\\\\nu')">
    <img src="images/greek letters/omega.png" alt="" class="icon" onclick="updateLatex('\\\\omega')">
    <img src="images/greek letters/omicron.png" alt="" class="icon" onclick="updateLatex('\\\\omicron')">
    <img src="images/greek letters/phi.png" alt="" class="icon" onclick="updateLatex('\\\\phi')">
    <img src="images/greek letters/pi.png" alt="" class="icon" onclick="updateLatex('\\\\pi')">
    <img src="images/greek letters/psi.png" alt="" class="icon" onclick="updateLatex('\\\\psi')">
    <img src="images/greek letters/rho.png" alt="" class="icon" onclick="updateLatex('\\\\rho')">
    <img src="images/greek letters/sigma.png" alt="" class="icon" onclick="updateLatex('\\\\sigma')">
    <img src="images/greek letters/tau.png" alt="" class="icon" onclick="updateLatex('\\\\tau')">
    <img src="images/greek letters/theta.png" alt="" class="icon" onclick="updateLatex('\\\\theta')">
    <img src="images/greek letters/upsilon.png" alt="" class="icon" onclick="updateLatex('\\\\upsilon')">
    <img src="images/greek letters/xi.png" alt="" class="icon" onclick="updateLatex('\\\\xi')">
    <img src="images/greek letters/zeta.png" alt="" class="icon" onclick="updateLatex('\\\\zeta')">
  `;
  iconsContainer.innerHTML = greek;
}

function integralDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var integral = `
  <img src="images/integral/f(x).png" alt="" class="icon" onclick="updateLatex('\\\\int f(x)\\\\,dx')">
  <img src="images/integral/baf(x).png" alt="" class="icon" onclick="updateLatex('\\\\int_{a}^{b}f(x)\\\\,dx')">
  <img src="images/integral/lf(s).png" alt="" class="icon" onclick="updateLatex('\\\\oint_{L} f(s)\\\\,ds')">
  <img src="images/integral/baf(x_y).png" alt="" class="icon" onclick="updateLatex('\\\\iint_{a}^{b}f(x,y)\\\\,dxdy')">
  `;
  iconsContainer.innerHTML = integral;
}

// function operatorDisplay(){
//   var iconsContainer = document.getElementById('IconsContainer');
//   var Operator=`
//   <img src="images/Operators/infty.png" alt="" class="icon" onclick="updateLatex('\\\\infty')">
//   <img src="images/Operators/int.png" alt="" class="icon" onclick="updateLatex('\\\\int')">
//   <img src="images/Operators/partial.png" alt="" class="icon" onclick="updateLatex('\\\\partial')">
//   <img src="images/Operators/prod.png" alt="" class="icon" onclick="updateLatex('\\\\prod')">
//   <img src="images/Operators/sum.png" alt="" class="icon" onclick="updateLatex('\\\\sum')">
//   `;
//   iconsContainer.innerHTML = Operator;
// }

function largeOpereatorDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var operators = `
  
  <img src="images/large ops/sum.png" alt="" class="icon" onclick="updateLatex('\\\\sum')">
  <img src="images/large ops/sum(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\sum_{n=0}^{N}')">
  <img src="images/large ops/prod.png" alt="" class="icon" onclick="updateLatex('\\\\prod')">
  <img src="images/large ops/prod(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\prod_{n=0}^{N}')">
  <img src="images/large ops/coprod.png" alt="" class="icon" onclick="updateLatex('\\\\coprod')">
  <img src="images/large ops/coprod(0_n).png" alt="" class="icon" onclick="updateLatex('\\\\coprod_{n=0}^{N}')">
  <img src="images/large ops/bigcap.png" alt="" class="icon" onclick="updateLatex('\\\\bigcap')">
 <img src="images/large ops/sum.png" alt="" class="icon" onclick="updateLatex('\\\\')">

  `;
  iconsContainer.innerHTML = operators;
}

function subSuperDisplay() {
  var iconsContainer = document.getElementById("IconsContainer");
  var subSuper = `
  <img src="images/Sub_Super/Cab.png" alt="" class="icon" onclick="updateLatex('\\\\')">
  `;
  iconsContainer.innerHTML = subSuper;
}

// Function to change font size
function changeFontSize() {
  var fontSize = prompt("Enter Font Size (e.g., 12px):");
  document.getElementById("codeOutput").style.fontSize = fontSize;
}

// Function to change font color
function changeFontColor() {
  var fontColor = prompt("Enter Font Color (e.g., red):");
  document.getElementById("codeOutput").style.color = fontColor;
}

// Function to undo
function undo() {
  var latexCodeOutput = document.getElementById("latexOutput");
  var currentLatex = latexCodeOutput.value;
  
  if (currentLatex.length > 0) {
    // Remove the last character from the LaTeX code
    latexCodeOutput.value = currentLatex.slice(0, -1);
    
    // Update the display
    updateLatex(latexCodeOutput.value);
  }
}

let undoStack = [];
let redoStack = [];

function initializeUndoStack() {
    undoStack = [];
    redoStack = [];
}

// Function to handle undo and redo
var undoRedoStack = [];
var undoRedoIndex = -1;

function updateLatexFromInput() {
  var latexCodeOutput = document.getElementById("latexOutput").value;
  updateLatex(latexCodeOutput);
}

document.getElementById("latexOutput").addEventListener("input", function () {
  var latexCodeOutput = document.getElementById("latexOutput").value;
  updateLatex(latexCodeOutput);

  // Save the current state for undo
  undoRedoStack.push(latexCodeOutput);
  undoRedoIndex = undoRedoStack.length - 1;
});

function undo() {
  if (undoRedoIndex > 0) {
    undoRedoIndex--;
    var prevLatex = undoRedoStack[undoRedoIndex];
    document.getElementById("latexOutput").value = prevLatex;
    updateLatex(prevLatex);
  }
}

function redo() {
  if (undoRedoIndex < undoRedoStack.length - 1) {
    undoRedoIndex++;
    var nextLatex = undoRedoStack[undoRedoIndex];
    document.getElementById("latexOutput").value = nextLatex;
    updateLatex(nextLatex);
  }
}

// Additional function to initialize the undo stack
function initializeUndoStack() {
  var initialLatex = document.getElementById("latexOutput").value;
  undoRedoStack.push(initialLatex);
}

initializeUndoStack();
