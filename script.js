// Configuração do EmailJS
emailjs.init("seu_user_id"); // Substitua pelo seu user_id

// Função para enviar orçamento
document.getElementById("form-orcamento").addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        descricao: document.getElementById("descricao").value,
    };

    emailjs
        .send("service_yrw10af", "template_5ktnd56", templateParams)
        .then(
            () => alert("Orçamento enviado com sucesso!"),
            (error) => alert("Erro ao enviar orçamento: " + error.text)
        );
});

// Função para enviar mensagem de contato
document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
        nome: document.getElementById("contato-nome").value,
        email: document.getElementById("contato-email").value,
        mensagem: document.getElementById("mensagem").value,
    };

    emailjs
        .send("service_vl4wbua", "seu_template_id", templateParams)
        .then(
            () => alert("Mensagem enviada com sucesso!"),
            (error) => alert("Erro ao enviar mensagem: " + error.text)
        );
});
