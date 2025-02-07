import React, { useState } from 'react';
import { skillsData } from '@/data/skillsData';

const Skills: React.FC = () => {
  const [viewStates, setViewStates] = useState<{ [key: string]: boolean }>({});

  const toggleView = (skillTitle: string) => {
    setViewStates(prev => ({
      ...prev,
      [skillTitle]: !prev[skillTitle]
    }));
  };

  return (
    <section className="bg-backBlack text-[#666666] px-6 pb-36">
     <div className='max-w-screen-2xl mx-auto'>
      <h2 className='text-7xl mb-32 pt-4 text-violet'>Skills</h2>
       {skillsData.map((skill, i) => (
         <div className={`mt-8 hover:cursor-pointer pt-4  ${ i !== 0 ? 'border-t-[.5px] border-[#666666]': ''}`} key={i}>
           <div className='flex justify-between items-center' onClick={() => toggleView(skill.title)}>
             <h3 
               className="text-2xl font-bold cursor-pointer hover:text-purple transition-colors" >
               {skill.title}
             </h3>
             <div className='p-6 rounded-full border-2 border-[#666666] h-4 w-4' />
           </div>
           <div 
             className={`
               transition-all duration-1000 ease-in-out
               overflow-hidden text-grey
               ${viewStates[skill.title] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
             `}
           >
             <p
               className="mt-4"
               dangerouslySetInnerHTML={{ __html: skill.description }}
             />
           </div>
         </div>
       ))}
     </div>
    </section>
  );
};

export default Skills;