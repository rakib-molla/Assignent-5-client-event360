import { ReactNode } from "react"

type TContainerProps ={
    children: ReactNode,
    className?: string,
}

function Container({children, className}: TContainerProps) {
  return (
    <div className="w-full max-w-[1230px] mx-auto p-5">
        {children}
    </div>
  )
}

export default Container