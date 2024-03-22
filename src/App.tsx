import { useState } from 'react'
import { Phrase, ButtonPhrase } from './components'
import { getRandom } from './services'

import phrases from './utils/phrases.json'
import { backgrounds } from './utils/backgrounds.json'

import { IPhrase } from './interfaces'
import './App.css'

function App() {

    const [phrase, setPhrase] = useState<IPhrase>(getRandom(phrases) as IPhrase)
    const [background, setBackground] = useState<string>(getRandom(backgrounds) as string)


    const handleSetPhrase = () => {
        const newPhrase = getRandom(phrases) as IPhrase
        const newBackground = getRandom(backgrounds) as string

        if (newPhrase == phrase || newBackground === background) {
            handleSetPhrase()
            return
        }

        setPhrase(newPhrase)
        setBackground(newBackground)
    }

    return (
        <>
            <main
                style={{
                    backgroundImage: `url(${background})`
                }}
                className="main"
            >
                <article className="phrase-container">
                    <h1 className="phrase-container__title">Galletas de la fortuna</h1>
                    <Phrase {...phrase} />
                    <ButtonPhrase
                        onClick={handleSetPhrase}
                    />
                </article>
            </main>
        </>
    )
}

export default App
