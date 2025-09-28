// CV configuration - you can easily update this when you upload a new CV
export const CV_CONFIG = {
  // Main CV file
  filename: 'resume.pdf', // Change this to match your actual filename
  
  // Alternative: if you want to maintain multiple versions
  versions: {
    latest: 'resume-2024.pdf',
    detailed: 'resume-detailed.pdf',
    // Add more versions as needed
  }
};

// Helper function to get CV URL
export const getCVUrl = (version = 'latest') => {
  if (version === 'latest') {
    return `/${CV_CONFIG.filename}`;
  }
  return `/${CV_CONFIG.versions[version] || CV_CONFIG.filename}`;
};