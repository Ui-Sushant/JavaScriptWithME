// ---------------------------
// 🎯 JavaScript Event Basics
// ---------------------------

// ✅ 1. Event = an action that happens (like click, keypress, scroll etc)
// ✅ Events are triggered on user interactions with the DOM

// ✅ 2. Different ways to handle events:

// ❌ Not recommended: inline HTML onclick
// <button onclick="alert('clicked')">Click me</button>

// ❌ Not recommended: assigning handler directly
// document.getElementById('owl').onclick = function() {
//     alert("Owl clicked");
// }

// ✅ Best Practice: addEventListener
// Syntax: element.addEventListener("eventType", callbackFn, useCapture)
// Example:
document.getElementById('owl').addEventListener('click', function () {
    console.log("Owl clicked");
}, false); // false = bubbling phase (default)


// ---------------------------
// 🧠 Event Object Basics
// ---------------------------
document.getElementById('images').addEventListener('click', function (e) {
    console.log(e); // 🎯 Full Event Object
    // This prints the entire event object that contains all the data about the event — like:
    // what was clicked, where it was clicked, what type of event (click, keypress, etc.)
    // if Ctrl or Alt was pressed, and much more

    console.log(e.type); // 🔠 Type of Event → e.g., "click", "keydown", etc.

    console.log(e.target); // 🎯 Actual Clicked Element → could be <img>, <button>, <li>, etc.
    // Example: clicking on <img id="owl"> will log the <img> element

    console.log(e.currentTarget); // 🪝 Element with Listener → the element where listener is attached
    // Difference: e.target is the clicked element, e.currentTarget is where listener is set

    console.log(e.clientX, e.clientY); // 🧭 Mouse Position → click location in viewport (pixels)
    // Example: 150 100 = 150px from left, 100px from top

    console.log(e.altKey, e.ctrlKey, e.shiftKey); // ⌨️ Keyboard States → true/false if keys held during event
    // Example: holding Ctrl while clicking → false true false
}, false);


// ---------------------------
// 🧱 Event Propagation
// ---------------------------
// 📌 Bubbling (default): event moves from inner → outer (child → parent)
// 📌 Capturing (useCapture true): event moves from outer → inner (parent → child)

// 🧠 Real Example of Bubbling:
// HTML: <div id="outer"><button id="inner">Click Me</button></div>
// JS:
// document.getElementById('outer').addEventListener('click', () => {
//   console.log("Outer clicked");
// });
// document.getElementById('inner').addEventListener('click', () => {
//   console.log("Inner clicked");
// });
// ✅ Clicking the button prints:
// "Inner clicked"
// "Outer clicked"

// 🚫 Stop bubbling with:
document.getElementById('owl').addEventListener('click', function (e) {
    console.log("Owl clicked");
    e.stopPropagation(); // ⛔ Prevents bubbling up to parent
}, false);


// ---------------------------
// 🚫 preventDefault()
// ---------------------------
// Stops default action (e.g., prevent link from navigating)
document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault(); // 🔒 Blocks default browser behavior (e.g., link opening)
    e.stopPropagation(); // optional: stop bubbling
    console.log("Google link clicked");
}, false);


// ---------------------------
// 🗑 Remove element on click
// ---------------------------
// Check if clicked target is an image, then remove its <li>
document.querySelector('#images').addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        console.log("Removing image:", e.target.id);
        let removeIt = e.target.parentNode; // parent <li>
        removeIt.remove(); // remove <li> from DOM
        // Alternate method: removeIt.parentNode.removeChild(removeIt);
    }
}, false);


// ---------------------------
// 🧪 Summary for Quick Review
// ---------------------------

/*
1. Use addEventListener for better flexibility and control.
2. Event object (`e`) gives detailed info (target, type, coordinates).
3. Use `e.stopPropagation()` to prevent event bubbling.
4. Use `e.preventDefault()` to block default browser actions.
5. Use `remove()` or `removeChild()` to delete DOM elements.
6. Always check e.target to conditionally run code (e.g., only if IMG clicked).
7. Bubbling: event flows from child to parent (default behavior).
8. Use e.clientX / clientY to get mouse position.
9. Use altKey, ctrlKey, shiftKey to detect keypress states during event.
*/

// ✅ Now you're ready to handle real-life DOM events!
