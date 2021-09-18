import React, { Component } from "react";
class SecondChild extends Component {
    state = {
        angka: 0,
        nama: ''
    }

     componentWillUnmount() {
     alert('Lapangan A dibatalkan');
     }

    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    handleSubmit = () => {
        alert ('Terimakasih! Pesanan atas nama '+ this.state.nama+' telah berhasil');
        this.setState ({
            angka: 0,
            nama: ''
        })
    }
    render() {
        return (
            <>
                <div>
                    <p>Spesifikasi Lapangan : </p>
                    <span>Tipe Lapangan : Vinyl</span>
                    <br />
                    <span>Harga per-Jam : Rp 175.000</span>
                </div>
                <br />
                <button3 style={{ marginRight: "5px" }} onClick={this.tambahAngka}>Durasi (+)</button3>
                <button4 style={{ marginLeft: "5px" }} onClick={this.kurangAngka}>Durasi (-)</button4>
                <br />
                <span>Durasi Sewa : {this.state.angka} jam</span>
                <br />
                <span>Total Biaya Penyewaan : Rp {this.state.angka * 175000}</span>
                <br />
                <div>
                    Atas Nama : 
                <input onChange={this.handleChange} name='nama' value={this.state.nama} />
                </div>
                <br />
                <button5 onClick={this.handleSubmit}>Pesan</button5>
                <br />
            </>
        );
    }
}
export default SecondChild;