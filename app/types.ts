export type BlogPostContent = {
    id: string;
    fields: {
      id: any;
      'blog-content': string;
      published: string;
      image: Array<{
        id: string;
        width: number;
        height: number;
        url: string;
        filename: string;
        size: number;
        type: string;
        thumbnails: {
          small: { url: string; width: number; height: number };
          large: { url: string; width: number; height: number };
          full: { url: string; width: number; height: number };
        };
      }>;
      name: string;
    };
};

export type BlogPost = {
  id: string;
  fields: {
    'blog-content': string;
    published: string;
    image: Array<{
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
      thumbnails: {
        small: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
        full: { url: string; width: number; height: number };
      };
    }>;
    name: string;
  };
};
  
export type PriceListItem = {
  id: string;
  fields: {
    TreatmentName: string;
    Category: string;
    Price: string;
    Retouch: string;
    Duration: number; // Add the Duration property here
    BookingAvailability: string;
  };
};

export type GalleryImage = {
  id: string;
  fields: {
    Name: string;
    Category: string;
    image: Array<{
      Name: string;
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
      imageField: string;
      thumbnails: {
        small: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
        full: { url: string; width: number; height: number };
      };
    }>;
  };
};