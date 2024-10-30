async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    /*Contante para aguardar a resposta, será feita a requisição dos dados da url acima*/
    const res = await fetch(url)
    /*onde pegar a resposta e o conteúdo*/
    const dados = await res.jason()
    /*separar as chaves (por exemplo facebook) dos valores (quantidade usuários) correspondentes*/
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)
    /*gerando os gráficos*/
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            /*Alterar a cor das barras do gráfico*/
            marker: {
                /*Irá pegar a formatação (estilos) do body*/
                color: getCSS ('--primary-color')
            }
        }
    ]
    const layout = {
        /*Excluir a cor branca e deixar somente a cor do background, acrescentar layout lá no plotly*/
        plot_bgcolor: getCSS('--bg-color'),
        /*Mudar a cor atrás do grafico*/
        paper_bgcolor: getCSS('--bg-color')
    }
    /*colocar o gráfico dentro de uma div*/
    const grafico = document.creatElement('div')
    /*classe css*/
    grafico.className = 'grafico'
    /*Para acessar o código lá do html (o comando appendiChild, serve para inserir o gráfico*/
    document.getElementById('graficos-container').appendChild(grafico)
    /*criar um novo gráfico (com o comando data ele gerará o gráfico com os dados que queremos*/
    Plotly.newPlot(grafico, data, layout)
}
/*Chamar a função*/
/*aqui tinha um ERRO*/
quantidadeUsuariosPorRede()
import { getCSS } from "./common.js"