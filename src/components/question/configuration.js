export const inputControls=[
    {
        lbl:"Question",
        name:"que",
        tag:"textarea",
        required:true,
        criteria:["Required","Min5Chars"]
    },
    {
        lbl:"Option 1",
        name:"opt1",
        type:"text",
        tag:"input",
        required:true,
        criteria:["Required"]
    },
    {
        lbl:"Option 2",
        name:"opt2",
        type:"text",
        tag:"input",
        required:true,
        criteria:["Required"]
    },
    {
        lbl:"Option 3",
        name:"opt3",
        type:"text",
        tag:"input"
    },
    {
        lbl:"Option 4",
        name:"opt4",
        type:"text",
        tag:"input"
    },
    {
        lbl:"Type",
        name:"type",
        type:"radio",
        tag:"input",
        options:["Single","Multi"],
        required:true,
        criteria:["Required"]
    },
    {
        lbl:"Answer",
        name:"ans",
        tag:"select",
        options:["A","B","C","D","AB","AC","AD","BC","BD","CD","ABC","ABD","BCD","ACD","ABCD"],
        required:true,
        criteria:["Required"]
    }
]