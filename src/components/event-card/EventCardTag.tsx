import React from 'react';

interface EventTagProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const EventCardTag: React.FC<EventTagProps> = ({ title, icon }) => {
  return (
    <div className="rounded-3xl bg-blue text-footer-main text-white inline-flex flex-row items-center justify-start py-1 px-3 gap-2 maxh-8 ">
      <div className="overflow-visible">{icon}</div>
      <div className="truncate">{title}</div>
    </div>
  );
};
