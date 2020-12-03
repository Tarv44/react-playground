import React from 'react'

class Accordion extends React.Component {
    static defaultProps = { sections: [] }
    
    state = {
        currentTabIndex: null
    };

    handleButtonClick = (index) => {
        this.setState({currentTabIndex: index})
    }

    renderSections() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                <p>{this.state.currentTabIndex === index && section.content}</p>
            </li>
        ))
    }
    
    render() {
        return(
            <ul>
                {this.renderSections()}
            </ul>
        )
    }
}

export default Accordion