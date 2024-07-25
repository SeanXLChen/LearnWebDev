// // 1st way to define a component
// type HeadingProps = { title: string };
// const Heading = ({ title }: HeadingProps) => {
//     return (
//         <h1>{title}</h1>
//     )
// }


// 2nd way to define a component
const Heading = ({ title }: {title: string}) => {
    return (
        <h1>{title}</h1>
    )
}

export default Heading;
