import { BrainCircuit, FileOutput, FileText, MoveRight, MoveRightIcon } from "lucide-react";
import { ReactNode } from "react"

 type Step = {
    icon: ReactNode;
    label: string;
    description: string;
   };
   
   const steps: Step[] = [
    {
      icon: <FileText size={64} strokeWidth={1.5}/>,
      label: 'Upload your PDF',
      description: 'Simplify drag and drop your PDF document into our platform to get started.',
    },{
      icon: <BrainCircuit size={64} strokeWidth={1.5}/>,
      label: 'AI Analysis',
      description: 'Our advanced AI processes and analyzes the content of your document instantly.',
    },
    {
      icon: <FileOutput size={64} strokeWidth={1.5}/>,
      label: 'Get your Summary',
      description: 'Recieve clear and concise summary of your document in seconds.',
    },

   ];
export default function HowItWorksSection(){
  

   return <section className="relative overflow-hidden bg-gray-50">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
             <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30">
        <div
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-6xl "
        />
      </div>
         <div className="text-center mb-16">
            <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">How it works</h2>
            <h3 className="font-bold text-3xl max-w-2xl mx-auto">Transform any PDF into an easy-to-digest summary in three simple steps</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
           {steps.map((step, idx) => (
            <div className="relative flex items-stretch" key={idx}>
                <StepItem  {...step} />
                {idx < steps.length -1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <MoveRight size={32} strokeWidth={1} className="text-rose-400">

                  </MoveRight>
                </div>
                )}
            </div> 
           ))}
         </div>
        </div>
    </section>
}
 
function StepItem({icon, label, description}: Step){
  return <div className="relative p-6 rounded-2xl bg-white/5 
  backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors
  groud w-full">
    <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br
        from-rose-500/10 to-transparent group-hover:from-rose-500/20 transition-colors">
          <div className="text-rose-500">{icon}</div> 
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
         <h4 className="text-center font-bold">{label}</h4>
         <p className="text-center text-gray-600 text-sm">{description}</p>
         </div>
    </div>
  
  </div>
}