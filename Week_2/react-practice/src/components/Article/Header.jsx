export const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h3>Author: {props.author}</h3>
        </header>
    );
}