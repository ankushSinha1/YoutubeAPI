import React from 'react';

class SearchBar extends React.Component{
    state = {input: ''}
    onInputChange = (e) => {
        this.setState({input: e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.input)
    }
    render(){
        return(
            <div className='search-bar ui segment' style={{marginTop: '10px'}}>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.input} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;