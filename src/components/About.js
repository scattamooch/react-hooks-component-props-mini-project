
function About(props) {
    return(
        <aside>
            <img src={props.blogData.image} alt="blog-logo" />
            <p>{props.blogData.about}</p>
        </aside>
    )
}

export default About;