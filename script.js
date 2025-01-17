document.getElementById('riskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const sex = document.getElementById('sex').value;
    const stress = document.querySelector('input[name="stress"]:checked').value;
    const caffeine = document.querySelector('input[name="caffeine"]:checked').value;
    const sedentary = document.querySelector('input[name="sedentary"]:checked').value;
    const processedFoods = document.querySelector('input[name="processedFoods"]:checked').value;
    const sugaryDrinks = document.querySelector('input[name="sugaryDrinks"]:checked').value;
    
    const comorbidities = Array.from(document.querySelectorAll('input[name="comorbidities"]:checked')).map(cb => cb.value);
    const headaches = document.querySelector('input[name="headaches"]:checked').value;
    const chestPain = document.querySelector('input[name="chest_pain"]:checked').value;
    const dizziness = document.querySelector('input[name="dizziness"]:checked').value;
    const difficultyBreathing = document.querySelector('input[name="difficulty_breathing"]:checked').value;
    const nausea = document.querySelector('input[name="nausea"]:checked').value;
    const vomiting = document.querySelector('input[name="vomiting"]:checked').value;
    const visionChanges = document.querySelector('input[name="vision_changes"]:checked').value;
    const confusion = document.querySelector('input[name="confusion"]:checked').value;
    const buzzingEars = document.querySelector('input[name="buzzing_ears"]:checked').value;
    const nosebleeds = document.querySelector('input[name="nosebleeds"]:checked').value;
    const swelling = document.querySelector('input[name="swelling"]:checked').value;

    const familyHistory = document.querySelector('input[name="family_history"]:checked').value;
    const majorSurgeries = document.querySelector('input[name="major_surgeries"]:checked').value;
    const medicalDevices = document.querySelector('input[name="medical_devices"]:checked').value;
	const shortnessOfBreath = document.querySelector('input[name="shortness_of_breath"]:checked').value;
	const nightSweats = document.querySelector('input[name="night_sweats"]:checked').value;
	const blurredVision = document.querySelector('input[name="blurred_vision"]:checked').value;
	const eyePain = document.querySelector('input[name="eye_pain"]:checked').value;
	const eyeRedness = document.querySelector('input[name="eye_redness"]:checked').value;
	const feetWeakness = document.querySelector('input[name="feet_weakness"]:checked').value;
	const smoking = document.querySelector('input[name="smoking"]:checked').value;
	const alcohol = document.querySelector('input[name="alcohol"]:checked').value;
	const waist = parseInt(document.getElementById('waist').value);
	const physicalActivity = document.querySelector('input[name="physical_activity"]:checked').value;


    // Calculate risk score
    let riskScore = 0;

    // Adding risk factors based on input values
    if (age > 45) riskScore += 10;
    if (weight / ((height / 100) ** 2) > 25) riskScore += 10;
    if (sex == '1') riskScore += 5;
    if (stress > 2) riskScore += 5;
    if (caffeine > 2) riskScore += 5;
    if (sedentary > 2) riskScore += 5;
    if (processedFoods > 2) riskScore += 5;
    if (sugaryDrinks > 2) riskScore += 5;

    if (comorbidities.includes('hypertension')) riskScore += 10;
    if (comorbidities.includes('diabetes')) riskScore += 10;
    if (comorbidities.includes('heartDisease')) riskScore += 10;
    if (comorbidities.includes('kidneyDisease')) riskScore += 10;
    if (comorbidities.includes('stroke')) riskScore += 10;

    if (headaches > 2) riskScore += 5;
    if (chestPain > 2) riskScore += 10;
    if (dizziness > 2) riskScore += 5;
    if (difficultyBreathing > 2) riskScore += 10;
    if (nausea > 2) riskScore += 5;
    if (vomiting > 2) riskScore += 5;
    if (visionChanges > 2) riskScore += 5;
    if (confusion > 2) riskScore += 5;
    if (buzzingEars > 2) riskScore += 5;
    if (nosebleeds > 2) riskScore += 5;
    if (swelling > 2) riskScore += 5;

    if (familyHistory == '1') riskScore += 10;
    if (majorSurgeries == '1') riskScore += 10;
    if (medicalDevices == '1') riskScore += 10;
	// Add these to the risk score calculation
	if (nightSweats == '1') riskScore += 3;
	if (blurredVision == '1') riskScore += 3;
	if (eyePain == '1') riskScore += 3;
	if (eyeRedness == '1') riskScore += 3;
	if (feetWeakness == '1') riskScore += 3;
	if (smoking == '2') riskScore += 10;
	else if (smoking == '1') riskScore += 5;
	if (alcohol == '1') riskScore += 5;
	if ((sex == '1' && waist > 102) || (sex == '2' && waist > 88)) riskScore += 5;
	if (physicalActivity == '1') riskScore += 5;
    // Display the result
	if (riskScore > 100) riskScore = 100;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Your calculated hypertension risk score is: <strong>${riskScore}</strong></p>`;
    resultElement.style.display = 'block';
});
