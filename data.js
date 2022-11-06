// Input data usaha menurut provinsi
var dataUsahaMenurutProvinsi = {
    series: [
        {
            name: 'Ya',
            data: [17.85, 19.89, 20.45, 20.64, 23.98, 18.89, 25.50, 34.64, 26.42, 33.88, 42.60, 32.80, 30.10, 34.13, 30.17, 26.12, 24.17, 17.31, 13.18, 25.79, 23.28, 25.49, 30.57, 25.99, 23.16, 20.70, 21.68, 16.16, 14.68, 12.61, 22.58, 19.20, 16.05, 17.28, 25.92]
        }, 
        {
            name: 'Tidak',
            data: [82.15, 80.11, 79.55, 79.36, 76.02, 81.11, 74.50, 65.36, 73.58, 66.12, 57.40, 67.20, 69.90, 65.87, 69.83, 73.88, 75.83, 82.69, 86.82, 74.21, 76.72, 74.51, 69.43, 74.01, 76.84, 79.30, 78.32, 83.84, 85.32, 87.39, 77.42, 80.80, 83.95, 82.72, 74.08]
        }
    ],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan', 'Bengkulu', 'Lampung', 'Kep. Bangka Belitung', 'Kep. Riau', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'D.I.Yogyakarta', 'Jawa Timur', 'Banten', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat', 'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua', 'Indonesia'],
    },
    yaxis: {
        title: {
            text: 'Persentase'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
    colors:['#EE6C4D', '#3D5A80']
};

// Inisiasi objek ApexChart untuk membuat chart dari data usaha menurut provinsi
var chartUsahaMenurutProvinsi = new ApexCharts(document.querySelector("#bar-chart-usaha-menurut-provinsi"), dataUsahaMenurutProvinsi);

// Melakukan rendering objek agar tertampil pada halaman website
chartUsahaMenurutProvinsi.render();

/** */
// Input data pemilik usaha menurut umur
var dataPemilikUsahaMenurutUmur = {
    series: [{
        data: [6.13, 24.79, 33.07, 24.31, 11.70]
    }],
    chart: {
        type: 'bar',
        height: 120
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['15-24', '25-34', '35-44', '45-54', '>=55'],
    },
    colors: ['#EE6C4D'],
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
};

// Inisiasi objek ApexChart untuk membuat chart dari variabel data yang sudah dibuat yaitu data pemilik usaha menurut umur
var chartPemilikUsahaMenurutUmur = new ApexCharts(document.querySelector("#horizontal-bar-chart-pemilik-menurut-umur"), dataPemilikUsahaMenurutUmur);

// Melakukan rendering objek agar chart tertampil pada halaman website
chartPemilikUsahaMenurutUmur.render();

// Input data barang dan jasa yang dijual
var dataBarangJasaDijual = {
    series: [{
        data: [40.86, 20.71, 10.30, 8.05, 38.40]
    }],
    chart: {
        type: 'bar',
        height: 120
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Makanan, Minuman, dan Bahan Makanan', 'Fashion', 'Kebutuhan Rumah Tangga', 'Kosmetik', 'Barang Lainnya'],
    },
    colors: ['#EE6C4D'],
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
};

// Inisiasi objek ApexChart untuk membuat chart dari variabel data yang sudah dibuat yaitu data barang dan jasa yang dijual
var chartBarangJasaDijual = new ApexCharts(document.querySelector("#horizontal-bar-chart-barang-jasa-dijual"), dataBarangJasaDijual);

// Melakukan rendering objek agar chart tertampil pada halaman website
chartBarangJasaDijual.render();

// Input data usaha menurut perannya
var dataUsahaMenurutPeran = {
    series: [79.91, 13.09, 7.00],
    labels: ['Seller', 'Reseller', 'Dropshipper'],
    chart: {
        type: 'donut',
    },
    stroke: {
        show: false
    },
    responsive: [{
        breakpoint: 1400,
        options: {
            chart: {
                width: '100%'
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        enabled: true,
        formatter: function (val) {
                return val + "%"
        },
    },
    colors:['#3D5A80', '#E0FBFC', '#EE6C4D']
};

// Inisiasi objek ApexChart untuk membuat chart dari variabel data yang sudah dibuat yaitu data usaha menurut peran usahanya
var chartUsahaMenurutPeran = new ApexCharts(document.querySelector("#pie-chart-peran-usaha"), dataUsahaMenurutPeran);

// Melakukan rendering objek agar chart tertampil pada halaman website
chartUsahaMenurutPeran.render();


// Input data usaha menurut jenis pelanggannya
var dataUsahaMenurutJenisPelanggan = {
    series: [71.23, 1.62, 27.15],
    labels: ['Konsumen Akhir', 'Agen/Usaha', 'Gabungan'],
    chart: {
        type: 'donut',
    },
    stroke: {
        show: false
    },
    responsive: [{
        breakpoint: 1400,
        options: {
            chart: {
                width: '100%'
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        enabled: true,
        formatter: function (val) {
                return val + "%"
        },
    },
    colors:['#3D5A80', '#E0FBFC', '#EE6C4D']
};

// Inisiasi objek ApexChart untuk membuat chart dari variabel data yang sudah dibuat yaitu data usaha menurut jenis pelanggannya
var chartUsahaMenurutJenisPelanggan = new ApexCharts(document.querySelector("#pie-chart-jenis-pelanggan"), dataUsahaMenurutJenisPelanggan);

// Melakukan rendering objek agar chart tertampil pada halaman website
chartUsahaMenurutJenisPelanggan.render();