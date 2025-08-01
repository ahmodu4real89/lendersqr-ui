/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import React from "react";
import { CalendarDays } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { formatCalender } from "../utils/DateFormatter";

export default function FilterCard({ table }: { table: any }) {
    const [organization, setOrganization] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [status, setStatus] = useState("");
    


    const handleReset = () => {
        setEmail("");
        setUsername("");
        setPhone("");
        setDate(undefined);
        setStatus("");
        setOrganization("");
        table.getColumn("organization")?.setFilterValue("");
        table.getColumn("email")?.setFilterValue("");
        table.getColumn("username")?.setFilterValue("");
        table.getColumn("phone_number")?.setFilterValue("");
        table.getColumn("datejoined")?.setFilterValue("");
        table.getColumn("status")?.setFilterValue("");
    };

    const handleApplyFilter = () => {
        table.getColumn("organization")?.setFilterValue(organization);
        table.getColumn("email")?.setFilterValue(email);
        table.getColumn("username")?.setFilterValue(username);
        table.getColumn("phone_number")?.setFilterValue(phone);
        table.getColumn("datejoined")?.setFilterValue(date ? format(date, "yyyy-MM-dd") : "");
        table.getColumn("status")?.setFilterValue(status);
    };

    const inputStyle = 'w-full px-6 py-6 text-xl border border-gray-300 rounded-md'

    return (

        <>

            <Card className="max-w-md mx-auto py-4">

                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="organization">Organization</Label>
                        <Input
                            placeholder="organization"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                             className={inputStyle}
                        />
                    </div>


                    <div className="flex flex-col gap-4">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                             className={inputStyle}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             className={inputStyle}
                        />
                    </div>


                    <div className="flex flex-col gap-4">
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                            placeholder="phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputStyle}
                        />
                    </div>
                  
                    <div className="flex flex-col gap-3">
                        <Label className="px-1">Date Joined</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-48 justify-between font-normal "
                                >
                                      {date ? formatCalender(date) : "Select date"}
                                    <CalendarDays  className="ml-2 h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-4">
                                <Calendar
                                    mode="single"
                                    captionLayout="dropdown"
                                    selected={date}
                                    onSelect={setDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Label htmlFor="status">Status</Label>
                        <Select value={status} onValueChange={setStatus} >
                            <SelectTrigger className="w-full p-6">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                                <SelectItem value="Blacklisted">Blacklisted</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-full gap-2 pt-2">
                        <Button variant="outline" className="border border-gray-800 text-lg p-4" onClick={handleReset}>
                            Reset
                        </Button>
                        <Button className="bg-teal-400 p-4 text-lg border hover:bg-teal-900" onClick={handleApplyFilter}>Filter</Button>
                    </div>
                </CardContent>
            </Card>
        </>

    );
}
