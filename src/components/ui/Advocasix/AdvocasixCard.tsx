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
      <div className={`container mx-auto p-1 sm:p-6 ${isModalOpen ? '' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {advocasixCardData.map((card, index) => (
            <div
              key={index}
              className="relative w-full min-w-[200px] sm:min-w-[250px] aspect-square rounded-3xl overflow-hidden cursor-pointer border-2 border-blue"
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
                <div className="absolute flex items-end bottom-0 h-[100px] bg-blue w-full p-[15px]">
                  <div className="text-white font-semibold text-[20px] sm:text-[25px] uppercase">
                    {card.title}
                  </div>
                </div>
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
