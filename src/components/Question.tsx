import {PlayBuzzQuestion,questions} from './BuzzTypes'

const Question :React.FC<PlayBuzzQuestion> = ( q: PlayBuzzQuestion)=>{


    const answersList = q.options.map((answer,i)=>{
        <li  key={i}>
        <label >
            <span>{answer}</span>
        </label>
        </li>
    })
return (
    <div>
        <h1>{q.text}</h1>
        <ol>
        {answersList}
        </ol>
    </div>

)
}