/* eslint-disable react/no-unescaped-entities */
'use client'
import { UserRound } from 'lucide-react'
import React, { useState } from 'react'
import style from './UserSummary.module.scss'



const UserSummary = () => {
    
    const tabs = [
        'General Details',
        'Documents',
        'Loans',
        'Savings',
        'App and System',
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
            <div className={style.summary}>
                <div className={style.avatar} >
                    <span><UserRound size={50} /></span>
                </div>
                <div className={style.info}>
                    <h2>Grace Effiom</h2>
                    <p>LSQFf587g90</p>
                </div>
                <div className={style.tier}>
                    <p>User's Tier</p>
                    <div className={style.stars}>★☆☆</div>
                </div>
                <div className={style.balance}>
                    <h3>&#8358;200,000.00</h3>
                    <p>9912345678/Providus Bank</p>
                </div>


                <div className={style.tabs}>
                    {tabs.map((tab) =>
                        <span key={tab} className={`${style.tab} ${activeTab === tab ? style.active : ''}`}               
                        onClick={() => setActiveTab(tab)}
                        >{tab} </span>
                    )}
                </div>
            </div>

        </>

    )
}

export default UserSummary