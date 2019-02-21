import React from 'react';
import {connect} from 'react-redux';

import  {fetchPostandUser} from './actions/index';
import UserHeader from './UserHeader';

import {Title, BoxStyle, Container, PTag,Input, Center, Label} from './css/element.index';


class App extends React.Component{

    componentDidMount(){
       this.props.fetchPostandUser();
    }

    /*changevalue = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    methodSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title:this.state.title,
            body:this.state.body
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
    };*/
    
    renderList(){
        return (this.props.USER.map(da => (
            <BoxStyle key={da.title}>
                <Title><UserHeader Tagid={da.userId}/></Title>
                <PTag>{da.title}</PTag>
                <PTag>{da.body}</PTag>
                
            </BoxStyle>
        )));
    }

    render(){

        return (
            <React.Fragment>
                    <Title>React - Redux</Title>
                       
                   {/*<form onSubmit={this.methodSubmit}>
                        <Center>
                        <Label>Title :</Label> <Input type="text" name="title" value={this.state.title} onChange={this.changevalue}/>
                        <Label>Body :</Label> <Input type="text" name="body" value={this.state.body} onChange={this.changevalue}/>
                            <Input type="Submit" value="POST"/>
                        </Center>
        </form><hr/>*/}
                    <Container>{this.renderList()}</Container>
            </React.Fragment>         
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        USER: state.posts
    }
}

export default connect(mapStateToProps,{fetchPostandUser})(App);