'use client';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { HiOutlinePlay } from 'react-icons/hi';
import { PiPlayCircleFill } from 'react-icons/pi';

interface AccordionProps {
  content: React.ReactNode;
  title: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAccordion();
    }
  };

  return (
    <div
      style={{
        ...styles.accordion,
        ...(isHovered && styles.accordionHover),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={styles.accordionHeader}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <h3>{title}</h3>
        <span
          style={{
            ...styles.iconButton,
            ...(isOpen && styles.iconOpen),
          }}
        >
          {isOpen ? (
            <PiPlayCircleFill color="blue" size={32} />
          ) : (
            <HiOutlinePlay color="blue" size={32} />
          )}
        </span>
      </div>
      <section>
        {isOpen && <article style={styles.accordionContent}>{content}</article>}
      </section>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  accordion: {
    padding: '5px 10px 5px 25px',
    border: '2px solid #0923BA',
    borderRadius: '40px',
    transition: 'background-color 0.3s ease',
  },
  accordionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '40px',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '21.78px',
    color: '#0923BA',
  },
  iconButton: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  iconOpen: {
    transform: 'rotate(90deg)',
  },
  accordionContent: {
    color: '#0923BA',
    borderRadius: '40px',
    padding: '0px 55px 15px 10px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '18px',
    gap: '25px',
  },
  accordionHover: {
    backgroundColor: '#f7f6f6',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '21.78px',
    color: '#0923BA',
  },
};

export default Accordion;
