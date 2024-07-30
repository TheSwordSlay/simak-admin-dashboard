"use client";
import Swal from "sweetalert2";
import { deleteDosen, editDosen } from "@/app/fetch-function/DosenFunctions";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
export default function DosenButton(dosen: any) {
  const modref = useRef<any>(null);
  const errModal = useRef<any>(null);
  const [state, formAction] = useFormState(editDosen, {
    message: { text: undefined, error: undefined },
  });
  useEffect(() => {
    if (state.message.error != undefined) {
      errModal.current?.showModal();
    }
    if (state.message.text === "Success Update Dosen") {
      modref.current?.close();
    }
  }, [state]);
  function confirmDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDosen(dosen.data.id);
      }
    });
  }
  return (
    <>
      <button
        className="btn btn-outline btn-warning"
        onClick={() => modref.current?.showModal()}
      >
        <FaUserEdit></FaUserEdit>
      </button>

      <dialog ref={modref} className="modal">
        <div className="modal-box bg-white text-black dark:border-strokedark dark:bg-boxdark dark:text-white">
          <h3 className="text-lg font-bold">Edit data dosen</h3>
          <form action={formAction}>
            {/* <label className="form-control w-full">
              <input type="hidden" name="id" id="" value={dosen.data.id}/>
              <div className="label">
                <span className="label-text text-black dark:text-white">
                  Nama dosen
                </span>
              </div>
              <input
                type="text"
                defaultValue={dosen.data.nama}
                placeholder="Type here"
                className="input input-bordered w-full bg-white text-black dark:bg-boxdark dark:text-white"
                name="nama"
                required
              />
            </label> */}
            <input type="hidden" name="id" id="" value={dosen.data.id} />
            <label className="mb-3 mt-5 block text-sm font-medium text-black dark:text-white">
              Nama dosen
            </label>
            <input
              type="text"
              defaultValue={dosen.data.nama}
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="nama"
              required
            />

            {/* <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black dark:text-white">
                  NIP dosen
                </span>
              </div>
              <input
                type="text"
                defaultValue={dosen.data.NIP}
                pattern="[0-9]+"
                placeholder="Type here"
                className="input input-bordered w-full bg-white text-black dark:bg-boxdark dark:text-white"
                name="nip"
                required
              />
            </label> */}

            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              NIP dosen
            </label>
            <input
              type="text"
              defaultValue={dosen.data.NIP}
              placeholder="Type here"
              pattern="[0-9]+"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="nip"
              required
            />

            {/* <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black dark:text-white">
                  Email dosen
                </span>
              </div>
              <input
                type="email"
                defaultValue={dosen.data.Email}
                placeholder="Type here"
                className="input input-bordered w-full bg-white text-black dark:bg-boxdark dark:text-white"
                name="email"
                required
              />
            </label> */}

            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Email dosen
            </label>
            <input
              type="email"
              defaultValue={dosen.data.Email}
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="email"
              required
            />

            {/* <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-black dark:text-white">
                  Password dosen
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-white text-black dark:bg-boxdark dark:text-white"
                name="password"
                required
              />
            </label> */}

            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Password dosen
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="password"
              required
            />

            <div className="flex">
              <button
                className="btn btn-success ml-auto mr-3 mt-5"
                type="submit"
              >
                Edit data dosen
              </button>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    className="btn btn-error"
                    onClick={() => {
                      modref.current?.close();
                    }}
                  >
                    Close
                  </button>
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

      <button
        className="btn btn-outline btn-error"
        onClick={() => confirmDelete()}
      >
        <MdDeleteForever />
      </button>
    </>
  );
}
