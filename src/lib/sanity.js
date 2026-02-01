// src/lib/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true, // true untuk kecepatan maksimal (gratis)
  apiVersion: "2024-01-31", // gunakan tanggal hari ini atau versi terbaru
});