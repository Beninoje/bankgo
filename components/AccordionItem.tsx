import React from 'react'
const AccordionItem: React.FC<AccordionItemProps> = ({open,toggle,title,description}) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggle}>
        <h3>{title}</h3>
        <button>{open ? '-' : '+'}</button>
      </div>
      {open && <div className="accordion-body"><p>{description}</p></div>}
    </div>
  )
}

export default AccordionItem