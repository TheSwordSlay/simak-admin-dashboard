import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { getMahasiswa } from "../fetch-function/MahasiswaFunctions";

export const metadata: Metadata = {
    title:
      "Dashboard SIMAK UNSRI",
    description: "Ini adalah dashboard Sistem Akademik UNSRI",
  };

export default async function Mahasiswa() {
    const dataMahasiswa = await getMahasiswa();
    return (
        <DefaultLayout>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                    Email
                  </th>
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    NIM
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Angkatan
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Judul Skripsi
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Dosen
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataMahasiswa.value?.map((mhs: any, key: any) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {mhs.email}
                      </h5>
                      
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{mhs.nim}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{mhs.angkatan}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{mhs.judul_skripsi}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{mhs.dosen.nama}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <p>a</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </DefaultLayout>
    )
}