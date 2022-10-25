import s from './MyPosts.module.css';
import Post from './Post/Post';

let Posts = [
    {id:1, message:'Hi, how are you?', likeCount:22},
    {id:1, message:'It\'s mu first post?', likeCount:25}
]

let postItems = Posts.map (p =>  <Post message = {p.message} likeCount={p.likeCount} />   )

const MyPosts = () => {
    return (
        <div className={s.postBlock}>

              <h3> My posts </h3>

            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default  MyPosts;