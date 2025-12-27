
export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  author: string;
  views: string;
  date: string;
  aspectRatio: 'portrait' | 'landscape';
}

export enum ContentType {
  UPLOAD = 'UPLOAD',
  LINK = 'LINK'
}
