import s from './Post.module.css';
import Like from '../Post/Like';

const Post = (props) => {
    //console.log (props.message);
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/6d/54/9e/6d549e372a8b81bb2da23089526c2d7c.jpg' />
            {props.message}
           <Like/>
        </div>

    );
}

export default Post;