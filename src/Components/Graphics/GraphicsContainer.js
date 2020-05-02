import React, { Component } from 'react';
import { Graphics } from './Graphics';
import { heapSort } from '../../Algorithms/HeapSort';
import { gnomeSort } from '../../Algorithms/GnomeSort';

export class GraphicsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        let data = [];
        for(let i = 0; i <= 20000; i+=1000){
            data.push({name: i});
        }
        this.setState({data})
    }

    componentDidMount(){
        this.getheapSort();
        this.getgnomeSort();
    }

    getheapSort = () => {
        const heap = [];
        for(let i = 0; i < 20000; i+= 1000){
            heap.push(heapSort(this.getRandomArray(i)));
        }
        const data = this.state.data;
        for (let i = 0; i < data.length; i++) {
            data[i]["Heap sort"] = heap[i];
        }

        this.setState({ data });

    }

    getgnomeSort = () => {
        const gnome = [];
        for(let i = 0; i < 20000; i+=1000){
            gnome.push(gnomeSort(this.getRandomArray(i)));
        }

        const data = this.state.data;
        for (let i = 0; i < data.length; i++) {
            data[i]["Gnome sort"] = gnome[i];
        }
        this.setState({ data });
    }

    getRandomArray = (num) => {
        let arr = new Array(num);
        for (let i = 0; i < num; i++) {
            arr[i] = Math.floor(Math.random() * num);
        }
        return arr;
    }

    render() {
        return (
            <div>
                {this.state.data.length > 0 
                ? <Graphics data={this.state.data} actives={this.props.actives}/> 
                : null}
            </div>
        )
    }
}

export default GraphicsContainer
