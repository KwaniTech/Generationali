'use client'
import UploadFormInput from "@/components/upload/upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import Error from "next/error";
import { toast } from "sonner"
import { start } from "repl";
import { z } from "zod";

const schema = z.object({
    file:z
        .instanceof(File,{ message: "Please upload a valid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, "File size should be less than 20MB")
        .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF"), 

});

export default function UploadForm() { 
    
    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading:", err);
      
      toast("Error occurred while uploading file", {
        description: err?.message ?? "Unknown upload error"
      });
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });
   
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   const formData = new FormData(e.currentTarget);
   const file = formData.get('file');

   if (!file || !(file instanceof File)) {
     toast("Invalid file", { description: "Please select a valid file" });
     return;
   }

   const validatedFields = schema.safeParse({ file });
   if (!validatedFields.success) {
     const errorMessage =
       validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file";
      toast("Invalid file", {
      description: errorMessage,
     });
     return;
   }

     toast("Uploading PDF...", {
      description: "Your file is being uploaded. This may take a moment✨",
    });
    //upload file to uploadthing
     const response = await startUpload([file]);
     if(!response){
        toast("Upload failed", {
            description: "Please select a different file",
        });
        return; 
     }

    toast("Processing PDF...", {
      description: "Your our AI is processing your file. This may take a moment✨",
    });
    //parse the pdf using langchain
    //summarize pdf using ai
    //save the summary to db 
    //redirect to the [id] summary page
};

     return  (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
    <UploadFormInput onSubmit = {handleSubmit}/>
    </div>
     );

    }