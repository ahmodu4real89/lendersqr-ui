import { columns, UserDetails } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<UserDetails[]> {
  
 const response = await fetch('http://localhost:4000/api/users');
  const data  = await response.json()
  return data
}

export default async function TablePage() {
  
  const data = await getData()

  return (
   
    <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        
              <DataTable columns={columns} data={data} />
              
            </div>
          </div>
        </div>
  )
}


 