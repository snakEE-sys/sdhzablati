import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUDINARY_NAME,
  secure: true,
});

export const uploadImage = async (imagePath: string, asset_folder: string) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      asset_folder: asset_folder,
    });
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};
export const getGalleryCount = async () => {
  try {
    const { folders } = await cloudinary.api.root_folders();
    return folders.length;
  } catch (error) {
    console.error("Error counting the gallery", error);
  }
};
export const getImagesCount = async () => {
  try {
    const images = await cloudinary.api.resources();
    return images.resources.length;
  } catch (error) {
    console.error("Error counting images", error);
  }
};
export const getAllImages = async () => {
  try {
    //Get all folders
    const { folders } = await cloudinary.api.root_folders();

    const foldersWithImages = await Promise.all(
      folders.map(
        async (folder: { name: string; path: string; external_id: string }) => {
          const result = await cloudinary.api.resources_by_asset_folder(
            folder.name
          );

          return {
            folder: folder.name,
            images: result.resources,
          };
        }
      )
    );
    return foldersWithImages;
  } catch (error) {
    console.error("Error fetching images from cloudinary", error);
  }
};
