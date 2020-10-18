import React from 'react'
var quizOnes = require('../data/quiz1.json')

export default function questions() {
    return (
        <div>
            <h3>{quizOnes[0].question}</h3>
        </div>
    )
}
