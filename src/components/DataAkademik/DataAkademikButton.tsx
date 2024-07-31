"use client";

import { deleteDataAkademik } from "@/app/fetch-function/DataAkademikFunctions";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

export default function DataAkademikButton({dataAkademik}:any) {
  console.log(dataAkademik.id)
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
        deleteDataAkademik(dataAkademik.id);
      }
    });
  }
  return (
    <>
      <button className="btn btn-outline btn-warning" onClick={() => {}}>
        <FaUserEdit></FaUserEdit>
      </button>

      <button className="btn btn-outline btn-error" onClick={() => confirmDelete()}>
        <MdDeleteForever />
      </button>
    </>
  );
}
