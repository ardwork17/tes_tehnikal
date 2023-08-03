import axios from 'axios'

export const getData = async () => {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => res)
    return result

}

export const getDataNext = async (dataNext) => {
    const result = await axios.get(dataNext).then((res) => res)
    return result

}

export const getDataPrev = async (dataPrev) => {
    const result = await axios.get(dataPrev).then((res) => res)
    return result

}

export const getListDetail = async (names) => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${names}`).then((res) => res)
    return result

}