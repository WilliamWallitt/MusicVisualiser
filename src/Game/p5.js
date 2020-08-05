import React from "react"
import Sketch from "react-p5"
import Circle from "./Circle"
import SongsHandler from "./songs";

import {Howl, Howler} from "howler"

export default class p5 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dupKey: false,
            keyTyped: '',
            dupPlay: null

        }
    }


    circle_arr = []

    rgb_value = (_lim) => {

        return Math.floor(Math.random() * _lim)

    }

    background_color = [this.rgb_value(255), this.rgb_value(255), this.rgb_value(255)]

    setup = (p5, canvasParentRef) => {

        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);

    }

    draw = (p5) => {

        p5.background(...this.background_color)

        for (let i = 0; i < this.circle_arr.length; i++) {
            let c = this.circle_arr[i]
            p5.fill(c[0].get_color())
            this.draw_shape(c[0],c[1])
        }

    }

    draw_shape = (circle, rand) => {

        circle.reduce_size()
        switch (rand) {
            case 0:
                return circle.draw_circle()
            case 1:
                return circle.draw_flower()
            case 2:
                return circle.draw_rectangle()
            default:
                return circle.draw_circle()
        }

    }


    keyTyped = (p5) => {

        this.setState({
            keyTyped: p5.key
        })

        this.background_color = [this.rgb_value(255), this.rgb_value(255), this.rgb_value(255)]

        for (let i = 0; i < this.circle_arr.length; i++) {

            if (this.circle_arr[i][0].get_diameter() < 1) {

                this.circle_arr.splice(i, 1)

            }
        }

        let r = this.rgb_value(255), g = this.rgb_value(255), b = this.rgb_value(255)
        let c = new Circle(this.rgb_value(window.innerWidth), this.rgb_value(window.innerHeight), this.rgb_value(window.innerHeight / 2.4), [r, g, b], p5)
        this.circle_arr.push([c, this.rgb_value(0)])
    }


    sound_handler = () => {

        let key = this.state.keyTyped

        let handler = new SongsHandler()
        let valid = handler.get_valid_keys()

        if (valid.includes(key)) {

            let howl = new Howl({
                src: handler.get_sounds()[key]
            })
            howl.load()
            howl.play()
        }

    }


    render() {

        return (
            <div>
                <Sketch setup={this.setup} draw={this.draw} keyTyped={this.keyTyped}/>
                {this.sound_handler(this.state.keyTyped)}
            </div>
            )
    }

}
