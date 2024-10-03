import React from 'react';

interface EventTagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const EventCardTag: React.FC<EventTagProps> = ({ title, icon }) => {
  return (
    <div className="rounded-3xl bg-blue text-footer-main text-white flex items-center justify-center py-1 px-2 gap-1">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};
