import React from 'react';

class FilteredBeer extends React.Component {
    state = {
        word: '',
    }


    wordChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });

        this.props.filterBeer(value)
    }

    render() {
        const { word } = this.state;
        return (
            <input id="search-bar" type="text" name="word" onChange={this.wordChange} value={word}  placeholder="Search"/>
        )
    }
}

export default FilteredBeer;