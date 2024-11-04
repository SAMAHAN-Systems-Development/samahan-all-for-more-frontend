import React, { useState } from 'react';
import Image from 'next/image';

import AdvocasixModal from '@/components/ui/Advocasix Modal/AdvocasixModal';
import advocasixCardData from '@/data/advocasixCardData.json'; // JSON for card display
import advocasixData from '@/data/advocasixData.json'; // JSON for modal data

interface AdvocasixModalProps {
  content: string;
  image: string;
  title: string;
}

interface AdvocasixCardProps {
  data: { image: string; title: string }[];
}

const AdvocasixCard: React.FC<AdvocasixCardProps> = ({ data: _data }) => {
  const [selectedItem, setSelectedItem] = useState<AdvocasixModalProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (title: string) => {
    const item = advocasixData.find((data) => data.title === title);
    if (item) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`container mx-auto p-6 ${isModalOpen ? 'filter blur-sm' : ''}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {advocasixCardData.map((card, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-3xl overflow-hidden cursor-pointer border-2 border-blue"
              role="button"
              tabIndex={0}
              onClick={() => handleOpenModal(card.title)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleOpenModal(card.title);
                }
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  alt={card.title}
                  src={`/images/advocasix-card-pictures/${card.image}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-blue bg-opacity-30" />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-20 lg:h-32 bg-blue flex items-end p-2 sm:p-4 md:p-4 lg:p-6">
                <strong className="text-white font-inter font-main uppercase sm:text-main md:text-[20px] lg:text-[30px]">
                  {card.title}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedItem && (
        <AdvocasixModal
          title={selectedItem.title}
          content={selectedItem.content}
          image={selectedItem.image}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AdvocasixCard;
