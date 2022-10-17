import s from './MyPosts.module.css';
import Post from './Post/Post';
import Like from './Post/Like';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message = 'Hi, how are you?' />
                <Like count = '15'/>
                <Post message = "It's mu first post" />
                <Like count = '20'/>
            </div>
        </div>
    );
}

export default  MyPosts;