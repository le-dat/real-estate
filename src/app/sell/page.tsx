"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function SellPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">List Your Property</h1>
          <p className="text-muted-foreground">
            Fill out the form below to list your property on our platform
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Property Title</label>
              <Input required placeholder="Enter property title" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Property Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Price</label>
                <Input type="number" required placeholder="Enter price" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Area (sq ft)</label>
                <Input type="number" required placeholder="Enter area" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                <Input type="number" required placeholder="No. of bedrooms" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Bathrooms</label>
                <Input type="number" required placeholder="No. of bathrooms" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Garage Spaces</label>
                <Input type="number" required placeholder="No. of spaces" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Input required placeholder="Enter property location" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea required placeholder="Describe your property" className="h-32" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Property Images</label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop your images here, or click to select files
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full">
              <Building2 className="w-4 h-4 mr-2" /> List Property
            </Button>
          </form>
        </Card>

        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Listing Submitted Successfully</DialogTitle>
              <DialogDescription>
                Your property has been submitted for review. We&apos;ll notify you once it&apos;s live on our platform.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setShowSuccess(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}