// Static CV served from public folder
export async function getLatestCV() {
  // Return the static CV path - Vite serves files from public folder at root
  return "/cv.pdf"; // Change this to match your actual CV filename
}
