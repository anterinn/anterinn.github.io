document.getElementById('bookingForm').onsubmit = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    alert("Booking berhasil disimpan!"); // Menampilkan pesan sukses
    this.submit(); // Lanjutkan pengiriman form setelah alert
};

const top = document.getElementById('atas');
top.style.color = '#2596be';