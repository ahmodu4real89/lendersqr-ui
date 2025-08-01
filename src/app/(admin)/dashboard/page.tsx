import CardFeature from "@/app/layout/Cardfeature";
import TablePage from "../Table/page";
import style from '../dashboard/[id]/Details.module.scss'
const DashBoard = () => {
  return (
    <>
    
      <CardFeature />
      <div className={style.table_container}>
        <TablePage />
      </div>

      
    </>

    
 
  );
};

export default DashBoard;
