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
    <section className="bg-backBlack text-grey px-6 py-36">
      {skillsData.map((skill) => (
        <div className="mt-16" key={skill.title}>
          <div className='flex justify-between items-center' onClick={() => toggleView(skill.title)}>
            <h3 
              className="text-2xl font-bold cursor-pointer hover:text-purple transition-colors" >
              {skill.title}
            </h3>
            <div className='p-6 rounded-full border-2 border-grey h-4 w-4' />
          </div>
          <div 
            className={`
              transition-all duration-1000 ease-in-out
              overflow-hidden
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
    </section>
  );
};

export default Skills;