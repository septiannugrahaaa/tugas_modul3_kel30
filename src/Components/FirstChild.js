import React, { Component } from "react";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
class FirstChild extends Component {
    state = {
        angka: 0,
        tulisan: '',
        triggerSecChild: false,
        triggerThirdChild: false
    }

    componentDidMount() {
    alert(`Mulai Pesan!`)
     }
    
    componentWillUnmount() {
     alert('Pesanan Dibatalkan')
     }

    ubahKomponenMuncul1 = () => {
        this.setState(() => {
            return {
                triggerSecChild: !this.state.triggerSecChild
            }
        })
    }

    ubahKomponenMuncul2 = () => {
        this.setState(() => {
            return {
                triggerThirdChild: !this.state.triggerThirdChild
            }
        })
    }

    render() {
        return (
            <>
            <div style={{ display: "flex", width: "100vw", justifyContent: "space-evenly"}}>
                <div>
                <div>
                    <h2>Lapangan A</h2>
                    <img style={{width: "300px"}} src="/lapangan vinyl.jpg" alt=""></img>
                </div>
                <button2 onClick={this.ubahKomponenMuncul1}>{this.state.triggerSecChild ? 'Batalkan' : 'Pilih'} Lapangan</button2>
                        {this.state.triggerSecChild && <SecondChild />}
                <br />
                
                </div>
                <div>
                <div>
                    <h2>Lapangan B</h2>
                    <img style={{width: "300px"}} src="/lapangan sintetis.jpg" alt=""></img>
                </div>
                <button2 onClick={this.ubahKomponenMuncul2}>{this.state.triggerThirdChild ? 'Batalkan' : 'Pilih'} Lapangan</button2>
                        {this.state.triggerThirdChild && <ThirdChild />}
                </div>
                </div>
            </>
        );
    }
}
export default FirstChild;
