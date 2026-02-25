import React from "react";

class App extends React.Component {
    state = {
        company:"ND"
    };
    componentDidMount(){
        setTimeout(() => {
            this.setState({company:'Hello Viewers....ABC here'});
        },600);
    }
    componentDidUpdate(){
        document.getElementById('a1').innerHTML='P.s:ND is also known as '+ this.state.company;
    }
    render(){
        return (
            <div>
                <h1 style={{
                    margin:'auto',
                    width:'50%',
                    padding:20,
                    marginTop:'10%',
                    border:'solid 1px black',
                    textAlign:'center',
                    fontSize:18,
                }}>Excellent learning channel:
                {this.state.company}
                <div id="a1"></div></h1>
            </div>
        )
    }
}
export default App;