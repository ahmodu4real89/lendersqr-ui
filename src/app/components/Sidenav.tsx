'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sideNavItems, type SideNavItem } from '../config/Sidenav.config';
import style from './Sidenav.module.scss';

const Sidenav = () => {
  const pathname = usePathname();

  const renderMenu = (items: SideNavItem[]) => {
    return items.map((item) => {
      const isParentActive = pathname.startsWith(item.path || '');

      if (item.children && item.children.length > 0) {
        return (
          <div key={item.label} className={style.sidenav__group}>
            <div
              className={`${style.sidenav__group_header} ${
                isParentActive ? style.active : ''
              }`}
            >
              {item.icon && <item.icon size={18} />}
              <span>{item.label}</span>
            </div>
            <div className={style.sidenav__group_items}>
              {item.children.map((child) => {
                const isChildActive = pathname.startsWith(child.path || '');

                return (
                  <Link
                    href={child.path || '#'}
                    key={child.label}
                    className={`${style.sidenav__link} ${
                      isChildActive ? style.active : ''
                    }`}
                  >
                    {child.icon && <child.icon size={16} />}
                    <span>{child.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      }

      return (
        <Link
          href={item.path || '#'}
          key={item.label}
          className={`${style.sidenav__link} ${
            isParentActive ? style.active : ''
          }`}
        >
          {item.icon && <item.icon size={18} />}
          <span>{item.label}</span>
        </Link>
      );
    });
  };

  return <div className={style.sidenav}>{renderMenu(sideNavItems)}</div>;
};

export default Sidenav;
