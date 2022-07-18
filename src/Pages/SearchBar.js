import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''};

    onFormSubmit(event){
        event.preventDefault();

        //TODO:Make sure we call
        // call from parent component
        this.props.onFormSubmit(this.state.term)
       
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form  onSubmit={(event)=>{this.onFormSubmit(event)}} className="ui form">
                    <div className="field">
                        <label><h4>Search Video</h4></label>
                        <input type='text' 
                        value= {this.state.term}
                        onChange={event =>this.setState({term: event.target.value})}/>

                    </div>
                    <button style={{padding: "10px" , backgroundColor: "#242424" , color: "#fff", borderRadius: "5px", cursor:"pointer"}}>
                        search
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;