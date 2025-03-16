export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'upcoming' | 'past';
}

export interface Report {
  id: string;
  title: string;
  date: string;
  pdfUrl: string;
  description: string;
}

export interface Leader {
  name: string;
  position: string;
  imageUrl: string;
  contact: {
    email: string;
    phone: string;
  };
}