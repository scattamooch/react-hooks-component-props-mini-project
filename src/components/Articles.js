
function Articles({title, key, date, preview, minutes}) {
    const defaultDate = "January 1, 1970";

    return (
        <article className={key}>
            <h3>{title}</h3>
            <small>{date ? date : defaultDate} • {minutes} minutes</small>
            <p>{preview}</p>
        </article>
    )
}    

export default Articles;