// Data project disimpan dalam file JS
const projects = [
    {
        id: 1,
        title: "Project A",
        description: "Deskripsi singkat project A. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ducimus temporibus beatae? Iste asperiores totam quo unde distinctio dignissimos cupiditate? Velit temporibus corporis placeat ipsam pariatur commodi, facere labore. Tempore, aspernatur! Nam sunt omnis laudantium qui voluptatem repellendus, porro atque.",
        thumbnail: "assets/img/project1/thumbnail/project1-thumbnail.png",
        images: [
            "assets/img/project1/images/project1-a.png",
            "assets/img/project1/images/project1-b.png",
            "assets/img/project1/images/project1-c.png"
        ],
        price: 150000, // Harga jual
        originalPrice: 200000, // Harga awal
        downloadUrl: "https://example.com/download/projectA.zip"
    },
    {
        id: 2,
        title: "Project B",
        description: "Deskripsi singkat project B.",
        thumbnail: "projectB-thumbnail.jpg",
        images: [
            "projectB-1.jpg",
            "projectB-2.jpg"
        ],
        price: 250000, // Harga jual
        originalPrice: 300000, // Harga awal
        downloadUrl: "https://example.com/download/projectB.zip"
    }
];


// Menampilkan project cards di halaman index
const projectCardsContainer = document.getElementById('project-cards');
if (projectCardsContainer) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card bg-gray-800 text-white rounded-lg p-4 m-2 w-64 text-center';

        card.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-40 object-cover rounded">
            <h2 class="text-xl font-semibold mt-4">${project.title}</h2>
            <p class="text-sm mt-2">${project.description}</p>
            <button class="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded" onclick="viewDetail(${project.id})">View Detail</button>
        `;
        
        projectCardsContainer.appendChild(card);
    });
}

// Fungsi untuk navigasi ke halaman detail
function viewDetail(id) {
    window.location.href = `detail.html?id=${id}`;
}


// Menampilkan detail project di halaman detail
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

if (projectId) {
    const project = projects.find(p => p.id == projectId);
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description; 

        // Menampilkan harga dan diskon
        const discount = ((project.originalPrice - project.price) / project.originalPrice) * 100;
        document.getElementById('project-price').textContent = `Price: Rp${project.price.toLocaleString()} (Original: Rp${project.originalPrice.toLocaleString()}) | Discount: ${discount.toFixed(2)}%`;

        // Menampilkan gambar-gambar detail
        const imagesContainer = document.getElementById('project-details');
        project.images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `${image}`;
            imgElement.className = 'w-full rounded';
            imagesContainer.appendChild(imgElement);
        });

        // Menampilkan thumbnail
        const thumbnailElement = document.getElementById('project-thumbnail');
        thumbnailElement.src = project.thumbnail;

        // Menambahkan link download
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = project.downloadUrl;
    }
}
