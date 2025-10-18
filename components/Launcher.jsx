"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const Launcher = ({ open, onClose }) => {
  const [Submit, setSubmit] = useState(false);
  const [handle, sethandle] = useState({
    name: "",
    lastname: "",
    email: "",
    gender: "",
    message: "",
  });

  const handledata = (event) => {
    const { name, value } = event.target;
    sethandle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const data = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted", handle);

    toast.success("Form submitted successfully!", {
      style: {
        backgroundColor: "#9ca3af",
        color: "black",
      },
    });

    sethandle({
      name: "",
      lastname: "",
      email: "",
      gender: "",
      message: "",
    });

    setSubmit(true);
    setTimeout(() => setSubmit(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Form</DialogTitle>
          <DialogDescription>
            Fill out the details below and we’ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={data}>
          <div className="grid gap-4 font-sans">
            <div className="grid gap-3">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={handle.name}
                onChange={handledata}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                value={handle.lastname}
                onChange={handledata}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={handle.email}
                onChange={handledata}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={handle.gender}
                onChange={handledata}
                className="w-full p-2 rounded-md border border-gray-300 bg-white text-gray-900 
                           dark:bg-gray-800 dark:text-white dark:border-gray-600 
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                name="message"
                value={handle.message}
                onChange={handledata}
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              {/* Close button optional, but must have child */}
              <Button type="button" variant="outline" onClick={onClose}>
                Close
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className={`font-sans px-4 py-2 rounded-md text-white transition-all duration-300 ${
                Submit ? "bg-red-600" : "bg-gray-600"
              }`}
            >
              {Submit ? "Submitted ✅" : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Launcher;
