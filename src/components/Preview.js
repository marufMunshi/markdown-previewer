import React from 'react';
import marked from 'marked';

export default class Preview extends React.Component {

    render() {
        const getMarkup = () => {
            const markReConfig = new marked.Renderer();
            markReConfig.link = (href, title, text) =>
            `<a href="${href}" target="_blank">${text}</a>`;
            marked.setOptions({
                renderer: markReConfig,
                pedantic: false,
                gfm: true,
                tables: true,
                breaks: true,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false
            });

            return {
                __html: marked(this.props.value, { renderer: markReConfig })
            };
        }

        return <div id="preview" dangerouslySetInnerHTML={getMarkup()} />
    }

}

