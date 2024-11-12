import { getCSS, tickConfig } from "./common.js"
async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidaDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidaDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]
 
    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            Text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                Text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                Text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    
        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)
        ploty.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede() 