import PropTypes from 'prop-types'  // import PropTypes to set the type of the props, not required but good practice
import Button from './Button'

/* properties passed in is just object */
// function Header({title}) {
//   return (
//     <header>
//         <h1>{title}</h1>
//     </header>
//   )
// }

/* params is passed to the Header component as a prop */
function Header(props) {

    return (
        <header className='header'>
            <h1>{props.title} App</h1>
            <Button color={props.showAdd ? 'Red' : 'Green'} text={props.showAdd ? 'Close' : 'Add'} onAdd={props.onAdd} />
        </header>
    )
}


Header.defaultProps = {
    title: 'Default Title',
} // default props

Header.propTypes = {
    title: PropTypes.string.isRequired,
} // props type checking

export default Header
