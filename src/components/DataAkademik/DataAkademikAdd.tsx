"use client";

import { addDataAkademik } from "@/app/fetch-function/DataAkademikFunctions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import DatePickerOne from "../FormElements/DatePicker/DatePickerOne";

export default function DataAkademikAdd({ mahasiswa }: any) {
  // console.log(mahasiswa)
  const addModal = useRef<any>(null);
  const errModal = useRef<any>(null);
  const [state, formAction] = useFormState(addDataAkademik, {
    message: { text: undefined, error: undefined },
  });
  useEffect(() => {
    if (state.message.error != undefined) {
      errModal.current?.showModal();
    }
    if (state.message.text === "Success") {
      addModal.current?.close();
    }
  }, [state]);
  return (
    <>
      <button
        className="btn btn-success ml-auto"
        onClick={() => addModal.current.showModal()}
      >
        Tambah Data Akademik
      </button>

      <dialog ref={addModal} id="my_modal_1" className="modal">
        <div className="modal-box bg-white text-black dark:border-strokedark dark:bg-boxdark dark:text-white">
          <h3 className="text-lg font-bold">Tambah Mahasiswa</h3>

          <form action={formAction}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  NIM Mahasiswa
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="mahasiswa_id"
                required
              >
                <option selected disabled></option>
                {mahasiswa.value.map((data: any, key: any) => (
                  <option key={key} value={data.id}>
                    {data.nim}
                  </option>
                ))}
              </select>
            </label>

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Nama mahasiswa
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="mb-5 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="nama"
              required
            />

            <DatePickerOne
              label={"Tanggal lahir"}
              name={"tanggal_lahir"}
            ></DatePickerOne>

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Alamat
            </label>
            <input
              type="text"
              // pattern="[0-9]+"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="alamat"
              required
            />

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Tempat lahir
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="tempat_lahir"
              required
            />

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Jenis Kelamin
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="jenis_kelamin"
                required
                defaultValue={"L"}
              >
                <option>L</option>
                <option>P</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Kewarganegaraan
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="kewarganegaraan"
                required
                defaultValue={"Indonesia"}
              >
                <option>Indonesia</option>
                <option>Non WNI</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Golongan Darah
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="golongan_darah"
                required
                defaultValue={"O+"}
              >
                <option>O+</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>O-</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
              </select>
            </label>

            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              No Telp Rumah
            </label>
            <input
              type="text"
              pattern="[0-9]+"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="no_telp_rumah"
              required
            />

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Agama
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="agama"
                required
                defaultValue={"Islam"}
              >
                <option>Islam</option>
                <option>Kristen Protestan</option>
                <option>Kristen Katolik</option>
                <option>Hindu</option>
                <option>Buddha</option>
                <option>Konghuchu</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
                  Status perkawinan
                </span>
              </div>
              <select
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                name="status_perkawinan"
                required
                defaultValue={"Belum menikah"}
              >
                <option>Belum menikah</option>
                <option>Sudah menikah</option>
              </select>
            </label>

            <div className="flex">
              <button
                className="btn btn-success ml-auto mr-3 mt-5"
                type="submit"
              >
                Tambah data akademik
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
