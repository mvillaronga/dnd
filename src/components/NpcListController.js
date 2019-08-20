import { connect } from 'react-redux'
// import { toggleTodo } from '../redux/actions'
import NpcList from '../components/NpcList'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = state => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    npcs: state.npcs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNpcClick: id => {
    //   dispatch(toggleTodo(id))
    
    }
  }
}

const NpcListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(NpcList)

export default NpcListController