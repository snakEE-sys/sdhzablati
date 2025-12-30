export const getCloudinaryPath = (
    type: "interventions" | "posts" | "gallery",
    id: string
  ) => {
    const year = new Date().getFullYear();
    if (type === "interventions") return `sdh/interventions/${year}/${id}`;
    if (type === "posts") return `sdh/posts/${id}`;
    return `sdh/gallery/${id}`;
  }