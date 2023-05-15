import App from "./App.jsx"
import "./style.css"
import { createRoot } from "react-dom/client"


const root = createRoot(document.querySelector("#root"))

const name = "Jonny"

root.render(
<App clickersCount={3}>
    <h1> My First React App</h1>
    <h2> fancy subtitle</h2>
</App>
)
    //only one top element. You can use <></> instead of a div
    //Class to className
    //for to htmlFor
    // can use '' or ""
    //can use html tags in js entry {}
    //can't do if/else, for, while BUT YOU CAN USE TERINARY (x ? 1 : 2)
    //<input type="checkbox" id="the-checkbox"></input>
    //<label htmlFor="the-checkbox">That Checkbox</label>
    //inside h1 {/*className="title"*/}
    //java script to attribute  style={}
    //do "<app //" + enter for auto import. Should add file type on end of import though.
    //Hot module replacement will reload module that changes (change log in app.jsx, prints ->
    //new line but keeps old one as well) This doesn't mean all dom elements will be rerendered.
    //Hook is a func we call inside a comp to do a specific task. all start with use (useState)

/** 
      <>
        <h1 style={{ color: "coral", backgroundColor: "floralwhite" }}>Hello {<em>{"There"}</em>}</h1>
        <p className="cute-paragraph">
        Lorem <strong>ipsum</strong> dolor <br /> sit amet consectetur adipisicin
        elit. Hic minus optio dolores tenetur voluptas, quaerat expedita corrupti
        cum iusto, impedit, rem incidunt ducimus qui soluta ipsam eaque culpa a
        doloribus! {crypto.randomUUID()}
        </p>
        </>
*/
{/* this is how you do comments in jsx*/}