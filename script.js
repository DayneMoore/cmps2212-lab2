console.log("Running...");

//lab code starts here
//uisng getElementById to get the title id
const Title = document.getElementById("title");
//checking if there is a title id, if not print this error. else, meaning
//the id was found print the title. 
if(!Title){
    console.error("Title element not found");
} else {
    console.log("Title:", Title);
}

//using the querySelector to select the first paragraph with the class name info
const firstParagraph = document.querySelector(".info");

if (!firstParagraph) {
    console.error("First paragraph with class 'info' not found");
} else {
    console.log("First Paragraph:", firstParagraph);
}

// Select all buttons with class "action-btn"
const actionButtons = document.querySelectorAll(".action-btn");

if (actionButtons.length === 0) {
    console.error("No buttons with class 'action-btn' found");
} else {
    console.log("Action Buttons:", actionButtons);
}

// Task 3: Event handlers for color changes
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    if (!boxes || boxes.length === 0) {
        console.error('No elements with class "box" were found.');
        return;
    }

    const redBtn = document.getElementById('btn-red');
    const blueBtn = document.getElementById('btn-blue');
    const greenBtn = document.getElementById('btn-green');
    const resetBtn = document.getElementById('reset-btn');

    if (!redBtn || !blueBtn || !greenBtn || !resetBtn) {
        console.error('One or more color buttons were not found:', { redBtn, blueBtn, greenBtn, resetBtn });
        return;
    }

    redBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'red';
        });
    });

    blueBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'blue';
        });
    });

    greenBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'green';
        });
    });

    resetBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'lightgray';
        });
    });
});


//task 3 text highlighter event handlers
document.addEventListener('DOMContentLoaded', () => {
			const paragraphs = document.querySelectorAll('.paragraph');
			const firstParagraph = document.querySelector('.paragraph');

			if (!paragraphs || paragraphs.length === 0) {
				console.error('No elements with class "paragraph" were found.');
				return;
			}

			if (!firstParagraph) {
				console.error('First paragraph not found.');
				return;
			}

			const highlightBtn = document.getElementById('highlight-btn');
			const clearBtn = document.getElementById('clear-btn');
			const toggleBtn = document.getElementById('toggle-btn');

			if (!highlightBtn || !clearBtn || !toggleBtn) {
				console.error('One or more control buttons were not found:', { highlightBtn, clearBtn, toggleBtn });
				return;
			}

			highlightBtn.addEventListener('click', () => {
				paragraphs.forEach(p => p.classList.add('highlight'));
			});

			clearBtn.addEventListener('click', () => {
				paragraphs.forEach(p => p.classList.remove('highlight'));
			});

			toggleBtn.addEventListener('click', () => {
				firstParagraph.classList.toggle('highlight');
			});
		});