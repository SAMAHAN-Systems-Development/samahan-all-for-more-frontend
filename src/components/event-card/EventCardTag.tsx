import React from 'react';

interface EventTagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const EventCardTag: React.FC<EventTagProps> = ({ title, icon }) => {
  return (
    <div className=" bg-blue text-footer-main text-white ">
      {icon} {title}
    </div>
  );
};
