document.addEventListener("DOMContentLoaded", () => {
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    const questions = [
        {
            question: "Qual a minha cor favorita?",
            answers: ["Roxo", "Azul", "Verde", "Vermelho"],
            correct: 3,
            reward: "Você acertou! Vermelho é minha corzinha favorita, a cor do meu amor por você. 💜",
        },
        {
            question: "Qual é o dia que começamos a namorar?",
            answers: ["12 de outubro", "12 de novembro", "12 de setembro", "12 de agosto"],
            correct: 0,
            reward: "Exatamente, o dia que mudou nossas vidas para sempre. 💜",
        },
        {
            question: "O que mais valorizamos no relacionamento?",
            answers: ["Confiança", "Sinceridade", "Carinho", "Tudo isso"],
            correct: 3,
            reward: "Isso mesmo! Nosso amor é baseado em tudo de melhor, e sempre será. 💜",
        },
        {
            question: "Qual foi o nosso momento mais especial até agora?",
            answers: ["Nosso primeiro 'eu te amo'", "A primeira call", "Quando decidimos namorar", "Todos os momentos são especiais"],
            correct: 3,
            reward: "Sim! Cada momento ao seu lado é único e especial para mim. 💜",
        },
        {
            question: "Qual é a primeira coisa que penso quando acordo?",
            answers: ["No café da manhã", "No trabalho", "Em você", "Em nada"],
            correct: 2,
            reward: "Isso mesmo! Você é o primeiro pensamento do meu dia, é oque me faz acordar feliz, sempre. 💜",
        },
        {
            question: "Qual foi a primeira coisa que falei para você?",
            answers: ["Oi, tudo bem?", "Você é linda!", "Gostei do seu sorriso", "Que vozinha em 😋"],
            correct: 3,
            reward: "Simmm ASKDKA a primeira coisa que falei para você, e não me arrependo de ter começado uma conversa. 💜",
        },
        {
            question: "Qual foi o lugar onde nos conhecemos?",
            answers: ["No Discord", "No free fire", "Pelo roblox no jogo Natural Disaster", "Pelo roblox no jogo MIC UP"],
            correct: 3,
            reward: "É isso! Foi no MIC UP (esse jogo de maluco) que começamos essa historia, com varios xingamentos no começo, e humilhações, mas estamos aqui agora, nos amando KASK e isso que importa. 💜",
        },
        {
            question: "Qual é o país que eu mais quero visitar?",
            answers: ["Suiça", "Austrália", "Equador", "Espanha"],
            correct: 0,
            reward: "Você acertou! Suiça é o meu destino dos sonhos, e não só para viagem, mas se tudo der certo, para ter uma vida com você, em um lugar lindo, perfeito, que combine com a pessoa perfeita que você é. 💜",
        },
        {
            question: "Qual cor eu sei que você ama?",
            answers: ["Azul", "Rosa", "Roxo", "Verde"],
            correct: 2,
            reward: "Sim, o roxo é a sua cor favorita, corzinha linda, que ilumina tudo ao seu redor! 💜",
        },
    ];

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answersContainer.innerHTML = "";
        feedback.textContent = "";

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("answer-btn");
            button.addEventListener("click", () => checkAnswer(index));
            answersContainer.appendChild(button);
        });
        nextButton.disabled = true;
    }

    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        const buttons = answersContainer.querySelectorAll(".answer-btn");

        buttons.forEach((btn, index) => {
            if (index === currentQuestion.correct) {
                btn.classList.add("correct");
            } else {
                btn.classList.add("wrong");
            }
            btn.disabled = true;
        });

        if (selectedIndex === currentQuestion.correct) {
            feedback.textContent = currentQuestion.reward;
        } else {
            feedback.textContent = "Ops, essa não era a resposta certa! 😅";
        }
        nextButton.disabled = false;
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            questionText.innerHTML = "Você completou todas as perguntas,<br>isso mostra que você sabe muito sobre mim e sobre nós, e agora tem um textinho te esperando ai embaixo<br>TE AMO PRINCESA<br>FELIZ 3 MESES";
            answersContainer.innerHTML = "";
            feedback.innerHTML = "Hoje é um dia especial, dia em que comemoramos 3 meses de amor, e a cada segundo tudo isso fica cada vez mais forte. Não consigo encontrar palavras suficientes para descrever o quanto sou feliz por ter você na minha vida. Três meses podem parecer pouco para alguns, mas para mim são três meses de felicidade, três meses de descobertas, risadas, troca de amor e um apoio incrível. <br>Quando olho para o que construímos agora, não posso deixar de ficar orgulhoso e feliz. Eu te amo mais do que tudo que já tive, algo além do olho físico. Sempre soube que esse amor seria para mim a melhor coisa da minha vida, meu amor. Você me fez perceber que as emoções podem se desenvolver em lugares e situações inesperadas. <br>É incrível como nosso relacionamento começou de uma forma tão inesperada, te conhecendo em um joguinho aleatório, com milhares de pessoas todos os dias, mas a gente se encontrou, eu escolhi a pessoa certa para conversar, a gente conversou, a gente conseguiu manter isso até agora, e conseguimos nos amar da maneira mais pura possível. Cada conversa, cada jogo, cada momento é uma pequena sementinha que, com o tempo, se transformará em um lindo jardim, um jardim que, espero, continuará crescendo em nossas vidas. Não importa a distância, sinto que você está sempre ao meu lado. Seu amor é sempre uma fonte de força e alegria para mim. Posso estar em qualquer lugar, mas sinto que está ao meu lado, sempre. É um sentimento indescritível, um vínculo que transcende o físico, um vínculo que não pode ser quebrado. <br>Adoro tudo em você, Júlia. Seu sorriso, sua beleza, seu jeitinho, amo cada detalhe em você, até os detalhes de ser chatinha as vezes KASKDA, mas o mais importante, eu amo seu coração, amo o amor que sente por mim. Você tem esse poder de me fazer sentir mais forte e mais bonito, mais confiante, e eu quero estar bem todos os dias, dessa forma, com você me deixando bem, estando ao seu lado. Pensar em todas as coisas que queremos viver, todas as coisas que planejamos para nosso futuro, des das coisinhas mais bobas, até as mais emocionantes, enche meu coração de esperança e alegria. Cada momento com você, mesmo estando longe, é lindo. Sempre agradecerei por escolher me amar, por me fazer parte da sua vida. <br>Quero que saiba que cada um desses três meses com você é um presente. Fico feliz que você tenha me encontrado, você é especial, e tornou cada dia melhor ao seu lado. Tenho certeza de que o que estamos criando é apenas o começo de uma história que persistirá em nossas vidas. E cada capítulo será melhor que o anterior, pois será repleto de amor, muito trabalho, confiança e amizade. <br>Mesmo que tenhamos que esperar um pouco, tenho certeza que tudo isso fortalecerá nosso vínculo. Meu amor por você é tão grande e forte que nada pode nos separar. Estarei com você em cada passo do caminho, apoiando, amando e estando com você. E um dia, quando nos encontrarmos pessoalmente, vou te abraçar e te mostrar, com um simples movimento, um simples abraço, o que sinto por você. Mas até esse momento chegar, sei que podemos crescer juntos, compartilhar nossos sonhos, risadas e lutas, e sempre amar e respeitar um ao outro. <br>Eu te amo mais do que palavras podem descrever. Gosto do jeito que você sorri, do jeito que você fala, do jeito que você cuida de tudo ao seu redor, do jeito que cuida de mim. Adoro que encontremos maneiras de tornar cada dia mais significativo do que nunca, não importa onde estejamos. Cada palavra sua é um abraço no meu coração, suas palavras são uma música que me deixa feliz. Fico feliz por ser escolhido para receber seu amor, carinho e atenção. <br>Neste terceiro mês, quero que saiba que farei o possível para ser seu Melhor amigo, seu namorado, seu futuro esposo, quero ser o melhor em tudo que eu puder ser. Quero que você seja sempre meu apoio, minha alegria, minha segurança. E sei que com você posso ser tudo o que sonhei ser. Você é alguém com quem posso compartilhar minha vida, meu amor, minhas esperanças e meus medos. Confio em você mais do que tudo neste mundo e sei que podemos fazer qualquer coisa. <br>Então, Julia, obrigado por me deixar fazer parte da sua vida. Obrigado por compartilhar isso comigo de uma forma tão profunda. Obrigado por tornar esses três meses lindos e inesquecíveis. Eu te amo mais do que pensei que amaria, e a cada dia que passa, eu te amo mais. Para nós a distância é apenas uma prova de que o mais importante é o que está no coração. Meu coração é seu, para sempre. <br>Felizes três meses, meu amor. Você é minha princesinha linda, eu te amo.";
            nextButton.style.display = "none";
        }
    });
    
    loadQuestion();
});
