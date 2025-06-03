"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FilePenLine, SquareArrowOutUpRight, Trash } from "lucide-react"
import { MdOutlineWifiTetheringError } from "react-icons/md"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteSchema, SiteFormData } from "@/lib/validation/site";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import axios from "axios"

interface SiteCardProps {
  site: {
    id: string
    name: string
    domain: string
  }
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedData: { name: string; domain: string }) => void;
}

export function SiteCard({ site, onDelete, onEdit }: SiteCardProps) {
  const [openDelete, setOpenDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteSchema),
    defaultValues: {
      name: site.name,
      domain: site.domain,
    },
  });


  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=https://${site.domain}`

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/project/delete/${id}`)
      if (response.status === 200) {
        onDelete(id)
        console.log("post deleted");
      }

    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setIsDelete(false);
      setOpenDelete(false);
    }
  }

  const handleEdit = async (values: SiteFormData) => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/project/update/${site.id}`, values);
      if (response.status === 200) {
        onEdit(site.id, values);
      }
    } catch (error) {
      console.error("Error updating project:", error);
    } finally {
      setIsEdit(false);
      setOpenEdit(false);
    }
  };


  return (
    <div
      className="flex items-start gap-2 bg-white dark:bg-black p-3 border border-zinc-200 dark:border-zinc-800 rounded-md w-full h-full cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
    >
      <Link className="flex flex-col flex-1 gap-2 pr-2 h-full overflow-hidden"
        href={`/dashboard/sites/${site.id}`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-1"><>
            {favicon ? (
              <Image
                width={24}
                height={24}
                src={favicon}
                alt={`${site.name} favicon`}
                className="w-6 h-6 rounded-sm"
              />
            ) : (
              <MdOutlineWifiTetheringError className="w-7 h-7 text-neutral-500 dark:text-neutral-400" />
            )}
          </>
            <h2 className="overflow-hidden text-zinc-800 dark:text-white text-xl text-ellipsis whitespace-nowrap">
              {site.name}
            </h2>
            <div className="bg-emerald-400 p-[2px] rounded-full animate-pulse">
              <div className="bg-emerald-500 rounded-full size-[5px]" />
            </div>
          </div>
          <p className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm 2xl:text-xs underline">
            {site.domain}
            <SquareArrowOutUpRight size={9} />
          </p>
        </div>
      </Link>

      <div className="flex flex-col justify-between gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 h-full">
        <Button
          className="bg-transparent p-1 rounded-full text-zinc-500 dark:text-zinc-400 transition"
          size="icon"
          variant="ghost"
          onClick={() => setOpenEdit(true)}
        >
          <FilePenLine size={16} />
        </Button>
        <Button
          className="bg-transparent p-1 rounded-full text-red-400 transition"
          size="icon"
          variant="ghost"
          onClick={() => {
            setOpenDelete(true)
          }}
        >
          <Trash size={16} />
        </Button>
      </div>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>Make changes to your project below.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((values) => {
                setIsEdit(true);
                handleEdit(values);
              })}
              className="space-y-4 py-2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="My Project" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="domain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Domain</FormLabel>
                    <FormControl>
                      <Input placeholder="example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex">
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-auto"
                  type="submit"
                  disabled={isEdit}
                >
                  {isEdit ? <p>Updating...</p> : <p>Update</p>}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {site.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex">
            <Button size="sm" variant="outline" className="ml-auto"
              onClick={() => {
                setIsDelete(true)
                handleDelete(site.id)
              }}
              disabled={isDelete}
            >
              {isDelete ? <p>Deleting...</p> : <p>Delete</p>}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
