import React from 'react'
import TreeTable from './treeTable'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "0": {name: "Category A", description: "category a"},
                "00": {name: "Subcategory C", description: "subcategory c"},
                "000": {name: "Item 0", description: "item 0"},
                "01": {name: "Item 1", description: "item 1"},
                "02": {name: "Item 2", description: "item 2"},
                "1": {name: "Category B", description: "category b"},
                "10": {name: "Item 3", description: "item 3"},
                "2": {name: "Category A", description: "category a"}
            }
        }
    }
    render() {
        return  <div>
                    <TreeTable data={this.state.data} />
                </div>
    }
}

export default App