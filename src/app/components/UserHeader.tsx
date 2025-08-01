import React from 'react'
import style from './UserHeader.module.scss'
import Link from 'next/link'


 const UserHeader = () => {
  return (
    <>
           <div className={style.header}>
            <Link href={'/dashboard'}>
            <p className={style.back}>&larr; Back to Users</p>
            </Link>
          
          <div className={style.actions}>
            <button className={style.blacklist}>BLACKLIST USER</button>
            <button className={style.activate}>ACTIVATE USER</button>
          </div>
        </div>
    </>
  )
}

export default UserHeader