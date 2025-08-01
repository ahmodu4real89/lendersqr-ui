import { Bell, ChevronDown, Search } from 'lucide-react';
import style from './Navbar.module.scss' 
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__container}>
        
        
    <div className={style.navbar__logo}>
          <Image src={'/logo.svg'} alt="logo" width={144} height={30} />
        </div>

        
        <div className={style.navbar__search}>
          <div className={style.search__group}>
            <input type="search" placeholder="Search..." />
            <button>
              <Search className={style.search__icon} />
            </button>
          </div>
        </div>

        
        <div className={style.navbar__right}>
          <div className={style.navbar__doc}>Doc</div>
          <div className={style.navbar__bell}>
            <Bell width={24} height={25} />
          </div>
          <div className={style.navbar__profile}>
            <Image src={'/profile.png'} alt="profile" 
            className={style.img} width={40} height={40}/>
            <span className={style.profile__name}>Ayodeji</span>
            <ChevronDown className={style.dropdown__icon} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
