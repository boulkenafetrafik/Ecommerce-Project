
const title = "Our Popular Tags";


const tagsList = [
    {
        link: '#',
        text: 'tags',
    },
    {
        link: '#',
        text: 'theme',
    },
    {
        link: '#',
        text: 'themeforest',
    },
    {
        link: '#',
        text: 'code',
    },
]

const Tags = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {tagsList.map((val, i) => (
                    <li key={i}><a href={val.link}>{val.text}</a></li>
                ))}
            </ul>
        </div>
    );
}
 
export default Tags;