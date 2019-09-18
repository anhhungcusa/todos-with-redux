import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/todoActions';
import { Button } from '../components/Button';

const mapStateToProps = (state, ownProps) => {
    return ({ isActive: state.visibilityFilter === ownProps.filter ? true : false })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
}

export const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);