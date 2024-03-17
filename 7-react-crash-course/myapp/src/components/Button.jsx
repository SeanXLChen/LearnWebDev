import PropTypes from 'prop-types'  // import PropTypes to set the type of the props, not required but good practice

function Button({ color, text, onAdd}) {
    return (
        <button onClick={onAdd} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
} // default props

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func.isRequired
} // props type checking

export default Button