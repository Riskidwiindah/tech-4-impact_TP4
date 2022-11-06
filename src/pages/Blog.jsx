import { useState } from 'react'
import Navbar from '../components/Navbar'
import './BlogStyle.css'

function Blog() {
    const [release, setRelease] = useState(["10 Agustus 2022 / Ilmu Alam & Tekno", "12 Agustus 2022 / Ilmu Sosbud", "14 Agustus 2022 / Ilmu Sosbud"])
    const [title, setTitle] = useState([
        "KKN Tematik UPI Kelompok 115: Sosialisasi, Wawancara, dan Pembuatan Papan Peringatan Mengenai Illegal Fishing di Desa Bagolo",
        "KKN Tematik UPI 2022 Kelompok 115: Pendampingan Pengolahan Ikan Asin di Desa Bagolo",
        "Pengolahan Sampah Plastik Menjadi Sebuah Karya Ecobrik yang Bermanfaat",
        "Pembaharuan Infrastruktur Penunjang Berupa Papan Informasi di daerah Wisata Pantai Karapyak Pangandaran",
        "Pantai Karapyak: Pantai cantik yang Tertutup Sampah Plastik"
    ])

    return(
        <>
        <Navbar/>
        <div id="blog container-fluid">
            <div className="blog-heading">
               <span>My Recent Posts</span> 
               <h3>My Blog</h3>
            </div>

            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/images/kkn1.jpg" alt="foto blog 1" />
                    </div>
                    <div className="blog-text">
                        <span>{release[0]}</span>
                        <a href="https://www.kompasiana.com/novitaayupramudita0783/62f318d7a51c6f6d5c2c8703/kkn-tematik-upi-kelompok-115-sosialisasi-wawancara-dan-pembuatan-papan-peringatan-mengenai-illegal-fishing-di-desa-bagolo" className="blog-title">
                            {title[0]}
                        </a>
                        <p>
                            Berdasarkan hasil di lapangan, siswa dan siswi SMP Negeri 3 Kalipucang masih belum mengetahui apa itu illegal fishing dan dampaknya bagi eksosistem laut
                        </p>
                        <a href="https://www.kompasiana.com/novitaayupramudita0783/62f318d7a51c6f6d5c2c8703/kkn-tematik-upi-kelompok-115-sosialisasi-wawancara-dan-pembuatan-papan-peringatan-mengenai-illegal-fishing-di-desa-bagolo">Read More</a>
                    </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/images/kkn2.jpeg" alt="foto blog 2" />
                    </div>
                    <div className="blog-text">
                        <span>{release[0]}</span>
                        <a href="https://www.kompasiana.com/emasuryanti2273/62f33a84a51c6f347a0ff5d4/kkn-tematik-upi-2022-kelompok-115-pendampingan-pengolahan-ikan-asin-di-desa-bagolo" className="blog-title">
                            {title[1]}
                        </a>
                        <p>
                            Menurut salah satu nelayan Bagolo yaitu Pak Dudu (48) kualitas hasil tangkapan yang berasal dari Pantai Palatar Agung dan Nusakambangan jauh lebih baik daripada hasil tangkapan di Karapyak dan Pangandaran
                        </p>
                        <a href="https://www.kompasiana.com/emasuryanti2273/62f33a84a51c6f347a0ff5d4/kkn-tematik-upi-2022-kelompok-115-pendampingan-pengolahan-ikan-asin-di-desa-bagolo">Read More</a>
                    </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/images/kkn3.jpeg" alt="foto blog 3" />
                    </div>
                    <div className="blog-text">
                        <span>{release[0]}</span>
                        <a href="https://www.kompasiana.com/dilasepvi/62f3afa4a51c6f519d1f0952/mahasiswa-kkn-tematik-115-upi-bersama-peserta-didik-sd-n-1-bagolo-pengolahan-sampah-plastik-menjadi-sebuah-karya-ecobrick-yang-bermanfaat" className="blog-title">
                            {title[2]}
                        </a>
                        <p>
                            Berdasarkan hasil wawancara dengan narasumber kami Bapak Dodo beliau
                            merupakan petugas kebersihan di Pantai Karapyak, 
                            pengelolaan sampah di Pantai Karapyak telah dilaksanakan
                            dengan tepat dengan adanya petugas kebersihan yang setiap
                            hari membersihkan sampah yang berada di Pantai Karapyak.
                        </p>
                        <a href="https://www.kompasiana.com/dilasepvi/62f3afa4a51c6f519d1f0952/mahasiswa-kkn-tematik-115-upi-bersama-peserta-didik-sd-n-1-bagolo-pengolahan-sampah-plastik-menjadi-sebuah-karya-ecobrick-yang-bermanfaat">Read More</a>
                    </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/images/kkn4.jpeg" alt="foto blog 4" />
                    </div>
                    <div className="blog-text">
                        <span>{release[1]}</span>
                        <a href="https://www.kompasiana.com/riskidwi4840/62f52b80a51c6f2c822fba73/pembaharuan-infrastruktur-penunjang-berupa-papan-informasi-di-dearah-wisata-pantai-karapyak-pangandaran" className="blog-title">
                            {title[3]}
                        </a>
                        <p>
                            Adanya papan informasi merupakan salah satu fasilitas penting, namun sangat disayangkan di pantai Karapyak kurang memadai akan adanya hal itu.
                        </p>
                        <a href="https://www.kompasiana.com/riskidwi4840/62f52b80a51c6f2c822fba73/pembaharuan-infrastruktur-penunjang-berupa-papan-informasi-di-dearah-wisata-pantai-karapyak-pangandaran">Read More</a>
                    </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="/images/kkn5.jpeg" alt="foto blog 5" />
                    </div>
                    <div className="blog-text">
                        <span>{release[2]}</span>
                        <a href="https://www.kompasiana.com/lathifaurba1073/62f90ae23555e419044b1fc2/pantai-karapyak-pantai-cantik-yang-tertutup-sampah-plastik" className="blog-title">
                            {title[4]}
                        </a>
                        <p>
                            Pengelolaan Sampah Plastik Terapung untuk Kelestarian Laut merupakan indikator yang berfokus pada bagaimana cara mengolah sampah plastik di sekitar Pantai Karapyak di Desa Bagolo ini menjadi sesuatu yang bermanfaat bagi masyarakat
                        </p>
                        <a href="https://www.kompasiana.com/lathifaurba1073/62f90ae23555e419044b1fc2/pantai-karapyak-pantai-cantik-yang-tertutup-sampah-plastik">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog