async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json*/'
    /*Contante para aguardar a resposta, será feita a requisição dos dados da url acima*/
    const res = await fetch(url)
    /*onde pegar a resposta e o conteúdo*/
    const = await res.jason()
    /*separar as chaves (por exemplo facebook) dos valores (quantidade usuários) correspondentes*/
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    /*gerando os gráficos*/
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar'
        }
    ]
    /*colocar o gráfico dentro de uma div*/
    const grafico = document.creatElement('div')
    /*classe css*/
    grafico.className = 'grafico'
    /*Para acessar o código lá do html (o comando appendiChild, serve para inserir o gráfico*/
    document.getElementById('graficos-container').appendChild(grafico)
    /*criar um novo gráfico (com o comando data ele gerará o gráfico com os dados que queremos*/
    Plotly.newPlot(grafico, data)
}
/*Chamar a função*/
quantidadeUsuarios()
