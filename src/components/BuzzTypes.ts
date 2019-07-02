  export interface PlayBuzzQuestion {
    text:string,
    options:Array<string>,
      isLast: boolean
}


export  interface QuestionState{
    question :PlayBuzzQuestion,
    questionIndex :number
}

export interface SummaryProps {
    resetQuiz: Function,
    score:number


}
export interface BuzzResult{
    result:string,
    minScore:number;
}
export const RESULTS: Array<BuzzResult> = [{
    result:'you dont need to reproduce yourself! you are a free spirit rich internal world and you don\'t need a child to define yourself' +
    'trough him/her',
    minScore:3
},{result:'your normal, just like everybody else, you probably make children because everybody does and you be OK at it',
minScore:6},{
    result:'you was born to be a parent',
    minScore:7
}];

export const  BUZZ_QUESTIONS : Array<PlayBuzzQuestion> =[{
    text:'How old are you?',
    options:['15-23','24-32','40-100','32-40'],
    isLast:false
}, {
    text:'How much is you career important to you?',
    options:['My life is  my career',
    'career is ok as long as i\'m not getting bored',
        'Its important in some case but i\'ts not all in life',
        'not much, work is for bring food to the family',

    ],
    isLast:false},
    {
        text: 'What is the most important thing in life?',
        options: ['Money and power','Self fulfilment','Compassion to others','Family'],
        isLast:true
    }
    ];

