"use client";

import { addMahasiswa } from "@/app/fetch-function/MahasiswaFunctions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export default function MahasiswaAdd(dosen: any) {
  const addModal = useRef<any>(null);
  const errModal = useRef<any>(null);
  const [state, formAction] = useFormState(addMahasiswa, {
    message: { text: undefined, error: undefined },
  });
  useEffect(() => {
    if (state.message.error != undefined) {
      errModal.current?.showModal();
    }
    if (state.message.text === "Mahasiswa Register Success") {
      addModal.current?.close();
    }
  }, [state]);
  return (
    <>
      <button
        className="btn btn-success ml-auto"
        onClick={() => {
          addModal.current.showModal();
        }}
      >
        Tambah Mahasiswa
      </button>

      <dialog ref={addModal} id="my_modal_1" className="modal">
        <div className="modal-box bg-white text-black dark:border-strokedark dark:bg-boxdark dark:text-white">
          <h3 className="text-lg font-bold">Tambah Mahasiswa</h3>

          <form action={formAction}>
            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Email mahasiswa
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="email"
              required
            />

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Dosen pembimbing
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="dosen_id"
                required
              >
                <option selected disabled></option>
                {dosen.dosen.data.map((data: any, key: any) => (
                  <option key={key} value={data.id}>
                    {data.nama}
                  </option>
                ))}
              </select>
            </label>

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Angkatan
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="angkatan"
              required
            />

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              NIM
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="nim"
              required
            />

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Judul skripsi
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="judul_skripsi"
              required
            />

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Password
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="password"
              required
            />
            <div className="flex">
              <button className="btn btn-success ml-auto mr-3 mt-5" type="submit">
                Tambah data mahasiswa
              </button>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>

            </div>
          </form>

        </div>
      </dialog>

      <dialog ref={errModal} id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black dark:border-strokedark dark:bg-boxdark dark:text-white">
          {/* <h3 className="text-lg font-bold">Error</h3> */}
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{state.message.error}</span>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-warning">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
