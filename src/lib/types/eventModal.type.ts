export type EventCardModal = {
  description: string;
  end_time: string;
  location: {
    name: string;
  };
  name: string;
  onClose: () => void;
  posters: {
    image_url: string;
  };
  registration_link: string;
  start_time: string;
};
