import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getDosen } from "./fetch-function/DosenFunctions";
import DosenButton from "@/components/Dosen/DosenButton";
import DosenAdd from "@/components/Dosen/DosenAdd";

export const metadata: Metadata = {
  title: "Dashboard SIMAK UNSRI",
  description: "Ini adalah dashboard Sistem Akademik UNSRI",
};

export default async function Home() {
  const dataDosen = await getDosen();
  return (
    <>
      <DefaultLayout>
        {/* <ECommerce /> */}
        <div className="mb-5 flex">
        <DosenAdd></DosenAdd>

        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                    Nama
                  </th>
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    NIP
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Email
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataDosen.data?.map((dosen: any, key: any) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {dosen.nama}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{dosen.NIP}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{dosen.Email}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <DosenButton data={dosen}></DosenButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
