// Menangani perubahan jurusan dan mengubah opsi kelas
document.getElementById('jurusan').addEventListener('change', function() {
    const jurusan = this.value;
    const kelasSelect = document.getElementById('kelas');
    let options = [];

    if (jurusan === 'TPL') {
        options = ['X TPL', 'XI TPL', 'XII TPL A', 'XII TPL B'];
    } else if (jurusan === 'TP') {
        options = ['X TP A', 'X TP B', 'XI TP A', 'XI TP B', 'XII TP A', 'XII TP B'];
    } else if (jurusan === 'TKR') {
        options = ['X TKR A', 'X TKR B', 'XI TKR A', 'XI TKR B', 'XI TKR C', 'XII TKR A', 'XII TKR B', 'XII TKR C'];
    } else if (jurusan === 'DKV') {
        options = ['X DKV A', 'X DKV B', 'XI DKV A', 'XI DKV B', 'XII DKV A', 'XII DKV B'];
    } else if (jurusan === 'TKJ') {
        options = ['X TKJ A', 'X TKJ B', 'XI TKJ A', 'XI TKJ B', 'XII TKJ A', 'XII TKJ B'];
    } else if (jurusan === 'RPL') {
        options = ['X RPL A', 'X RPL B', 'XI RPL A', 'XI RPL B', 'XII RPL A', 'XII RPL B'];
    } else if (jurusan === 'DPB') {
        options = ['X DPB', 'XI DPB', 'XII DPB'];
    } else if (jurusan === 'AK') {
        options = ['X AK A', 'X AK B', 'XI AK A', 'XI AK B', 'XII AK A', 'XII AK B'];
    }

    // Kosongkan kelas yang ada sebelumnya dan tambahkan opsi baru
    kelasSelect.innerHTML = '<option value="">Pilih Kelas</option>';
    options.forEach(function(kelas) {
        const option = document.createElement('option');
        option.value = kelas;
        option.textContent = kelas;
        kelasSelect.appendChild(option);
    });
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const quantity = document.getElementById('quantity').value;
    const notes = document.getElementById('notes').value;
    const phoneNumber = document.getElementById('phoneNumber').value; // Nomor yang dipilih
    const kelas = document.getElementById('kelas').value; // Kelas yang dipilih

    // Buat pesan
    const message = `Halo, saya ingin memesan produk: MaraMirie!\n\n` +
                    `Nama Lengkap: ${name}\n` +
                    `No Whatsapp: ${whatsapp}\n` +
                    `Jumlah: ${quantity} pcs\n` +
                    `Catatan Tambahan: ${notes || "Tidak ada"}\n` +
                    `Kelas: ${kelas || "Tidak diisi"}`;

    // Encode URL dengan benar
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Periksa apakah URL sudah benar sebelum membuka WhatsApp
    if (whatsappUrl) {
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Terjadi kesalahan saat menyiapkan pesan. Coba lagi.');
    }
});