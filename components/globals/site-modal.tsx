"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  name: z.string().min(1, { message: "Site name is required" }),
  domain: z
    .string()
    .min(1, { message: "Domain is required" })
    .regex(
      /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
      { message: "Please enter a valid domain (e.g. example.com or sub.example.com)" }
    ),
});

interface Site {
  id: string;
  name: string;
  domain: string;
  visitors: number;
  pageviews: number;
}

interface AddSiteModalProps {
  trigger: React.ReactNode;
  onSiteAdded?: (site: Site) => void;
}

export function AddSiteModal({ trigger, onSiteAdded }: AddSiteModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      domain: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/sites", values);
      const newSite = res.data;

      toast({
        title: "Site added successfully",
        description: `${values.name} (${values.domain}) has been added to your account.`,
      });

      if (onSiteAdded) onSiteAdded(newSite);

      setOpen(false);
      form.reset();
    } catch (error) {
      console.error("Error adding site:", error);
      toast({
        title: "Error",
        description: "There was a problem adding the site.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new site</DialogTitle>
          <DialogDescription>
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
                    <Input placeholder="My Awesome Website" {...field} />
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
            <DialogFooter className="mt-6 px-0 pt-2">
              <Button type="submit">Add Site</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
