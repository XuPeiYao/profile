/**
 * 表示章節
 */
export class Section{
    /**
     * 章節內容
     */
    public content: any;

    constructor(
        /**
         * 唯一識別
         */
        public id:string,
        /**
         * 標題文字
         */
        public title:string,
        /**
         * 圖示Class
         */
        public icon:string
    ){}
}