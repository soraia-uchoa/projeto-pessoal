alert('Bem-vindo à UchoaFit!');

let name = prompt('Qual é o seu nome?');
let period = prompt('Qual período você deseja (manhã/tarde/noite)?');
let weight = parseFloat(prompt('Qual é o seu peso?'));
let height = parseFloat(prompt('Qual é a sua altura?'));

// Estrutura condicional If-Else-Else If
if (period === 'manhã') {
    alert('Bom treino pela manhã, ' + name + '!');
} else if (period === 'tarde') {
    alert('Bom treino à tarde, ' + name + '!');
} else if (period === 'noite') {
    alert('Bom treino à noite, ' + name + '!');
} else {
    alert('Período inválido, por favor escolha entre manhã, tarde ou noite.');
}

// Estrutura condicional Switch
switch (true) {
    case (weight < 60):
        alert('Você está abaixo do peso ideal.');
        break;
    case (weight >= 60 && weight <= 80):
        alert('Você está no peso ideal.');
        break;
    case (weight > 80):
        alert('Você está acima do peso ideal.');
        break;
    default:
        alert('Peso inválido.');
}

// Estrutura de repetição While
let sessions = 0;
while (sessions < 3) {
    alert('Treino número ' + (sessions + 1) + ' realizado!');
    sessions++;
}

// Estrutura de repetição Do While
let continueTraining;
do {
    continueTraining = prompt('Deseja realizar mais um treino? (sim/não)');
} while (continueTraining.toLowerCase() === 'sim');

// Estrutura de repetição For
alert('Resumo do seu treino:');
for (let i = 1; i <= sessions; i++) {
    alert('Treino ' + i + ' completo!');
}

alert('Obrigado por participar, ' + name + '!');
