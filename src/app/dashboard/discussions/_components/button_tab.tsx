import {clsx} from "clsx";

export default  function BottomTab({isActive, label, onClick}: {isActive: boolean, label: string, onClick:() => void}) {
    return (
        <button className="me-2" onClick={onClick}>
            <a  className={clsx(
                "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
                {
                    "border-primary text-primary": isActive
                })
            }
            >
                {label}
            </a>
        </button>
    )
}
