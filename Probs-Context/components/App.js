import React from 'react';

import UserHeader from './UserHeader';
import contextValues from './LanguageContext';
import colorContext from './ColorContext';

class App extends React.Component{

    state={language:'english'};

    renderLanguage(value){
        this.setState({language:value});
    }

    render(){
        return(

            <div className="ui container ">
                select language:
                <i className="flag nl" onClick={() => this.renderLanguage('dutch')}/>
                <i className="flag india" onClick={() => this.renderLanguage('telugu')}/>
                <i className="flag uk" onClick={() => this.renderLanguage('english')}/>
                <contextValues.Provider value={this.state.language}>
                     <UserHeader/>
                </contextValues.Provider>
                <colorContext.Provider value="red">
                    <contextValues.Provider value={this.state.language}>
                         <UserHeader/>
                    </contextValues.Provider>
                </colorContext.Provider>
            </div>
        );
    }
}

export default App;