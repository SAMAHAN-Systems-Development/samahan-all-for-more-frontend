import Image from 'next/image';
import React from 'react';
import BannerGradient from '../banner/banner-gradient/BannerGradient';
import { BannerImage } from '../banner/banner-image/BannerImage';

export interface Props {
  label?: string;
}

export const FooterLink: React.FC<Props> = ({ label }: Props) => {
  return (
    <a className=" text-footer-main text-white">
      <div></div>
      <p>{label}</p>
    </a>
  );
};
