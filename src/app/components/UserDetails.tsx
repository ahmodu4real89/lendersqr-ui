
import UserDetailSection from "@/app/layout/UserDetailSection";

interface Props {
  id: string;
}


export interface UserDetails {
   _id: string;
  personalInformation: {
    username: string
    organization: string;
    datejoined: string;
    status: string;
    full_name: string;
    phone_number: string;
    email: string;
    bvn: string;
    gender: string;
    marital_status: string;
    children: string;
    type_of_residence: string;
  };
  educationAndEmployment: {
    level_of_education: string;
    employment_status: string;
    sector_of_employment: string;
    duration_of_employment: string;
    office_email: string;
    monthly_income: string;
    loan_repayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    full_name: string;
    phone_number: string;
    email_address: string;
    relationship: string;
  }[];
}


const UserDetails = async ({ id }: Props) => {
    console.log(id)
    const response = await fetch(`https://lends-test-1.onrender.com/api/users/${id}`)
     const data: UserDetails = await response.json()
    
    
    

  return (
    <>
       <UserDetailSection
        title="Personal Information"
        items={[
          { label: "FULL NAME", value: data?.personalInformation?.full_name ?? '' },
          { label: "PHONE NUMBER", value: data?.personalInformation?.phone_number ?? '' },
          { label: "EMAIL ADDRESS", value: data?.personalInformation?.email ?? '' },
          { label: "BVN", value: data?.personalInformation?.bvn ?? '' },
          { label: "GENDER", value: data?.personalInformation?.gender ?? '' },
          { label: "MARITAL STATUS", value: data?.personalInformation?.marital_status ?? '' },
          { label: "CHILDREN", value: data?.personalInformation?.children ?? '' },
          { label: "TYPE OF RESIDENCE", value: data?.personalInformation?.type_of_residence ?? '' },

        ]}
      />

      <UserDetailSection
        title="Education and Employment"
        items={[
          { label: "Level of Education", value: data?.educationAndEmployment?.level_of_education ?? "" },
          { label: "Employment Status", value: data?.educationAndEmployment?.employment_status ?? "" },
          { label: "Sector of Employment", value: data?.educationAndEmployment?.sector_of_employment ?? "" },
          { label: "Duration of Employment", value: data?.educationAndEmployment?.duration_of_employment ?? "" },
          { label: "Office Email", value: data?.educationAndEmployment?.office_email ?? "" },
          { label: "Monthly Income", value: data?.educationAndEmployment?.monthly_income ?? "" },
          { label: "Loan Repayment", value: data?.educationAndEmployment?.loan_repayment ?? "" },
        ]}
      /> 

      <UserDetailSection
        title="Socials"
        items={[
          { label: "Twitter", value: data?.socials?.twitter ?? "" },
          { label: "Facebook", value: data?.socials?.facebook ?? "" },
          { label: "Instagram", value: data?.socials?.instagram ?? "" },
        ]}
      />

      <UserDetailSection
        title="Guarantor"
        items={[
          { label: "Full Name", value: data?.guarantors?.[0]?.full_name ?? "" },
          { label: "Phone Number", value: data?.guarantors?.[0]?.phone_number ?? "" },
          { label: "Email Address", value: data?.guarantors?.[0]?.email_address ?? "" },
          { label: "Relationship", value: data?.guarantors?.[0]?.relationship ?? "" },
        ]}
      /> 

    
    </>
  ); 
}; 

export default UserDetails;
