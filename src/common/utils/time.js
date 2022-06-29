export function tempoParaSegundos(tempo) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600 //01h é igual a 3600 segundos
    const minutosEmSegundos = Number(minutos) * 60
    return horasEmSegundos + minutosEmSegundos + Number(segundos)
}