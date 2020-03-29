/* JS, Project */

// Expand Menu
const body = document.getElementById("body");
const mobNav = document.getElementById("mobile-navigation");
const expandButton = document.getElementById("menu-expander");

function expandMenu() {
	body.style.overflow = "hidden";
	mobNav.style.bottom = "0";
	expandButton.style.opacity = "0";
}

// Close Menu
function closeMobMenu() {
	body.style.overflow = "visible";
	mobNav.style.bottom = "-200vw";
	expandButton.style.opacity = "0.4";
}

// Automatic Function
const headerTitle = document.getElementById("header-title");
const bgTitle = document.getElementById("background-title");

function automaticMovement() {
	setTimeout(headerTransition, 10000);
	setTimeout(automaticMovement, 20000);
}

function automaticMobileRef() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		setTimeout(moveSlide, 7500, 1);
		setTimeout(automaticMobileRef, 9500);
	}
}

automaticMovement();
automaticMobileRef();

function headerTransition() {
	if (headerTitle.className == "cycle-one") {
		headerTitle.className = "cycle-two";
		bgTitle.className = "cycle-two";
	}
	
	else {
		headerTitle.className = "cycle-one";
		bgTitle.className = "cycle-one";
	}
}

// Highlighting the Link
const sectionLinks = document.getElementsByClassName("local-link");
const postSections = document.getElementsByClassName("system-section");
var refCounter = 0;

function highlightLink(whatLink) {
	if (window.matchMedia("(orientation: landscape)").matches) {
		for (var i = 0; i < (sectionLinks.length/2); i++) {
			if (sectionLinks[i] == whatLink) {
				sectionLinks[i].className = "active local-link";
			}
			
			else {
				sectionLinks[i].className = "local-link";
			}
		}
	}
	
	else {
		for (var i = (sectionLinks.length/2); i < sectionLinks.length; i++) {
			if (sectionLinks[i] == whatLink) {
				sectionLinks[i].className = "active local-link";
			}
			
			else {
				sectionLinks[i].className = "local-link";
			}
		}
	}
}

// Locking a Section			
function toggleLock(whatSection) {
	if (whatSection.className == "system-section") {
		for (var i = 0; i < postSections.length; i++) {
			if (postSections[i] == whatSection) {
				postSections[i].className = "locked system-section";
				refCounter = i;
			}
			
			else {
				postSections[i].className = "system-section";
			}
		}
		
		highlightRecentLink(refCounter);
	}
	
	else {
		whatSection.className = "system-section";
	}
}

// Highlighting the Link via Section Locking
function highlightRecentLink(reference) {
	if (window.matchMedia("(orientation: landscape)").matches) {
		for (var i = 0; i < (sectionLinks.length/2); i++) {
			if (postSections[i] == postSections[reference]) {
				sectionLinks[i].className = "active local-link";
			}
			
			else {
				sectionLinks[i].className = "local-link";
			}
		}
	}
	
	else {		
		for (var i = 0; i < (sectionLinks.length/2); i++) {
			if (postSections[i] == postSections[reference]) {
				sectionLinks[i + (sectionLinks.length/2)].className = "active local-link";
			}
			
			else {
				sectionLinks[i + (sectionLinks.length/2)].className = "local-link";
			}
		}
	}
}

// Open Slider
var mythGenerator;
var previousNumber = 0;
const processesViewport = document.getElementById("processes");
const processSlider = document.getElementById("slider-processes");
const mythViewport = document.getElementById("mythbusters");

// Myths
const myth = document.getElementById("slide-myth");
const choices = document.getElementById("slide-choices");
const decision = document.getElementsByClassName("choice");

function openSlider() {				
	body.style.overflow = "hidden";
	processesViewport.style.left = "0";
}

function openMythbuster() {
	body.style.overflow = "hidden";
	mythViewport.style.left = "0";
	
	// Avoid consecutive repetition.
	while (mythGenerator == previousNumber) {
		mythGenerator = Math.ceil(Math.random() * 8);
	}
	
	previousNumber = mythGenerator;
	
	var trueButton = document.createElement("div");
	trueButton.className = "choice";
	trueButton.innerHTML = "True";
	var falseButton = document.createElement("div");
	falseButton.className = "choice";
	falseButton.innerHTML = "False";
	
	if (mythGenerator == 1) {
		myth.innerHTML = "Vaccines against pneumonia are effective at combatting COVID-19.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else if (mythGenerator == 2) {
		myth.innerHTML = "Face masks make you immune to COVID-19.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else if (mythGenerator == 3) {
		myth.innerHTML = "Bananas prevent coronavirus.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else if (mythGenerator == 4) {
		myth.innerHTML = "As a parent, sucking your baby's pacifier decreases the risk of his/her contracting an allergy.";
		trueButton.setAttribute("onclick", "choose('right', this)");
		falseButton.setAttribute("onclick", "choose('wrong', this)");
	}
	
	else if (mythGenerator == 5) {
		myth.innerHTML = "Inhaling steam from boiling water with salt can kill the coronavirus before it reaches the lungs.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else if (mythGenerator == 6) {
		myth.innerHTML = "Depression is not associated to a weaker immune system.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else if (mythGenerator == 7) {
		myth.innerHTML = "A vaccine can cause a complete and full-blown disease.";
		trueButton.setAttribute("onclick", "choose('wrong', this)");
		falseButton.setAttribute("onclick", "choose('right', this)");
	}
	
	else {
		myth.innerHTML = "Copper kills germs.";
		trueButton.setAttribute("onclick", "choose('right', this)");
		falseButton.setAttribute("onclick", "choose('wrong', this)");
	}
	
	choices.append(trueButton);
	choices.append(falseButton);
}

// Move to Next Reference
var referenceValue = 1;
const refSliderL = document.getElementById("reference-slider-large");
const refSliderS = document.getElementById("reference-slider-small");
const refSlide = document.getElementsByClassName("refslide");

function moveSlide(direction) {
	referenceValue += direction;
	
	if (window.matchMedia("(orientation: landscape)").matches) {
		refSliderL.style.transition = "1.5s";
	}
	
	else {
		refSliderS.style.transition = "1.5s";
	}
	
	if (referenceValue == 0) {
		referenceValue = refSlide.length/2;
		
		if (window.matchMedia("(orientation: landscape)").matches) {
			refSliderL.style.transition = "8s";
		}
	
		else {
			refSliderS.style.transition = "8s";
		}
	}
	
	else if (referenceValue > refSlide.length/2) {
		referenceValue = 1;
		
		if (window.matchMedia("(orientation: landscape)").matches) {
			refSliderL.style.transition = "8s";
		}
	
		else {
			refSliderS.style.transition = "8s";
		}
	}
	
	if (window.matchMedia("(orientation: landscape)").matches) {
		refSliderL.style.left = ((referenceValue - 1) * -100) + "%";
	}

	else {
		refSliderS.style.left = ((referenceValue - 1) * -100) + "%";
	}
	
}

// Move to Next Image
var transitionValue = 1;
const slideCount = document.getElementById("slide-count");
const subtitle = document.getElementById("subtitle");
const round = document.getElementsByClassName("round");

function moveImg(direction) {
	transitionValue += direction;
	
	if (transitionValue == 0) {
		transitionValue = 3;
	}
	
	else if (transitionValue == 4) {
		transitionValue = 1;
	}
	
	goToImg(transitionValue);
}

// Go to Image
function goToImg(certainImg) {
	transitionValue = certainImg;
	
	processSlider.style.left = ((transitionValue - 1) * -100) + "%";
	slideCount.innerHTML = "Slide " + transitionValue + " of 3";
	
	for (var i = 0; i < round.length; i++) {
		if (round[i] == round[certainImg - 1]) {
			round[i].className = "active round";
		}
		
		else {
			round[i].className = "round";
		}
	}
	
	if (certainImg == 1) {
		subtitle.innerHTML = "Cell-Mediated Immunity (from Pearson Prentice Hall)";
	}
	
	else if (certainImg == 2) {
		subtitle.innerHTML = "Humoral Immunity (from Pearson Prentice Hall)";
	}
	
	else {
		subtitle.innerHTML = "Inflammatory Response (from Pearson Prentice Hall)";
	}
}

// Close the Img Slider 
function closeImgSlider() {
	body.style.overflow = "visible";
	processesViewport.style.left = "-100vw";
}

function closeMythbuster() {
	body.style.overflow = "visible";
	mythViewport.style.left = "-100vw";
	
	setTimeout(function() {
		while (choices.firstChild) {
			choices.removeChild(choices.lastChild);
		}
	}, 2000);
}

// Choosing an Answer
const mythbusterButton = document.getElementById("startMythbusterButton");

function choose(answer, respectiveChoice) {
	if (answer == "wrong") {
		respectiveChoice.className = "wrong choice";
		revealCorrect(respectiveChoice);
	}
	
	else {
		respectiveChoice.className = "correct choice";
		
	}
	
	for (var i = 0; i < decision.length; i++) {
		decision[i].removeAttribute("onclick");
		decision[i].style.cursor = "default";
	}
	
	mythbusterButton.className = "deactivated";
	mythbusterButton.removeAttribute("onclick");
	
	setTimeout(function() {
		mythbusterButton.removeAttribute("class");
		mythbusterButton.setAttribute("onclick", "openMythbuster()");
	}, 5000);
	
}

function revealCorrect(respectiveChoice) {
	for (var i = 0; i < decision.length; i++) {
		if (decision[i] != respectiveChoice) {
			decision[i].className = "correct choice";
		}
		
		else {
			decision[i].className = "wrong choice";
		}
	}
}