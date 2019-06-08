export interface PlayBuzzQuestion {
    text:string,
    options:Array<string>,
    correctIndex:number;
}

export enum PageMode{
    start,
    quiz,
    summery
}
