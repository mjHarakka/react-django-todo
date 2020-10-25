import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTodos } from '../../actions/todos'

export class Todos extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }

    componentDidMount() {
        getTodos()
    }

    render() {
        return (
            <div>
                <h1>Todo's list</h1>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps)(Todos)