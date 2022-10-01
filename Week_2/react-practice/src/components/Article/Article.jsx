// The first parameter to a function is its "prop"
// <Article titke = "My Article" author = "Sean Carter" />
// The props will be an object like { title: "My Article", author: "Sean Carter"}

export const Article = (props) => {
    return (
        <article>
            <header>
                <h1>{props.title}</h1>
                <h3>Author: {props.author}</h3>
            </header>

            <p>
                {props.children}
            </p>

            <footer>
                <h6>Published Date: {props.publishDates}</h6>
            </footer>
        </article>
    )
}



//instead of using props - sean used destructuring
//look at his github