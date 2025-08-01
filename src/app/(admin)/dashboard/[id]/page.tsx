import style from './Details.module.scss';
import UserDetails from '@/app/components/UserDetails';
import UserHeader from '@/app/components/UserHeader';
import UserSummary from '@/app/components/UserSummary';

const DashboardDetail = async ({ params }: { params: Promise <{ id: string }> }) => {
   const { id } = await params;
  return (
    <>
      <div className={style.user_details_page}>
      
        <UserHeader/>
        <UserSummary/>
         <UserDetails id={id} /> 

      </div>

    </>
  );
};

export default DashboardDetail;



