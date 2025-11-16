'use client'
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";

const schema = z.object({
    file:z
        .instanceof(File,{ message: "Please upload a valid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, "File size should be less than 20MB")
        .refine((file) => file.type.startsWith("application/pdf"), "File must be a PDF"), 

});


const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    //validation
    const validatedFields = schema.safeParse({file});
    
    console.log(validatedFields);

    if(!validatedFields.success){
        console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file");
        return;
    }
    //schema validation 
    //upload file to uploadthing
    //parse the pdf using langchain
    //summarize pdf using ai
    //save the summary to db 
    //redirect to the [id] summary page

}
export default function UploadForm() {
    return  <div className="flex flex-col gap-8 max-w-2xl mx-auto">
     <UploadFormInput onSubmit = {handleSubmit}/>
    </div>

}