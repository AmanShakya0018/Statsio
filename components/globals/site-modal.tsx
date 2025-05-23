"use client";

import { useState } from "react";
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

  const form = useForm<SiteFormData>({
    resolver: zodResolver(siteSchema),
    defaultValues: {
      name: "",
      domain: "",
    },
  });

  const onSubmit = async (values: SiteFormData) => {
    try {
      const res = await axios.post("/api/sites", values);
      const newSite = res.data;
      toast({
        title: "Site added successfully",
        description: `${values.name} (${values.domain}) has been added to your account.`,
      });

      if (onSiteAdded) onSiteAdded(newSite);

      form.reset();
    } catch (error) {
      console.error("Error adding site:", error);
      toast({
        title: "Error",
        description: "There was a problem adding the site.",
        variant: "destructive",
      });
    } finally {
      setOpen(false);
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
