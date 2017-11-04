import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import withMarkdown from "./MarkdownLoader";
import changelog from "./Changelog.md"
import MarkdownView from "./MarkdownView";
import MarksyView from "./MarksyView";

class App extends Component {
    render() {
        let Changelog = withMarkdown(MarksyView, changelog);
        return (
            <div style={{padding: 16}}>
                <Changelog/>
            </div>
        );
    }
}

export default App;
