import { Component } from "react"; import React from "react";
import FirstChild from "./FirstChild";
import './style.css'


class Parent extends Component {
    state = {
        firstChild: false,
    }


    ubahKomponenMuncul = () => {
        this.setState(() => {
            return {
                firstChild: !this.state.firstChild
            }
        })
    }

    render() {
        return (
            <>
                <div style={{ display: "flex", flexDirection: "column", height:"100vh" }}>
                    <div style={{ width: "100%", height:"50%" }}>
                    <img src="/Selamat datang !.png" alt=""></img>
                    <br/>
                        <button1 onClick={this.ubahKomponenMuncul}>{this.state.firstChild ? 'Batal' : 'Mulai'} Pesan</button1>
                        {this.state.firstChild && <FirstChild />}
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Parent;
