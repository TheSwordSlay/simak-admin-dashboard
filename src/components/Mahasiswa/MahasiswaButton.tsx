'use client'
import { deleteMahasiswa, editMahasiswa } from "@/app/fetch-function/MahasiswaFunctions";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

export default function MahasiswaButton({mahasiswa, dosen} : any) {
    function confirmDelete() {
        Swal.fire({
          title: "Anda yakin?",
          text: "Data yang sudah dihapus tidak bisa dikembalikan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, saya yakin!",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteMahasiswa(mahasiswa.id);
          }
        });
      }

      const editModal = useRef<any>(null);
      const errModal = useRef<any>(null);
      const [state, formAction] = useFormState(editMahasiswa, {
        message: { text: undefined, error: undefined },
      });

      useEffect(() => {
        if (state.message.error != undefined) {
          errModal.current?.showModal();
        }
        if (state.message.text === "Successfully Updated Data Mahasiswa") {
          editModal.current?.close();
        }
      }, [state]);
  return (
    <>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => editModal.current.showModal()}
      >
        <FaUserEdit></FaUserEdit>
      </button>

      <button
        className="btn btn-outline btn-error"
        onClick={() => confirmDelete()}
      >
        <MdDeleteForever />
      </button>

      <dialog ref={editModal} id="my_modal_1" className="modal">
        <div className="modal-box bg-white text-black dark:border-strokedark dark:bg-boxdark dark:text-white">
          <h3 className="text-lg font-bold">Tambah Mahasiswa</h3>

          <form action={formAction}>
            <input hidden name="id" value={mahasiswa.id} readOnly />
            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Email mahasiswa
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="email"
              required
              defaultValue={mahasiswa.email}
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
                defaultValue={mahasiswa.dosen.nama}
              >
                {dosen.data.map((data: any, key: any) => (
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
              defaultValue={mahasiswa.angkatan}
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
              defaultValue={mahasiswa.nim}
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
              defaultValue={mahasiswa.judul_skripsi}
            />
            <div className="flex">
              <button className="btn btn-success ml-auto mr-3 mt-5" type="submit">
                Edit data mahasiswa
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
