import React from "react";
import style from "./UserDetailSection.module.scss"; 

interface InfoItem {
  label: string;
  value: string;
}

interface InfoSectionProps {
  title?: string;
  items: InfoItem[];
}

const UserDetailSection: React.FC<InfoSectionProps> = ({ title, items }) => {
  return (
    <div className={style.details}>
    <section>
      {title && <h4>{title}</h4>}
      <div className={style.grid}>
        {items.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>      
    </div>
  
  );
};

export default UserDetailSection;
