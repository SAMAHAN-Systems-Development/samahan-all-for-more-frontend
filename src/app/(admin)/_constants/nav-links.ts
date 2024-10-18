import { Book, Calendar, LucideProps, MapPin, Settings } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export enum NavLinksLabel {
  EVENTS = 'Events',
  BULLETINS = 'Bulletins',
  LOCATIONS = 'Locations',
  SETTINGS = 'Settings',
}

export enum NavLinks {
  EVENTS = '/admin/events',
  BULLETINS = '/admin/bulletins',
  LOCATIONS = '/admin/locations',
  SETTINGS = '/admin/settings',
}

export type LinkType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  link: string;
};

export const navLinks = [
  {
    icon: Calendar,
    label: NavLinksLabel.EVENTS,
    link: NavLinks.EVENTS,
  },
  {
    icon: Book,
    label: NavLinksLabel.BULLETINS,
    link: NavLinks.BULLETINS,
  },
  {
    icon: MapPin,
    label: NavLinksLabel.LOCATIONS,
    link: NavLinks.LOCATIONS,
  },
  {
    icon: Settings,
    label: NavLinksLabel.SETTINGS,
    link: NavLinks.SETTINGS,
  },
];
