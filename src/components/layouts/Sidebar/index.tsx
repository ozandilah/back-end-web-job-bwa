"use client";

import { Button } from "@/components/ui/button";

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegBuilding } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { LuMessagesSquare } from "react-icons/lu";
import { RiAppsLine, RiLogoutCircleRLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
type Props = {};

function Sidebar({}: Props) {
  const router = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/")}
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <LuMessagesSquare className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <RiAppsLine className="mr-2 text-lg" />
              All Applications
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/job-listen")}
            >
              <CgWorkAlt className="mr-2 text-lg" />
              Job Listenings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <GrSchedules className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none hover:text-primary"
            onClick={() => router.push("/settings")}
          >
            <FaGears className="mr-2 text-lg" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full text-red-500 hover:bg-red-200  hover:text-red-500 justify-start rounded-none"
          >
            <RiLogoutCircleRLine className="mr-2 text-lg" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
