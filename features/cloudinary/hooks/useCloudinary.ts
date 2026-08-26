import { tryCatch } from "@/lib/utils/try-catch";

export function useCloudinaryUpload() {
  async function uploadImages(files: File[], folder: string) {
    const { data: signRes, error: signResError } = await tryCatch(
      fetch("/api/cloudinary/sign", {
        method: "POST",
        body: JSON.stringify({ folder }),
      }),
    );

    if (signResError) return signResError.message;
    if (!signRes.ok) return new Error("Failed to get upload signature");

    const { data: credentials, error: credentialsError } = await tryCatch(
      signRes.json(),
    );
    if (credentialsError) return credentialsError.message;

    const { signature, timestamp, cloudName, apiKey } = credentials;

    const { data: results, error: uploadError } = await tryCatch(
      Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("signature", signature);
          formData.append("timestamp", timestamp);
          formData.append("api_key", apiKey);
          formData.append("folder", folder);

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            { method: "POST", body: formData },
          );

          if (!res.ok) throw new Error(`Upload failed for ${file.name}`);

          return res.json();
        }),
      ),
    );

    if (uploadError) return uploadError.message;

    return results.map((r: { public_id: string }) => r.public_id);
  }
  return { uploadImages };
}
