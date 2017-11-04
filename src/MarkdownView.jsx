import * as React from "react"
import Markdown from "./Markdown"
import "github-markdown-css"
// import SuperComponent from "./SuperComponent";

export default class MarkdownView extends React.Component {

    render() {
        return (
            <div className="markdown-body">
                <Markdown source={this.props.content}/>
                {/*<Markdown>*/}
                    {/*{`*/}
                              					{/*## Header*/}

                              					{/*1. One*/}
                              					{/*2. Two*/}
                              					{/*`}*/}

                    {/*<SuperComponent>Nested component</SuperComponent>*/}


                    {/*{`Test`}*/}
                {/*</Markdown>*/}
            </div>
        )
    }
}

