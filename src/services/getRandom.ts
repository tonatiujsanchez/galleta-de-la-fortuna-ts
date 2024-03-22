import { IPhrase } from "../interfaces"


export const getRandom = ( arr: IPhrase[] | string[] ):IPhrase | string => {

    const indexRamdom = Math.floor( Math.random() * arr.length )
    const elementRandom = arr[indexRamdom]
    
    return elementRandom
}
