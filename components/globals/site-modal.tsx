"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SiteFormData, siteSchema } from "@/lib/validation/site";

interface Site {
  id: string;
  name: string;
  domain: string;
}

interface AddSiteModalProps {
  trigger: React.ReactNode;
  onSiteAdded?: (site: Site) => void;
}

export function AddSiteModal({ trigger, onSiteAdded }: AddSiteModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteSchema),
    defaultValues: {
      name: "",
      domain: "",
    },
  });

  const { mutate: addSite, isPending } = useMutation({
    mutationFn: async (values: SiteFormData) => {
      const res = await axios.post("/api/sites", values);
      return res.data;
    },
    onSuccess: (newSite) => {
      toast({
        title: "Site added successfully",
        description: `${newSite.name} has been added to your account.`,
      });

      queryClient.invalidateQueries({ queryKey: ["sites"] });

      if (onSiteAdded) onSiteAdded(newSite);

      form.reset();
      setOpen(false);
    },
    onError: (error) => {
      console.error("Error adding site:", error);
      toast({
        title: "Error",
        description: "There was a problem adding the site.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: SiteFormData) => {
    addSite(values);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-neutral-800 bg-black text-neutral-400 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-white">Add a new site</DialogTitle>
          <DialogDescription className="text-neutral-400">
            Enter your website details to start tracking analytics.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="My Awesome Website"
                      disabled={isPending}
                      {...field}
                    />
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
                    <Input
                      placeholder="example.com"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-6 px-0 pt-2">
              <button
                className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add Site"}
              </button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
