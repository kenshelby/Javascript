import React from "react";


class UserComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count: 0,
            isLogin: true,
        }
    }

    async componentDidMount(){
        const res = await fetch("url");
        const data = await res.json();
        this.setState({
            data, isLogin: false,
        })
    }

    render(){
        const {name, location} = this.props;
        return(
            <>
            <div>{name}</div>
            <div>{location}</div>
            </>
        )
    }
}