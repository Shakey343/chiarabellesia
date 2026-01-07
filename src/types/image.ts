export type ImageItem = {
  id: string;
  image: CloudImgObj;
  heightPercent: number;
};

export type CloudImgObj = {
  public_id: string;
  asset_id: string;
  image_url: string;
  secure_url: string;
  asset_folder: string;
  filename: string;
  metadata: {
    date: string;
    text: string;
    title: string;
  };
  tags: string[];
};
