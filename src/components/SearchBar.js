import React from 'react';

class SearchBar extends React.Component {
    
    state = { 
       term: '',
    };
   
    onSubmitChange = (event) => {
       event.preventDefault();
       this.props.onSubmit(this.state.term)
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitChange}>
                    <div className="field">
                    <label>Video Search</label>    
                    <input 
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                        placeholder="Search..."
                    ></input>
                    
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;