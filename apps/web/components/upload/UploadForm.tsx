'use client'
import UploadFormInput from "@/components/upload/upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Please upload a valid file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, "File size should be less than 20MB")
    .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF"),

});

export default function UploadForm() {
  const router = useRouter();

  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: (res) => {
      console.log("uploaded successfully!", res);
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading:", err);

      toast("Error occurred while uploading file", {
        description: err?.message ?? "Unknown upload error"
      });
    },
    onUploadBegin: (fileName) => {
      console.log("upload has begun for", fileName);
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

    toast("Uploading & Summarizing PDF...", {
      description: "Your file is being uploaded and summarized by AI. This may take a moment ✨",
    });

    const response = await startUpload([file]);
    if (!response) {
      toast("Upload failed", {
        description: "Please select a different file",
      });
      return;
    }

    // Get the summaryId from the server response and redirect
    const summaryId = response[0]?.serverData?.summaryId;
    if (summaryId) {
      toast("Summary ready! ✨", {
        description: "Redirecting to your AI-generated summary...",
      });
      router.push(`/summaries/${summaryId}`);
    } else {
      toast("Upload complete!", {
        description: "Check your dashboard for the summary.",
      });
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );

}