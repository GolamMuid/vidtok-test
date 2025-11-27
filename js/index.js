fetch("https://dummyjson.com/products?limit=10")
  .then((res) => res.json())
  .then((videos) => {
    const container = document.getElementById("video-list");

    videos.products.forEach((v) => {
      // DummyJSON thumbnails: v.thumbnail
      const videoObj = {
        id: v.id,
        title: v.title,
        thumbnail: v.thumbnail,
        createdAt: "2024-01-01", // or generate date from API if available
      };

      container.appendChild(createVideoCard(videoObj));
    });
  });

function createVideoCard(video) {
  const card = document.createElement("div");

  card.className =
    "cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-2";

  card.onclick = () => {
    window.location.href = `watch.html?id=${video.id}`;
  };

  card.innerHTML = `
    <div class="w-full h-40 overflow-hidden rounded-lg">
      <img src="${video.thumbnail}" 
           alt="${video.title}" 
           class="w-full h-full object-cover">
    </div>

    <div class="mt-3">
      <h3 class="text-md font-semibold text-gray-800 line-clamp-2">
        ${video.title}
      </h3>
      <p class="text-sm text-gray-500 mt-1">
        📅 ${new Date(video.createdAt || Date.now()).toLocaleDateString()}
      </p>
    </div>
  `;

  return card;
}
