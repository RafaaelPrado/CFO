document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cfo-form");
    const options = document.getElementById("options");
    const dynamicFields = document.getElementById("dynamic-fields");

    options.addEventListener("change", () => {
        const selectedOption = options.value;
        dynamicFields.innerHTML = ""; // Clear previous fields

        switch (selectedOption) {
            case "entrada":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira o nick do novo membro. Se for vários, separe por /" required>
                    <label for="materia">Matéria:</label>
                    <select id="materia" required>
                        <option value="">Selecione a matéria</option>
                        <option value="Administração e Tecnologia do Fórum">Administração e Tecnologia do Fórum</option>
                        <option value="Ciências Militares">Ciências Militares</option>
                        <option value="Carreira Militar">Carreira Militar</option>
                        <option value="Práticas Militares e Legislação">Práticas Militares e Legislação</option>
                    </select>`;
                break;

            case "licenca":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira seu nick" required>
                    <label for="quantidade">Quantidade de dias:</label>
                    <input type="number" id="quantidade" placeholder="Quantos dias utilizará?" min="7" max="90" required>
                    <label for="permissao">Permissão:</label>
                    <input type="text" id="permissao" placeholder="Coloque o nick de quem permitiu" required>`;
                break;

            case "retorno":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira seu nick" required>`;
                break;

            case "promocao":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira o nick do promovido. Se for vários, separe por /" required>
                    <label for="novoCargo">Novo cargo:</label>
                    <select id="novoCargo" required>
                        <option value="">Selecione o novo cargo</option>
                        <option value="Avaliador">Avaliador</option>
                        <option value="Fiscalizador">Fiscalizador</option>
                        <option value="Estagiário">Estagiário</option>
                        <option value="Conselheiro">Conselheiro</option>
                        <option value="Vice-Líder">Vice-Líder</option>
                        <option value="Líder">Líder</option>
                    </select>
                    <label for="motivo">Motivo:</label>
                    <input type="text" id="motivo" placeholder="Coloque o motivo que levou a essa promoção" required>`;
                break;

            case "advertencia":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira o nick do advertido. Se for vários, separe por /" required>
                    <label for="motivo">Motivo:</label>
                    <input type="text" id="motivo" placeholder="Coloque o motivo do recebimento da advertência" required>
                    <label for="permissao">Permissão:</label>
                    <input type="text" id="permissao" placeholder="Preencha o nick de quem permitiu" required>`;
                break;

            case "rebaixamento":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira o nick do rebaixado. Se for vários, separe por /" required>
                    <label for="novoCargo">Novo cargo:</label>
                    <select id="novoCargo" required>
                        <option value="">Selecione o novo cargo</option>
                        <option value="Professor">Professor</option>
                        <option value="Avaliador">Avaliador</option>
                        <option value="Fiscalizador">Fiscalizador</option>
                        <option value="Estagiário">Estagiário</option>
                        <option value="Conselheiro">Conselheiro</option>
                        <option value="Vice-Líder">Vice-Líder</option>
                    </select>
                    <div id="materiaField" style="display: none;">
                    <label for="materia">Matéria:</label>
                        <select id="materia">
                            <option value="">Selecione a matéria</option>
                            <option value="Administração e Tecnologia do Fórum">Administração e Tecnologia do Fórum</option>
                            <option value="Ciências Militares">Ciências Militares</option>
                            <option value="Carreira Militar">Carreira Militar</option>
                            <option value="Práticas Militares e Legislação">Práticas Militares e Legislação</option>
                        </select>
                    </div>
                    <label for="motivo">Motivo:</label>
                    <input type="text" id="motivo" placeholder="Coloque o motivo que levou a esse rebaixamento" required>
                    <label for="permissao">Permissão:</label>
                    <input type="text" id="permissao" placeholder="Preencha o nick de quem permitiu" required>`;
                const cargoField = document.getElementById("novoCargo");
                const materiaField = document.getElementById("materiaField");
                cargoField.addEventListener("change", () => {
                    if (cargoField.value === "Professor") {
                        materiaField.style.display = "block";
                    } else {
                        materiaField.style.display = "none";
                    }
                });
                break;

            case "desligamento":
                dynamicFields.innerHTML = `
                    <label for="desligamento">Desligamento</label>
                    <select id="tipoDesligamento" required>
                        <option value="">Selecione o tipo de desligamento</option>
                        <option value="Honroso">Honroso</option>
                        <option value="Desonroso">Desonroso</option>
                        <option value="Expulsão">Expulsão</option>
                    </select>
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira o nick do desligado. Se for vários, separe por /" required>
                    <label for="motivo">Motivo:</label>
                    <input type="text" id="motivo" placeholder="Coloque o motivo do desligamento" required>
                    <label for="permissao">Permissão:</label>
                    <input type="text" id="permissao" placeholder="Preencha o nick de quem permitiu" required>`;
                break;

            case "mudanca":
                dynamicFields.innerHTML = `
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" placeholder="Insira seu nick" required>
                    <label for="novoTema">Novo tema:</label>
                    <select id="novoTema" required>
                        <option value="">Selecione o novo tema</option>
                        <option value="Administração e Tecnologia do Fórum">Administração e Tecnologia do Fórum</option>
                        <option value="Ciências Militares">Ciências Militares</option>
                        <option value="Carreira Militar">Carreira Militar</option>
                        <option value="Práticas Militares e Legislação">Práticas Militares e Legislação</option>
                    </select>
                    <label for="permissao">Permissão:</label>
                    <input type="text" id="permissao" placeholder="Preencha o nick de quem permitiu" required>`;
                break;

            case "transferencia":
                dynamicFields.innerHTML = `
                    <label for="nicknameAtual">Nickname atual:</label>
                    <input type="text" id="nicknameAtual" placeholder="Insira o seu nick atual" required>
                    <label for="nicknameNovo">Nickname novo:</label>
                    <input type="text" id="nicknameNovo" placeholder="Coloque seu novo nick" required>
                    <label for="cargo">Cargo:</label>
                    <select id="cargo" required>
                        <option value="">Selecione o cargo</option>
                        <option value="Professor">Professor</option>
                        <option value="Avaliador">Avaliador</option>
                        <option value="Fiscalizador">Fiscalizador</option>
                        <option value="Estagiário">Estagiário</option>
                        <option value="Conselheiro">Conselheiro</option>
                        <option value="Vice-Líder">Vice-Líder</option>
                        <option value="Líder">Líder</option>
                    </select>`;
                break;
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fields = dynamicFields.querySelectorAll("input, select");
        let allValid = true;

        fields.forEach(field => {
            if (!field.value) {
                field.setCustomValidity("Preencha este campo!");
                field.reportValidity();
                allValid = false;
            } else {
                field.setCustomValidity("");
            }
        });

        if (allValid) {
            alert("Sua postagem foi realizada!");
            setTimeout(() => {
                window.location.href = "https://www.policiarcc.com/t36730-cfo-requerimentos";
            }, 2000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('options');
    const submitButton = document.querySelector('.submit-btn');

    // Função para verificar a seleção
    function toggleSubmitButton() {
        if (selectElement.value === '') {
            submitButton.style.display = 'none'; // Esconde o botão
        } else {
            submitButton.style.display = 'block'; // Exibe o botão
        }
    }

    // Chama a função inicialmente para verificar se a opção padrão foi selecionada
    toggleSubmitButton();

    // Adiciona um event listener para mudanças na seleção
    selectElement.addEventListener('change', toggleSubmitButton);
});

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('options');
    const separatorLine = document.getElementById('separator-line');

    // Função para mostrar ou esconder a linha hr
    function toggleSeparatorLine() {
        if (selectElement.value === '') {
            separatorLine.style.display = 'none'; // Esconde a linha
        } else {
            separatorLine.style.display = 'block'; // Mostra a linha
        }
    }

    // Adicionar um listener para a mudança na seleção
    selectElement.addEventListener('change', toggleSeparatorLine);

    // Chama a função inicialmente para verificar o estado da seleção
    toggleSeparatorLine();
});
