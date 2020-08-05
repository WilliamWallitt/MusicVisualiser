
export default class SongsHandler
{

    constructor()
    {

        this.keys = {
            a: './sounds/bubbles.mp3',
            b: './sounds/clay.mp3',
            c: './sounds/confetti.mp3',
            d: './sounds/corona.mp3',
            e: './sounds/dotted-spiral.mp3',
            f: './sounds/flash-1.mp3',
            g: './sounds/flash-2.mp3',
            h: './sounds/flash-3.mp3',
            i: './sounds/glimmer.mp3',
            j: './sounds/moon.mp3',
            k: './sounds/pinwheel.mp3',
            l: './sounds/piston-1.mp3',
            m: './sounds/piston-2.mp3',
            n: './sounds/piston-3.mp3',
            o: './sounds/prism-1.mp3',
            p: './sounds/prism-2.mp3',
            q: './sounds/prism-3.mp3',
            r: './sounds/splits.mp3',
            s: './sounds/squiggle.mp3',
            t: './sounds/strike.mp3',
            u: './sounds/suspension.mp3',
            v: './sounds/timer.mp3',
            w: './sounds/ufo.mp3',
            x: './sounds/veil.mp3',
            y: './sounds/wipe.mp3'
        }
    }


    get_sounds () {

        return this.keys

    }

    get_valid_keys () {

        let alphabet = []
        const start = 'a'.charCodeAt(0), end = 'z'.charCodeAt(0)
        for (let i = start; i < end; i++) {
            alphabet.push(String.fromCharCode(i))
        }
        return alphabet

    }

}


