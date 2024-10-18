import React from 'react';

type TableHeaderProps = {
  label: string;
};

const DataTableHeader = ({ label }: TableHeaderProps) => {
  return <div className="font-medium">{label}</div>;
};

export default DataTableHeader;
