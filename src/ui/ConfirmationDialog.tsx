"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { lustiana } from "./fonts";

type Props = {
  title: string;
  onConfirm: () => Promise<
    | { message: string; error?: undefined }
    | { error: string; message?: undefined }
  >;
  children: ReactElement;
};

export default function ConfirmationDialog({
  title,
  onConfirm,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      {isOpen && (
        <dialog
          ref={dialogRef}
          className="relative p-4 text-center bg-white shadow-md rounded-md sm:p-5"
        >
          <div className="w-[500px] max-w-full bg-white flex flex-col">
            <div className="px-5 pb-6">
              <p className={`${lustiana.className} text-lg mb-2 p-4`}>
                {title}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={closeDialog}
                  className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-300"
                >
                  Cancel
                </button>
                <form
                  action={async () => {
                    const result = await onConfirm();
                    if (result?.error) {
                      toast.error(result.error);
                    } else {
                      toast.success(result.message);
                    }

                    closeDialog();
                  }}
                >
                  <button className="flex h-10 items-center text-white rounded-lg bg-red-500 px-4 text-sm hover:shadow-lg hover:shadow-red-500/50">
                    DELETE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
