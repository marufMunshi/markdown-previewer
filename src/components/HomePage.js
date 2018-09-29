import React from 'react';
import Header from './Header';
import Preview from './Preview';
import Footer from './Footer';
import defaultText from '../fixtures/defaultText';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewValue: defaultText
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState(() => {
            return {
                previewValue: value
            };
        });
    }

    render() {
        return (
            <div>
                <Header />

                <div className="wrapper">
                    <textarea 
                        id="editor" 
                        placeholder="Some Element"
                        value={this.state.previewValue}
                        onChange={this.handleChange}
                        >
                    </textarea>

                    <Preview value={this.state.previewValue} />
                </div>
                
                <Footer />
            </div>
        );
    }
}