import { ArrowLeftIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";
import Applicants from "@/components/organisms/Applicants";
import JobDetailComponent from "@/components/organisms/JobDetail";

type Props = {};

const JobDetailPages = (props: Props) => {
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listen">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Brand Designer</div>
          <div>Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">JobDetails</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetailComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPages;
