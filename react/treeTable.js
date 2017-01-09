import React from 'react'

class TreeTable extends React.Component {
    constructor(props) {
        super(props)
        const keys = Object.keys(props.data).sort()
        this.state = {
            keys,
            headers: Object.keys(props.data[keys[0]]),
            status: {}
        }
        this.getRowStyle = this.getRowStyle.bind(this)
        this.toggleStatus = this.toggleStatus.bind(this)
        this.getStatus = this.getStatus.bind(this)
        this.hasChildren = this.hasChildren.bind(this)
    }
    getStatus(key) {
        return this.state.status[key.substring(0, key.length - 1)]
    }
    getRowStyle(key) {
        return (key.length < 2) ? null : (this.getStatus(key) ? null : {display: 'none'})
    }
    hasChildren(key) {
        return (undefined != this.props.data[key + '0'])
    }
    toggleStatus(key) {
        const status = this.state.status
        if (undefined == this.state.status[key]) {
            status[key] = true;
        }
        else {
            status[key] = !status[key]
            if(false == status[key]) {
                Object.keys(status).filter((v, i) => v.substring(0, key.length) == key).forEach((v, i) => status[v] = false)
            }
        }
        this.setState({status})
    }
    render() {
        return  <div>
                    <table>
                        <thead>
                            <tr>
                            {
                                this.state.headers.map((k, i) => 
                                    <th key={i}>
                                        {k}
                                    </th>
                                )
                            }
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.keys.map((key, index) => 
                                <tr key={index} style={this.getRowStyle(key)}>
                                {
                                    Object.keys(this.props.data[key]).map((k, i) =>
                                        <td key={i}>
                                        {
                                            (0 == i) 
                                            ?
                                            <div style={{paddingLeft: key.length * 10}}>
                                                <a href="javascript:void(0)" onClick={() => this.toggleStatus(key)}>
                                                    {this.hasChildren(key) ? (this.state.status[key] ? '-' : '+') : null}
                                                </a> {this.props.data[key][k]}
                                            </div>
                                            :
                                            this.props.data[key][k]
                                        }
                                        </td>
                                    )
                                }
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
    }
}

export default TreeTable