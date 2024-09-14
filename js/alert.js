document.getElementById('bookingForm').onsubmit = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    alert("Booking berhasil disimpan!"); // Menampilkan pesan sukses
    this.submit(); // Lanjutkan pengiriman form setelah alert
};