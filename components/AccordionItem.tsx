import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
const AccordionItem: React.FC<AccordionItemProps> = ({open,toggle,title,description}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<string>('0px');

    useEffect(() => {
        if (contentRef.current) {
        setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [open]);
  return (
        <div
        className={ `py-3 px-5 rounded-[25px] cursor-pointer accordion ${open ? 'bg-[#FF7E61]' : 'bg-[#f5f5f5]'}`}
            onClick={toggle}
        >
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-color text-[25px]">{title}</h3>
            <div
                className="cursor-pointer bg-[#fff] text-[25px] border border-[#1A1A23] p-2 rounded-full"
            >
                {open ? (
                <Image
                    src="/icons/minus.svg"
                    alt="minus icon"
                    width={25}
                    height={25}
                    className="bg-transparent"
                />
                ) : (
                <Image
                    src="/icons/plus.svg"
                    alt="plus icon"
                    width={25}
                    height={25}
                    className="bg-transparent"
                />
                )}
            </div>
        </div>
        <div
            ref={contentRef}
            className="transition-[max-height] duration-500 ease overflow-hidden"
            style={{ maxHeight: maxHeight }}
        >
        <div className="p-4">
            <p className="text-sm pr-16 pt-14">{description}</p>
        </div>
        </div>
    </div>
  )
}

export default AccordionItem