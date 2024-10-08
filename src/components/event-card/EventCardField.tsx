import React from 'react';

interface EventFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const EventCardField: React.FC<EventFieldProps> = ({ title, icon }) => {
  return (
    <div className="text-blue inline-flex flex-row gap-2 items-center">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};
