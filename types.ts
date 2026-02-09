import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}