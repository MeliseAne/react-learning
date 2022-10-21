import s from './Header.module.css';

const Header = () => {
    return ( <header className={s.header}>
        <div className={s.head}>
            <div className={s.logoImg}>
                <img src='https://cdn.shortpixel.ai/spai/w_63+q_+ret_img+to_webp/https://kleo.seventhqueen.com/mobile-app/wp-content/uploads/sites/5/2015/05/app_icon_2.png'></img>
            </div>
                <div className={s.logoName}>
                <span>Social network</span>
            </div>
        </div>
  </header>);
}

export default Header;