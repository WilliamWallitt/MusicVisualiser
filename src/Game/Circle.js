export default class Circle {

    constructor (x, y, d, fill, p5) {

        this.x = x
        this.y = y
        this.d = Math.floor(d)
        this.fill = fill
        this.p5 = p5

    }


    draw_circle () {

        return this.p5.circle(this.x, this.y, this.d)

    }


    draw_rectangle() {

        return this.p5.rect(this.x, this.y, this.d / 4, this.d / 4)

    }

    draw_triangle() {

        return this.p5.triangle(this.x + 50, this.y + 50, this.x, this.y, this.x + 60, this.y)

    }


    draw_flower() {

        let flower = []
        for (let i = 0; i < 10; i ++) {
            flower.push(this.p5.ellipse(this.x, this.y, this.d / 10, this.d / 2).rotate(Math.PI / 5))
        }

        return flower
    }


    get_color () {

        return this.fill

    }

    reduce_size () {


        if (this.d > 0) {

            this.d = this.d - 1

        }

    }

    get_diameter () {

        return this.d

    }
}
