import React, {createElement} from "react"
import marksy from 'marksy/components'
import SuperComponent from "./SuperComponent";
import "github-markdown-css"

export default class MarksyView extends React.Component {

    render() {
        const compile = marksy({
            createElement,
            components: {
                SuperComponent(props) {
                    return <SuperComponent>{props.children}</SuperComponent>
                }
            }
        });

        let md = compile(this.props.content);
        return <div className="markdown-body">{md.tree}</div>
    }
}