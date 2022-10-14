import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws='></img>
            </div>
            <div>
                ava +descr
            </div>

            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className='Posts'>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    );
}

export default Profile;