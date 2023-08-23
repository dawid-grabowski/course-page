import { CheckCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { type ReactElement, type ReactNode } from "react";

type Props = {
  title: string;
  status: "success" | "error";
  children: ReactNode;
};

export function StatusAlert({ title, status, children }: Props): ReactElement {
  const isSuccess = status === "success";

  return (
    <div
      className={clsx(
        "rounded-md p-4 my-6",
        isSuccess ? "bg-green-50" : "bg-red-50"
      )}
    >
      <div className='flex'>
        <div className='flex-shrink-0'>
          <CheckCircleIcon
            className={clsx(
              "h-5 w-5",
              isSuccess ? "text-green-400" : "text-red-400"
            )}
            aria-hidden='true'
          />
        </div>
        <div className='ml-3'>
          <h3
            className={clsx(
              "text-sm font-medium",
              isSuccess ? "text-green-800" : "text-red-800"
            )}
          >
            {title}
          </h3>
          <div
            className={clsx(
              "mt-2 text-sm",
              isSuccess ? "text-green-700" : "text-red-700"
            )}
          >
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
