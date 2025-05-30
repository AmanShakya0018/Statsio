import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";

const FeatureTechstack = () => {
  return (
    <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
      <CardHeader className="p-2">
      </CardHeader>
      <CardContent className="relative h-fit px-6 py-6 md:px-12 md:py-8">
        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          <div className="aspect-square border border-dashed"></div>
          <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <RiNextjsFill size={36} />
          </div>
          <div className="aspect-square border border-dashed"></div>
          <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <IoLogoReact size={36} />
          </div>
          <div className="aspect-square border border-dashed"></div>
          <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <FaHtml5 size={36} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeatureTechstack