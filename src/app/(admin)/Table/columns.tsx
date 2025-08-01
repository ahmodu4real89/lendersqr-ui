"use client"
import { formatDateTime } from '../../utils/DateFormatter'
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { EllipsisVertical, Eye, ListFilterPlus, UserRoundCheck, UserX } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"


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
const cellClass = "text-sm text-slate-600 ";

export const columns: ColumnDef<UserDetails>[] = [

    {
        accessorFn: row => row.personalInformation.organization,
        id: "organization",

        header: () => (
            <div className="flex items-center gap-2 text-slate-600">
                <span>ORGANIZATION</span>
                <ListFilterPlus className="h-4 w-4" />
            </div>
        ),

        cell: ({ getValue }) => {
            const value = getValue() as string;
            return <span className={cellClass}>{value}</span>;
        },
    },



    {
        accessorFn: row => row.personalInformation.username,
        id: "username",
        header: () => (
            <div className="flex items-center gap-2 text-slate-600">
                <span>USERNAME</span>
                <ListFilterPlus className="h-4 w-4" />
            </div>
        ),

        cell: ({ getValue }) => {
            const value = getValue() as string;
            return <span className={cellClass}>{value}</span>;
        },
    },

    {
        accessorFn: row => row.personalInformation.email,
        id: "email",
        header: () => (
            <div className="flex items-center gap-2 text-slate-600">
                <span>EMAIL</span>
                <ListFilterPlus className="h-4 w-4" />
            </div>
        ),

        cell: ({ getValue }) => {
            const value = getValue() as string;
            return <span className={cellClass}>{value}</span>;
        },
    },
    {
        accessorFn: row => row.personalInformation.phone_number,
        id: "phone_number",
        header: () => (
            <div className="flex items-center gap-2 text-slate-600">
                <span>PHONE NUMBER</span>
                <ListFilterPlus className="h-4 w-4" />
            </div>
        ),

        cell: ({ getValue }) => {
            const value = getValue() as string;
            return <span className={cellClass}>{value}</span>;
        },
    },
    {
        accessorFn: row => formatDateTime(row.personalInformation.datejoined),
        id: "datejoined",
        header: () => (
            <div className="flex items-center gap-2 text-slate-600">
                <span>DATE JOINED</span>
                <ListFilterPlus className="h-4 w-4" />
            </div>
        ),

        cell: ({ getValue }) => {
            const value = getValue() as string;
            return <span className={cellClass}>{value}</span>;
        },
    },
    {
        accessorFn: row => row.personalInformation.status,
        id: "status",
        header: () => {
            return (
                <div className="flex items-center gap-2 text-slate-600">
                    STATUS
                    <ListFilterPlus className="ml-2 h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            const statusMap: Record<string, string> = {
                Pending: "bg-yellow-100 text-yellow-600",
                Active: "bg-green-100 text-green-600",
                Inactive: "bg-slate-100 text-gray-600",
                Blacklisted: "bg-rose-100 text-rose-600",
            }

            return (
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusMap[status] || "bg-rose-100 text-rose-600"}`}>
                    {status}
                </span>
            )
        }
    },


    {
        id: "actions",
        cell: ({ row }) => {
            const id = row.original._id;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                            size="icon"
                        >
                            <EllipsisVertical />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-45">
                        <Link key={id} href={`/dashboard/${id}`}>
                            <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                            <UserX className="mr-2 h-4 w-4" /> Blacklist User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <UserRoundCheck className="mr-2 h-4 w-4" /> Activate User
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    }

]