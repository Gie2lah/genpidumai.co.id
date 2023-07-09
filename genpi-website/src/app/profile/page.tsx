import React from "react";
import Button from "../../../components/button/Button";
import Image from "next/image";
import hero from "../../../public/images/Logo-GenPI2.png";
import UnstyledLink from "../../../components/link/UnstyledLink";

export default function ProfilePage() {
  return (
    <>
      <section className="min-h-screen px-[10%] py-[120px]">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row md:flex-row items-center justify-between gap-y-8">
          <div className="sm:max-w-[50%]">
            <h1 className="leading-relaxed">
              Generasi Pesona Indonesia Dumai
              <span className="text-red-700"> (GenPI)</span>
            </h1>
            <p className="mt-3 leading-relaxed">
              GenPI telah melaksanakan berbagai program dan inisiatif untuk
              mempromosikan potensi pariwisata, budaya, dan ekonomi kreatif
              Indonesia.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>
                <UnstyledLink href={"#about"}>Explore GenPI</UnstyledLink>
              </Button>
              <Button>
                <UnstyledLink href={"#contact"}>Contact GenPI</UnstyledLink>
              </Button>
            </div>
          </div>
          <div className="flex sm:max-w-[50%] justify-end">
            <Image
              src={hero}
              alt={"hero"}
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen px-[10%] py-[120px]">
        <div id="about" className="text-center">
          <h4>Tentang</h4>
          <h2>GenPI Dumai</h2>
        </div>
        <div className="max-w-lg mx-auto">
          <ol className="list-decimal text-justify">
            <li>
              Kampanye Pesona Indonesia: GenPI mengajak masyarakat untuk berbagi
              pengalaman dan foto-foto indah dari berbagai destinasi wisata di
              Indonesia melalui kampanye Pesona Indonesia. Melalui penggunaan
              media sosial dan tagar (#PesonaIndonesia), kampanye ini bertujuan
              untuk meningkatkan kesadaran dan minat wisatawan untuk mengunjungi
              Indonesia.
            </li>
            <li>
              GenPI Goes to School: Program ini melibatkan generasi muda dalam
              kegiatan edukasi di sekolah-sekolah. GenPI bekerja sama dengan
              pihak sekolah untuk memberikan informasi tentang pariwisata,
              budaya, dan kreativitas Indonesia melalui presentasi, workshop,
              dan kegiatan interaktif lainnya.
            </li>
            <li>
              Festival Kreativitas: GenPI menyelenggarakan festival kreativitas
              yang melibatkan seniman, desainer, musisi, dan pelaku industri
              kreatif dari berbagai bidang. Festival ini memberikan platform
              bagi mereka untuk memamerkan karya-karya mereka, mengadakan
              pertunjukan seni, dan berbagi inspirasi kepada generasi muda.
            </li>
            <li>
              GenPI Youth Ambassador: GenPI memilih sejumlah pemuda dan pemudi
              Indonesia sebagai Duta GenPI. Mereka memiliki peran penting dalam
              mempromosikan pariwisata, budaya, dan ekonomi kreatif Indonesia
              melalui kegiatan-kegiatan mereka di media sosial, partisipasi
              dalam acara-acara GenPI, serta menjadi suara dan inspirasi bagi
              generasi muda lainnya.
            </li>
            <li>
              GenPI Creative Hub: GenPI mendirikan pusat kreativitas atau
              <q>Creative Hub</q> yang menjadi tempat berkumpulnya para pelaku
              industri kreatif. Creative Hub ini menyediakan ruang kerja,
              fasilitas, dan program pelatihan bagi mereka yang ingin
              mengembangkan bakat dan kreativitas mereka.
            </li>
            <li>
              Program Homestay Desa: GenPI berkolaborasi dengan pemerintah
              daerah dan masyarakat desa untuk mengembangkan program homestay di
              desa-desa wisata. Program ini memberikan kesempatan bagi wisatawan
              untuk tinggal bersama keluarga lokal dan merasakan kehidupan
              sehari-hari serta budaya Indonesia secara lebih mendalam.
            </li>
            <li>
              Webinar dan Workshop: GenPI menyelenggarakan webinar dan workshop
              tentang pariwisata, budaya, dan ekonomi kreatif. Acara ini
              melibatkan ahli, praktisi, dan tokoh inspiratif untuk berbagi
              pengetahuan, pengalaman, dan tips kepada generasi muda yang
              tertarik dalam bidang-bidang tersebut.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
