document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    let basePrice = 100;

    let education = parseFloat(document.getElementById('education').value);

    let networth = parseFloat(document.getElementById('networth').value);

    let caste = parseInt(document.getElementById('caste').value);

    let skillsBonus = 0;
    document.querySelectorAll('.skills:checked').forEach(skill => {
        skillsBonus += parseInt(skill.value);
    });

    let age = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationPenalty = 1;
    document.querySelectorAll('.reputation:checked').forEach(rep => {
        reputationPenalty *= parseFloat(rep.value);
    });

    let finalPrice = basePrice * education * networth * age * reputationPenalty + caste + skillsBonus;

    document.getElementById('totalPrice').innerText = `$${finalPrice.toFixed(2)}`;

    let priceColor = finalPrice > 200 ? 'green' : 'red';
    document.getElementById('totalPrice').style.color = priceColor;
}
