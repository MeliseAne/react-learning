import s from './Post.module.css';


const Post = (props) => {
    //console.log (props.message);
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/6d/54/9e/6d549e372a8b81bb2da23089526c2d7c.jpg' />
            {props.message}
            <div>
                <span> like </span> {props.likeCount}
            </div>
        </div>

    );
}

export default Post;