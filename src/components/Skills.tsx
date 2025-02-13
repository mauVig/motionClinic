import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '@/data/skillsData';

const Skills: React.FC = () => {
  const [viewStates, setViewStates] = useState<{ [key: string]: boolean }>({});
  const [flashStates, setFlashStates] = useState<{ [key: string]: boolean }>({});
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const toggleView = (skillTitle: string) => {
    setViewStates(prev => ({
      ...prev,
      [skillTitle]: !prev[skillTitle]
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const title = entry.target.getAttribute('data-title');
          if (!title) return;

          if (entry.isIntersecting) {
            setFlashStates(prev => ({ ...prev, [title]: true }));
            
            setTimeout(() => {
              setFlashStates(prev => ({ ...prev, [title]: false }));
            }, 1400);
          }
        });
      },
      {
        root: null,
        rootMargin: '-49% 0px -49% 0px',
        threshold: [0.5]
      }
    );

    titleRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-backBlack text-[#666666] px-6 pb-36">
      <div className='max-w-screen-2xl mx-auto'>
        <h2 className='text-7xl mb-32 pt-4 text-violet'>Skills</h2>
        {skillsData.map((skill, i) => (
          <div 
            className={`mt-8 hover:cursor-pointer pt-4 group ${
              i !== 0 ? 'border-t-[.5px] border-[#666666]' : ''
            }`} 
            key={i}
          >
            <div className='flex justify-between items-center' onClick={() => toggleView(skill.title)}>
              <h3
                ref={el => titleRefs.current[i] = el}
                data-title={skill.title}
                className={`
                  text-2xl 
                  font-bold 
                  cursor-pointer 
                  group-hover:text-grey 
                  transition-colors
                  ${flashStates[skill.title] ? 'text-[#e8e8e8]' : ''}
                  ${viewStates[skill.title] ? 'text-[#e8e8e8]' : 'text-[#666666] hover:text-purple'}
                `}
              >
                {skill.title}
              </h3>
              <div className={`
                relative p-6 rounded-full border-2 transition-all duration-500 h-4 w-4
                ${flashStates[skill.title] ? 'border-[#e8e8e8]' : ''}
                ${viewStates[skill.title] ? 'border-[#e8e8e8]' : 'border-[#666666] group-hover:border-grey'}
              `}>
                <div
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-[2px]
                    -translate-y-1/2
                    w-[10px]
                    h-[2px]
                    transition-all
                    duration-500
                    origin-[100%_50%]
                    ${flashStates[skill.title] ? 'bg-[#e8e8e8]' : ''}
                    ${viewStates[skill.title] 
                      ? 'rotate-45 bg-[#e8e8e8] opacity-70' 
                      : '-rotate-45 bg-[#666666] group-hover:bg-grey'
                    }
                  `}
                />
                <div
                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-[8px]
                    -translate-y-1/2
                    w-[12px]
                    h-[2px]
                    transition-all
                    duration-500
                    origin-[0%_50%]
                    ${flashStates[skill.title] ? 'bg-[#e8e8e8]' : ''}
                    ${viewStates[skill.title] 
                      ? '-rotate-45 bg-[#e8e8e8] -translate-x-2 opacity-70' 
                      : 'rotate-45 bg-[#666666] group-hover:bg-grey'
                    }
                  `}
                />
              </div>
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