import { connect } from 'react-redux'
import NpcList from './NpcList'

import {toggleNPC} from '../../redux/actions'

const mapStateToProps = state => {
  return {
    npcs: state.npcs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNpcClick: id => {
      dispatch(toggleNPC(id))
    }
  }
}

const NpcListController = connect(
  mapStateToProps,
  mapDispatchToProps
)(NpcList)

export default NpcListController