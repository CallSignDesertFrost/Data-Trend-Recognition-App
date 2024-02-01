main.js
const dataInputForm = document.getElementById('data-input-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const valueInput = document.getElementById('value');
const timestampInput = document.getElementById('timestamp');
const trendParagraph = document.getElementById('trend');
const confidenceParagraph = document.getElementById('confidence');

dataInputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const dataPoint = new DataPoint(
        nameInput.value,
        emailInput.value,
        parseFloat(valueInput.value),
        new Date(timestampInput.value)
    );
    const validationResult = dataValidator.validate(dataPoint);
    if (!validationResult.isValid) {
        alert(validationResult.message);
        return;
    }
    const trend = await trendPredictor.predictTrend([dataPoint]);
    trendParagraph.textContent = `Trend: ${trend}`;
    const confidence = await trendPredictor.predictConfidence([dataPoint]);
    confidenceParagraph.textContent = `Confidence: ${confidence}`;
});