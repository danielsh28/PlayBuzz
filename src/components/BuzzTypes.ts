  export interface PlayBuzzQuestion {
    text:string,
    options:Array<string>,
}

 export enum PageMode{
    start,
    quiz,
    summery
}

export  interface QuestionState{
    question :PlayBuzzQuestion,
    questionIndex :number
}

export const  BUZZ_QUESTIONS : Array<PlayBuzzQuestion> =[{
    text:'How old are you?',
    options:['15-23','24-32','40-100','32-40'],
}, {
    text:'How much is you career important to you?',
    options:['My life is  my career',
    'career is ok as long as i\'m not getting bored',
        'Its important in some case but i\'ts not all in life',
        'not much, work is for bring food to the family',
    ]},
    {
        text: 'What is the most important thing in life?',
        options: ['Money and power','Self fulfilment','Compassion to others','Family'],
    }
    ];

