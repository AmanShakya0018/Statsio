"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FilePenLine, SquareArrowOutUpRight, Trash } from "lucide-react";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteSchema, SiteFormData } from "@/lib/validation/site";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

interface SiteCardProps {
  site: {
    id: string;
    name: string;
    domain: string;
  };
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

  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=https://${site.domain}`;

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/project/delete/${id}`,
      );
      if (response.status === 200) {
        onDelete(id);
        console.log("post deleted");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setIsDelete(false);
      setOpenDelete(false);
    }
  };

  const handleEdit = async (values: SiteFormData) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/project/update/${site.id}`,
        values,
      );
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
    <div className="flex h-full w-full cursor-pointer items-start gap-2 rounded-md border border-zinc-800 bg-black p-3 transition hover:bg-neutral-900">
      <Link
        className="flex h-full flex-1 flex-col gap-2 overflow-hidden pr-2"
        href={`/dashboard/sites/${site.id}`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <>
              {favicon ? (
                <Image
                  width={24}
                  height={24}
                  src={favicon}
                  alt={`${site.name} favicon`}
                  className="h-6 w-6 rounded-sm"
                />
              ) : (
                <MdOutlineWifiTetheringError className="h-7 w-7 text-neutral-400" />
              )}
            </>
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl text-white">
              {site.name}
            </h2>
            <div className="animate-pulse rounded-full bg-emerald-400 p-[2px]">
              <div className="size-[5px] rounded-full bg-emerald-500" />
            </div>
          </div>
          <p className="flex items-center gap-1 text-sm text-zinc-400 underline 2xl:text-xs">
            {site.domain}
            <SquareArrowOutUpRight size={9} />
          </p>
        </div>
      </Link>

      <div className="flex h-full flex-col justify-between gap-2 border-l border-zinc-800 pl-3">
        <button
          className="rounded-full bg-transparent p-2 text-zinc-400 transition hover:bg-neutral-800"
          onClick={() => setOpenEdit(true)}
        >
          <FilePenLine size={16} />
        </button>
        <button
          className="rounded-full bg-transparent p-2 text-red-400 transition hover:bg-neutral-800"
          onClick={() => {
            setOpenDelete(true);
          }}
        >
          <Trash size={16} />
        </button>
      </div>
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="border-neutral-800 bg-black text-neutral-400 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">Edit Project</DialogTitle>
            <DialogDescription className="text-neutral-400">
              Make changes to your project below.
            </DialogDescription>
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
                <button
                  className="ml-auto flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800"
                  type="submit"
                  disabled={isEdit}
                >
                  {isEdit ? <p>Updating...</p> : <p>Update</p>}
                </button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="border-neutral-800 bg-black text-neutral-400 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">Delete Project</DialogTitle>
            <DialogDescription className="text-neutral-400">
              Are you sure you want to delete {site.name}? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex">
            <button
              className="ml-auto flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800"
              onClick={() => {
                setIsDelete(true);
                handleDelete(site.id);
              }}
              disabled={isDelete}
            >
              {isDelete ? <p>Deleting...</p> : <p>Delete</p>}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
