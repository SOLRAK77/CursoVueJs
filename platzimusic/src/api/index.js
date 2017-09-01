import config from './config'

//const apiKey = config.apiKey
//La linea de abajo equivale a lo mismo de la linea de arriba
//(obtener el valor apiKey del Archivo config)
const {apiKEY}  = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:pais&api_key=590e5b4fc077ea76e2068292b0f5d99f&format=json`

export default function getArtists(pais){
    const url = URL.replace(':pais',pais)
    return fetch (url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}