import React from "react"
const fetch = require('node-fetch')
const FileReader = require('filereader'), fileReader = new FileReader()
const Plotly = require("plotly.js-dist")
const ft = require('fourier-transform');
const db = require('decibels');

export default class Test extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.get_mp3_file().then(data => {

            let x = data.map((item, index) => {
                return index
            })
            let y = data

            let trace = {
                x: x.slice(0, 1000),
                y: y.slice(0, 1000),
                type: 'scatter'
            }

            Plotly.newPlot('data', [trace])

        })
    }


    get_mp3_file = async () => {

        let frequency = 440;
        let size = 1024;
        let sampleRate = 44100;

        let buffer = await fetch("http://localhost:3000/sounds/bubbles.mp3").then(res => {
            return res.blob()
        }).then(blob => {
            return blob.arrayBuffer()
        }).then(array_buffer => {

            let waveform = new Float32Array((array_buffer).slice(0, 2**14))
            for (let i = 0; i < waveform.length; i++) {
                let trans = Math.sin(frequency * Math.PI * 2 * (i / sampleRate))
                waveform[i] = trans
            }

            waveform = waveform.slice(0, 2**14)

            return waveform
            // let spectrum = ft(waveform)
            // let decibels = spectrum.map((value) => {db.fromGain(value)})

            // return new Int16Array(array_buffer)
        })

        return buffer
    }

    render() {
        return (
            <div id="data">

            </div>
        )
    }

}






// Javascript code to read in a WAV file as a binary blob
//
// Code to convert slices of that blob as 16-bit samples into suitable Javascript arrays of numeric samples for an FFT
//
// A Javascript implementation of a DFT or FFT of suitable size arrays for the time and frequency resolution you desire
//
// Code to estimate your desired frequency and magnitude parameters as you step-and-repeat the FFT across your data slices
//
// The first 3 can be found from web searches (Github, here, et.al.)
