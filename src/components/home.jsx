import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            array: []
        }
        console.log(this.state.value)
    }
    changeValue(ev) {
        console.log(ev.target.value);
        this.setState({
            value: ev.target.value,
        })
    }
    add() {
        let { value, array } = this.state;
        console.log(value);

        if (value === "") {
            alert("please add atleast one value in input")
        }
        else {

            const obj = {
                Todo: value,
                edit: false,
                updateValue: ""
            }

            array.push(obj);
            console.log(array);

            this.setState({
                array: array,
                value: "",
            })
        }
    }

    edit(i, x) {
        const { array } = this.state
        array[i].edit = true;
        // let updateValue = prompt("Enter your new value",x);
        //     const editObj = {
        //         Todo: updateValue,
        //     }
        //    array.splice(i,1,array.edit);
        this.setState({
            array: array,
            updateValue: x,
        });
    }
    cancel(i, z) {
        const { array } = this.state;
        array[i].edit = false;

        this.setState({
            array: array,
            updateValue: z,
        });
    }
    delete(x) {
        const { array } = this.state
        array.splice(x, 1);
        this.setState({
            array: array
        });
    }
    update(i, y) {
        const { array, updateValue } = this.state;

        const obj = {
            Todo: updateValue
        }
        array.splice(i, 1, obj);
        this.setState({
            array: array,
            updateValue: y,
        });

    }

    render() {
        let { array, value, updateValue } = this.state;
        console.log(array)
        return (
            <div>
                <div className="container" style={{ border: '2px solid #333', borderRadius: 5, padding: '1px 3%' }}>
                    <label for="new-task" style={{ fontSize: '1.5em', borderBottomColor: 'white' }}>Add Item</label>
                    <input id="new-task" value={value} placeholder="Write Something" onChange={this.changeValue.bind(this)} type="text" />
                    <button onClick={this.add.bind(this)} >Add</button>
                    <button onClick={(e) => this.setState({ array: [] })} >Clear All</button>

                    <h3>Todo</h3>
                    <ul id="incomplete-tasks" >
                        {array.map((val, i) => <li key={i}>
                            <label style={{ fontSize: '2em', }}>
                                {val.edit ? <input type="text" style={{ fontSize: "0.5em" }} value={updateValue} onChange={(e) => this.setState({ updateValue: e.target.value })} /> : val.Todo}</label>
                            {val.edit ? <button onClick={this.update.bind(this, i, val.Todo)} className="edit">Update</button> : <button onClick={this.edit.bind(this, i, val.Todo)} className="edit"> Edit</button>}
                            {val.edit ? <button onClick={this.cancel.bind(this, i, val.Todo)} className="delete">Cancel</button> : <button onClick={this.delete.bind(this, i)} className="delete">Delete</button>}
                        </li>).reverse()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
