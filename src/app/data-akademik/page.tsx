import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { getDataAkademik } from "../fetch-function/DataAkademikFunctions";
import DataAkademikAdd from "@/components/DataAkademik/DataAkademikAdd";
import DataAkademikButton from "@/components/DataAkademik/DataAkademikButton";

export const metadata: Metadata = {
  title: "Dashboard SIMAK UNSRI",
  description: "Ini adalah dashboard Sistem Akademik UNSRI",
};

export default async function DataAkademik() {
  const dataAkademik = await getDataAkademik();
  return (
    <DefaultLayout>
        <div className="flex mb-5">
            <DataAkademikAdd></DataAkademikAdd>
        </div>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  NIM
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Nama
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Alamat
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Tempat Lahir
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Tanggal Lahir
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Jenis Kelamin
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Kewarganegaraan
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Golongan Darah
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  No. Telp Rumah
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Agama
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Status Perkawinan
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataAkademik.data?.map((mhs: any, key: any) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {mhs.mahasiswa.nim}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">{mhs.nama}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">{mhs.alamat}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.tempat_lahir}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.tanggal_lahir.substring(0, 10)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.jenis_kelamin}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.kewarganegaraan}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.golongan_darah}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.no_telp_rumah}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">{mhs.agama}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {mhs.status_perkawinan}
                    </p>
                  </td>

                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <DataAkademikButton dataAkademik={mhs}></DataAkademikButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}
