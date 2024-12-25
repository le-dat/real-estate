"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Property } from "@/types";

interface ContactDialogProps {
  property: Property;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ property, open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Agent</DialogTitle>
          <DialogDescription>
            Get in touch with our agent to learn more about this property.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm font-medium">Property: {property.title}</p>
          <p className="text-sm text-muted-foreground">
            Our agent will contact you shortly with more information about this property.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}