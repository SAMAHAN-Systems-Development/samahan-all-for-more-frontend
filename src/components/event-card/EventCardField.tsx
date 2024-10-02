import React from 'react';

interface EventFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const EventCardField: React.FC<EventFieldProps> = ({ title, icon }) => {
  return (
    <div className="text-blue">
      {icon} {title}
    </div>
  );
};
